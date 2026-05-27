import 'dotenv/config';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// MIDDLEWARE
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// UPLOAD PLIKÓW
const uploadDir = path.join(__dirname, '../../public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, '../../public/uploads')));

// --- TYPY DLA TYPESCRIPT ---
interface AdminPayload {
  adminId: number;
  isSuperAdmin: boolean;
  allowedGroupIds: number[];
}

export interface AuthRequest extends Request {
  admin?: AdminPayload;
}

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  console.error("UWAGA: Brak JWT_SECRET w pliku .env!");
}

// --- STRAŻNICY (MIDDLEWARE AUTORYZACJI) ---
const verifyAdmin = (req: AuthRequest, res: Response, next: NextFunction): any => {
  const token = req.cookies.admin_token;
  if (!token) return res.status(401).json({ error: "Brak dostępu - zaloguj się" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminPayload;
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Nieprawidłowy lub wygasły token" });
  }
};

const verifySuperAdmin = (req: AuthRequest, res: Response, next: NextFunction): any => {
  verifyAdmin(req, res, () => {
    if (!req.admin?.isSuperAdmin) {
      return res.status(403).json({ error: "Wymagane uprawnienia Super Administratora" });
    }
    next();
  });
};

// --- ENDPOINTY AUTORYZACJI ---
app.post('/api/admin/login', async (req: Request, res: Response): Promise<any> => {
  const { login, password } = req.body;
  if (!login || !password) return res.status(400).json({ error: "Podaj login i hasło" });

  try {
    const admin = await prisma.admin.findUnique({
      where: { login },
      include: { managedGroups: true }
    });

    if (!admin) return res.status(401).json({ error: "Błędne dane logowania" });

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) return res.status(401).json({ error: "Błędne dane logowania" });

    const allowedGroupIds = admin.managedGroups.map((ag: any) => ag.groupId);

    const payload: AdminPayload = { adminId: admin.id, isSuperAdmin: admin.isSuperAdmin, allowedGroupIds };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '12h' });

    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 12 * 60 * 60 * 1000
    });

    res.json({ message: "Zalogowano", isSuperAdmin: admin.isSuperAdmin, allowedGroupIds });
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera podczas logowania" });
  }
});

app.post('/api/admin/logout', (req: Request, res: Response) => {
  res.clearCookie('admin_token');
  res.json({ message: "Wylogowano" });
});

// --- PUBLICZNE ENDPOINTY ---
app.get('/api/status', (req: Request, res: Response) => {
  res.json({ message: 'Serwer mParafia działa z systemem Adminów! ✨ (TypeScript)' });
});

app.get('/api/events', async (req: Request, res: Response) => {
  const events = await prisma.event.findMany({
    where: { startTime: { gte: new Date() } },
    orderBy: { startTime: 'asc' },
    include: { groups: { include: { group: true } } }
  });
  res.json(events);
});

app.get('/api/events/archive', async (req: Request, res: Response) => {
  const events = await prisma.event.findMany({
    where: { startTime: { lt: new Date() } },
    orderBy: { startTime: 'desc' },
    include: { groups: { include: { group: true } } }
  });
  res.json(events);
});

app.get('/api/events/all', async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { startTime: 'desc' },
      include: { groups: { include: { group: true } } }
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera" });
  }
});

app.get('/api/groups', async (req: Request, res: Response) => {
  try {
    const groups = await prisma.group.findMany({
      include: { events: { include: { event: true } } }
    });
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: "Błąd podczas pobierania grup" });
  }
});

app.get('/api/announcements', async (req: Request, res: Response) => {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: { date: 'desc' },
    });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się pobrać ogłoszeń' });
  }
});

app.get('/api/announcements/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const announcement = await prisma.announcement.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Nie znaleziono ogłoszenia' });
  }
});

app.get('/api/questions', async (req: Request, res: Response) => {
  try {
    const publishedQuestions = await prisma.question.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(publishedQuestions);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się pobrać opublikowanych pytań' });
  }
});

app.post('/api/questions', async (req: Request, res: Response) => {
  try {
    const { content, author, answer, isPublished } = req.body;
    const newQuestion = await prisma.question.create({
      data: {
        content,
        author,
        answer: answer || '',
        isPublished: isPublished || false
      }
    });
    res.json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się wysłać pytania' });
  }
});

app.get('/api/kancelaria', async (req: Request, res: Response) => {
  try {
    const items = await prisma.kancelariaItem.findMany();
    res.json(items);
  } catch (error) {
    console.error("BŁĄD BACKENDU (GET KANCELARIA):", error);
    res.status(500).json({ error: 'Błąd pobierania danych' });
  }
});


// --- CHRONIONE ENDPOINTY (Wymagają logowania) ---

app.post('/api/upload', verifyAdmin, upload.single('photo'), (req: AuthRequest, res: Response): any => {
  if (!req.file) {
    return res.status(400).json({ error: 'Brak pliku' });
  }
  const port = process.env.PORT || 3000;
  const fileUrl = `${req.protocol}://${req.hostname}:${port}/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

// -- GRUPY --
app.post('/api/groups', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const { name, description, photoUrl, color } = req.body;
    const nowaGrupa = await prisma.group.create({
      data: { name, description, photoUrl, color },
    });
    res.json(nowaGrupa);
  } catch (error) {
    res.status(500).json({ error: "Nie udało się stworzyć grupy" });
  }
});

app.put('/api/groups/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const { name, description, photoUrl, color } = req.body;
  const updated = await prisma.group.update({
    where: { id: Number(id) },
    data: { name, description, photoUrl, color }
  });
  res.json(updated);
});

app.delete('/api/groups/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  await prisma.group.delete({ where: { id: Number(id) } });
  res.json({ message: "Usunięto grupę" });
});

// -- WYDARZENIA --
app.post('/api/events', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, startTime, location, groupIds } = req.body;
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        startTime: new Date(startTime),
        location,
        groups: {
          create: (groupIds || []).map((id: number) => ({
            group: { connect: { id: Number(id) } }
          }))
        }
      }
    });
    res.json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Nie udało się zapisać wydarzenia" });
  }
});

app.put('/api/events/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    const { title, description, startTime, location, groupIds } = req.body;

    const updatedEvent = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        ...(startTime && { startTime: new Date(startTime) }),
        location,
        groups: {
          deleteMany: {},
          create: (groupIds || []).map((gId: number) => ({
            group: { connect: { id: Number(gId) } }
          }))
        }
      }
    });
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: "Nie udało się zaktualizować wydarzenia" });
  }
});

app.delete('/api/events/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.event.delete({ where: { id: Number(id) } });
    res.json({ message: "Usunięto pomyślnie" });
  } catch (error) {
    res.status(500).json({ error: "Nie udało się usunąć wydarzenia" });
  }
});

app.post('/api/events/bulk', verifyAdmin, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const { events } = req.body;
    if (!events || !Array.isArray(events)) {
      return res.status(400).json({ error: "Brak danych lub zły format" });
    }

    const created = await prisma.event.createMany({
      data: events.map((e: any) => ({
        title: e.title,
        description: e.description || '',
        startTime: new Date(e.startTime),
        location: 'Kościół',
      }))
    });
    res.json({ message: `Pomyślnie dodano ${created.count} intencji!`, count: created.count });
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera podczas zapisywania intencji." });
  }
});

// -- OGŁOSZENIA --
app.post('/api/announcements', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const { title, content, date } = req.body;
  try {
    const newAnnouncement = await prisma.announcement.create({
      data: { title, content, date: new Date(date) },
    });
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się dodać ogłoszenia' });
  }
});

app.put('/api/announcements/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  const { title, content, date } = req.body;
  try {
    const updatedAnnouncement = await prisma.announcement.update({
      where: { id: parseInt(id) },
      data: { title, content, date: new Date(date) },
    });
    res.json(updatedAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się zaktualizować' });
  }
});

app.delete('/api/announcements/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.announcement.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się usunąć ogłoszenia' });
  }
});

app.put('/api/announcements/:id/toggle-main', verifyAdmin, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const current = await prisma.announcement.findUnique({ where: { id: parseInt(id) } });
    if (!current) return res.status(404).json({ error: 'Nie znaleziono' });

    const updated = await prisma.announcement.update({
      where: { id: parseInt(id) },
      data: { isMain: !current.isMain }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

// -- Q&A --
app.get('/api/questions/all', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const questions = await prisma.question.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

app.put('/api/questions/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    const { answer, isPublished, content } = req.body;
    const updated = await prisma.question.update({
      where: { id: Number(id) },
      data: { answer, isPublished, content }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się zaktualizować pytania' });
  }
});

app.delete('/api/questions/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.question.delete({ where: { id: Number(id) } });
    res.json({ message: 'Usunięto pytanie' });
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się usunąć pytania' });
  }
});

// -- KANCELARIA (NOWE ENDPOINTY DLA ZDJĘĆ I PLIKÓW) --
app.post('/api/kancelaria', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const { title, photoUrl, content, footer, files } = req.body;
    const newItem = await prisma.kancelariaItem.create({
      data: { title, photoUrl, content, footer, files: files || [] }
    });
    res.json(newItem);
  } catch (error) {
    console.error("BŁĄD BACKENDU (POST KANCELARIA):", error);
    res.status(500).json({ error: 'Błąd tworzenia' });
  }
});

app.put('/api/kancelaria/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    const { title, photoUrl, content, footer, files } = req.body;
    const updated = await prisma.kancelariaItem.update({
      where: { id: Number(id) },
      data: { title, photoUrl, content, footer, files: files || [] }
    });
    res.json(updated);
  } catch (error) {
    console.error("BŁĄD BACKENDU (PUT KANCELARIA):", error);
    res.status(500).json({ error: 'Błąd aktualizacji' });
  }
});

app.delete('/api/kancelaria/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.kancelariaItem.delete({ where: { id: Number(id) } });
    res.json({ message: 'Usunięto' });
  } catch (error) {
    res.status(500).json({ error: 'Błąd usuwania' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer odpalony na porcie http://localhost:${PORT} 🚀 - rakieta <3`);
});