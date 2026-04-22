import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const eventData = [
  { date: '2026-03-01', title: 'Zbiórka LSO', time: '09:00', category: 'lso', targetUrl: '/grupy/lso' },
  { date: '2026-03-01', title: 'Domowy Kościół', time: '16:00', category: 'domowy', targetUrl: '/grupy/domowy' },
  { date: '2026-03-04', title: 'Krąg Biblijny', time: '18:45', category: 'biblijna', targetUrl: '/grupy/biblijna' },
  { date: '2026-03-06', title: 'Droga Krzyżowa', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/droga-krzyzowa' },
  { date: '2026-03-29', title: 'Niedziela Palmowa - Konkurs Palm', time: '11:00', category: 'wydarzenie', targetUrl: '/wydarzenia/palmy' },
  
  { date: '2026-04-02', title: 'Msza Wieczerzy Pańskiej', time: '18:00', category: 'wydarzenie', targetUrl: '/wydarzenia/wielki-czwartek' },
  { date: '2026-04-03', title: 'Ciemna Jutrznia', time: '08:00', category: 'wydarzenie', targetUrl: '/wydarzenia/jutrznia' },
  { date: '2026-04-04', title: 'Wigilia Paschalna', time: '20:00', category: 'wydarzenie', targetUrl: '/wydarzenia/wigilia-paschalna' },
  { date: '2026-04-23', title: 'Uroczystość św. Wojciecha (Odpust)', time: '18:00', category: 'wydarzenie', targetUrl: '/wydarzenia/odpust' },
  
  { date: '2026-05-01', title: 'Rozpoczęcie Nabożeństw Majowych', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/majowe' },
  { date: '2026-05-13', title: 'Nabożeństwo Fatimskie', time: '20:00', category: 'wydarzenie', targetUrl: '/wydarzenia/fatimskie' },
  { date: '2026-05-24', title: 'Zesłanie Ducha Świętego', time: '11:00', category: 'wydarzenie', targetUrl: '/wydarzenia/zeslanie' }
];

async function main() {
  console.log('🌱 Usuwanie starych wydarzeń...');
  await prisma.event.deleteMany();

  console.log('🚀 Seedowanie nowych wydarzeń...');

  for (const e of eventData) {
    const startDateTime = new Date(`${e.date}T${e.time}:00Z`);

    await prisma.event.create({
      data: {
        title: e.title,
        startTime: startDateTime,
        description: `Kategoria: ${e.category}`, 
        location: 'Parafia', 
      },
    });
  }

  console.log('✅ Baza została pomyślnie zasiana!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });