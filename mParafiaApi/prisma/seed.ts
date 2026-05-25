import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Rozpoczynam dodawanie Super Admina...');

  const login = 'szefowa';

  const suroweHaslo = process.env.SUPER_ADMIN_PASSWORD;

  if (!suroweHaslo) {
    console.error('❌ BŁĄD: Brak zmiennej SUPER_ADMIN_PASSWORD w pliku .env!');
    console.error('Dodaj ją, zanim uruchomisz seed.');
    process.exit(1);
  }

  const existingAdmin = await prisma.admin.findUnique({
    where: { login }
  });

  if (existingAdmin) {
    console.log(`⚠️ Admin o loginie "${login}" już istnieje w bazie. Przerywam.`);
    return;
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(suroweHaslo, saltRounds);

  const superAdmin = await prisma.admin.create({
    data: {
      login,
      passwordHash,
      isSuperAdmin: true
    }
  });

  console.log(`✅ Sukces! Stworzono Super Admina o ID: ${superAdmin.id}`);
  console.log(`🔑 Login: ${login}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Błąd podczas zapisu do bazy:', e);
    await prisma.$disconnect();
    process.exit(1);
  });