// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const athlete1 = await prisma.athlete.create({
    data:{
      first_name: 'admin',
      last_name: 'admin',
      username: 'admin',
      athlete_password: 'admin'
    }
  });

  const athlete2 = await prisma.athlete.create({
    data: {
          first_name: 'firstathlete',
          last_name: 'firstathlete',
          username: 'firstathlete',
          athlete_password: 'firstathlete'
      },
  });

  const athlete3 = await prisma.athlete.create({
    data: {
          first_name: 'secondathlete',
          last_name: 'secondathlete',
          username: 'secondathlete',
          athlete_password: 'secondathlete'
      },
  });

  console.log({ athlete1, athlete2,athlete3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });