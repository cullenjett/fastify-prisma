/**
 * Script to generate db seeds.
 * Automatically run by Prisma.
 * https://www.prisma.io/docs/guides/database/seed-database
 */

// This needs to be a relative import because this script is
// run with ts-node, which does not output actual files
import { prisma } from '../src/data-sources/prisma';

async function main() {
  const cullen = await prisma.user.upsert({
    where: { email: 'cullenjett@gmail.com' },
    update: {},
    create: {
      name: 'Cullen Jett',
      email: 'cullenjett@gmail.com',
      posts: {
        create: {
          title: 'Hello World',
        },
      },
      profile: {
        create: {
          bio: 'Lorem ipsum',
        },
      },
    },
  });

  console.log({ cullen });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
