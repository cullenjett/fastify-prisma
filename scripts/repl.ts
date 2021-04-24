import repl from 'repl';

// TODO: why does this need to be a relative import?
import { prisma } from '../src/data-sources/prisma';

const runningRepl = repl.start({
  prompt: 'fastify-prisma $ ',
  useColors: true,
});

runningRepl.context.prisma = prisma;
