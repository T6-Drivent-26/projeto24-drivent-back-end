import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: 'Driven.t',
        logoImageUrl: 'https://files.driveneducation.com.br/images/logo-rounded.png',
        backgroundImageUrl: 'linear-gradient(to right, #FA4098, #FFD77F)',
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, 'days').toDate(),
      },
    });
  }

  const categories = [
    { category: 'Presencial',
      price: 250
    },
    { category: 'Online',
      price: 100
    },
  ];

  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true
  });

  const accommodations = [
    { accommodation: 'Sem Hotel',
      price: 0
    },
    { accommodation: 'Com Hotel',
      price: 350
    },
  ];

  await prisma.accommodation.createMany({
    data: accommodations,
    skipDuplicates: true
  });

  console.log({ event });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
