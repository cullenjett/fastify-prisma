import Fastify from 'fastify';
import pinoColada from 'pino-colada';

import { prisma } from 'data-sources/prisma';

export function createServer() {
  const loggerOptions = {
    prettyPrint: {},
    prettifier: pinoColada,
  };

  const server = Fastify({ logger: loggerOptions });

  server.get('/users', async () => {
    const users = await prisma.user.findMany({
      include: { posts: true, profile: true },
    });
    return users;
  });

  return server;
}
