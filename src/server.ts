import Fastify from 'fastify';
import pinoColada from 'pino-colada';
import S from 'fluent-json-schema';

import { prisma } from 'data-sources/prisma';

export function createServer() {
  const loggerOptions = {
    prettyPrint: {},
    prettifier: pinoColada,
  };

  const server = Fastify({ logger: loggerOptions });

  const schema = {
    response: {
      200: S.array().items(
        S.object()
          .prop('id', S.integer())
          .prop('email', S.string())
          .prop('name', S.string())
          .prop(
            'posts',
            S.array().items(
              S.object()
                .prop('id', S.integer())
                .prop('createdAt', S.string())
                .prop('updatedAt', S.string())
                .prop('title', S.string())
                .prop('content', S.oneOf([S.null(), S.string()]))
                .prop('published', S.boolean())
                .prop('authorId', S.integer())
            )
          )
          .prop(
            'profile',
            S.object()
              .prop('id', S.integer())
              .prop('bio', S.string())
              .prop('userId', S.integer())
          )
      ),
    },
  };
  server.get('/users', { schema }, async (request) => {
    const users = await prisma.user.findMany({
      include: { posts: true, profile: true },
    });
    return users;
  });

  return server;
}
