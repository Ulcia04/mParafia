import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Rozpoczynam zasiewanie bazy danych...');

  // --- 1. SUPER ADMIN (Szefowa) ---
  const suroweHasloSuper = process.env.SUPER_ADMIN_PASSWORD;
  if (!suroweHasloSuper) {
    console.error('❌ BŁĄD: Brak zmiennej SUPER_ADMIN_PASSWORD w pliku .env!');
    process.exit(1);
  }

  const existingSuperAdmin = await prisma.admin.findUnique({ where: { login: 'szefowa' } });
  if (!existingSuperAdmin) {
    const passwordHash = await bcrypt.hash(suroweHasloSuper, 10);
    await prisma.admin.create({
      data: { login: 'szefowa', passwordHash, isSuperAdmin: true }
    });
    console.log(`✅ Stworzono Super Admina: szefowa`);
  } else {
    console.log(`⚠️ Super Admin 'szefowa' już istnieje.`);
  }

  let groups = await prisma.group.findMany({ take: 3 });

  // --- 2. ZWYKŁY ADMIN DO TESTÓW (Animator) ---
  const loginAnimatora = 'animator';
  const hasloAnimatora = 'testowe123'; // Proste hasło tylko do testów

  const existingAnimator = await prisma.admin.findUnique({ where: { login: loginAnimatora } });

  if (!existingAnimator) {
    console.log(`👤 Tworzę zwykłego admina: ${loginAnimatora}...`);
    const passwordHash = await bcrypt.hash(hasloAnimatora, 10);

    await prisma.admin.create({
      data: {
        login: loginAnimatora,
        passwordHash,
        isSuperAdmin: false,
        managedGroups: {
          create: groups.map(g => ({
            groupId: g.id
          }))
        }
      }
    });
    console.log(`✅ Zwykły admin gotowy! Login: ${loginAnimatora}, Hasło: ${hasloAnimatora}`);
    console.log(`🔗 Przypisano do grup ID: ${groups.map(g => g.id).join(', ')}`);
  } else {
    console.log(`⚠️ Zwykły admin '${loginAnimatora}' już istnieje.`);
  }
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