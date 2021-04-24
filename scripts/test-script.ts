import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Cullen Jett',
  //     email: 'cullenjett@gmail.com',
  //     posts: {
  //       create: {
  //         title: 'Hello World',
  //       },
  //     },
  //     profile: {
  //       create: {
  //         bio: 'Lorem ipsum',
  //       },
  //     },
  //   },
  // });
  const users = await prisma.user.findMany({
    include: { posts: true, profile: true },
  });
  console.dir(users, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(() => prisma.$disconnect());
