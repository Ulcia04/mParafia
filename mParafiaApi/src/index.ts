import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const app = express();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

app.use(cors()); 
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ message: 'Serwer mParafia z Prisma v7 działa jak marzenie! ✨' });
});

app.get('/api/events', async (req, res) => {
  const events = await prisma.event.findMany({
    where: { startTime: { gte: new Date() } }, 
    orderBy: { startTime: 'asc' }
  });
  res.json(events);
});
app.get('/api/events/archive', async (req, res) => {
  const events = await prisma.event.findMany({
    where: { startTime: { lt: new Date() } },
    orderBy: { startTime: 'desc' }
  });
  res.json(events);
});
app.get('/api/groups', async (req, res) => {
  try {
    const groups = await prisma.group.findMany();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: "Błąd podczas pobierania grup" });
  }
});

app.post('/api/groups', async (req, res) => {
  try {
    const { name, description } = req.body; 
    const nowaGrupa = await prisma.group.create({
      data: {
        name: name,
        description: description,
      },
    });
    
    res.json(nowaGrupa); 

  } catch (error) {
    console.error("Błąd zapisu do bazy:", error);
    res.status(500).json({ error: "Nie udało się stworzyć grupy" });
  }
});
app.put('/api/events/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, startTime, location, groupId } = req.body;
  const updated = await prisma.event.update({
    where: { id: Number(id) },
    data: { title, description, startTime: new Date(startTime), location, groupId: Number(groupId) }
  });
  res.json(updated);
});
app.delete('/api/events/:id', async (req, res) => {
  await prisma.event.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Usunięto" });
});

app.get('/api/events/all', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { startTime: 'desc' }
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera" });
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const { title, description, startTime, location, groupId } = req.body;
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        startTime: new Date(startTime),
        location,
        groupId: groupId ? Number(groupId) : null 
      }
    });
    res.json(newEvent);
  } catch (error) {
    console.error("Błąd dodawania wydarzenia:", error);
    res.status(500).json({ error: "Nie udało się zapisać" });
  }
});

app.put('/api/groups/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, photoUrl } = req.body;
  const updated = await prisma.group.update({
    where: { id: Number(id) },
    data: { name, description, photoUrl }
  });
  res.json(updated);
});

app.delete('/api/groups/:id', async (req, res) => {
  await prisma.group.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Usunięto grupę" });
});

app.put('/api/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, startTime, location, groupId } = req.body;
    
    const updatedEvent = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        ...(startTime && { startTime: new Date(startTime) }),
        location,
        groupId: groupId ? Number(groupId) : null
      }
    });
    res.json(updatedEvent);
  } catch (error) {
    console.error("Błąd edycji wydarzenia:", error);
    res.status(500).json({ error: "Nie udało się zaktualizować wydarzenia" });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({
      where: { id: Number(id) }
    });
    res.json({ message: "Usunięto pomyślnie" });
  } catch (error) {
    console.error("Błąd usuwania wydarzenia:", error);
    res.status(500).json({ error: "Nie udało się usunąć wydarzenia" });
  }
});


app.get('/api/announcements', async (req, res) => {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: { date: 'desc' }, 
    });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się pobrać ogłoszeń' });
  }
});

app.get('/api/announcements/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const announcement = await prisma.announcement.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Nie znaleziono ogłoszenia' });
  }
});

app.post('/api/announcements', async (req, res) => {
  const { title, content, date } = req.body;
  try {
    const newAnnouncement = await prisma.announcement.create({
      data: {
        title,
        content,
        date: new Date(date),
      },
    });
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się dodać ogłoszenia' });
  }
});

app.put('/api/announcements/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, date } = req.body;
  try {
    const updatedAnnouncement = await prisma.announcement.update({
      where: { id: parseInt(id) },
      data: {
        title,
        content,
        date: new Date(date),
      },
    });
    res.json(updatedAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się zaktualizować ogłoszenia' });
  }
});

app.delete('/api/announcements/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.announcement.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się usunąć ogłoszenia' });
  }
});

app.put('/api/announcements/:id/toggle-main', async (req, res) => {
  const { id } = req.params;
  try {
    const current = await prisma.announcement.findUnique({ where: { id: parseInt(id) } });
    
    if (!current) {
      return res.status(404).json({ error: 'Nie znaleziono ogłoszenia' });
    }

    const updated = await prisma.announcement.update({
      where: { id: parseInt(id) },
      data: { isMain: !current.isMain }
    });
    
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serwer odpalony na porcie http://localhost:${PORT} 🚀`);
});

