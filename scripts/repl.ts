import repl from 'repl';

// This needs to be a relative import because this script is
// run with ts-node, which does not output actual files
import { prisma } from '../src/data-sources/prisma';

const runningRepl = repl.start({
  prompt: 'fastify-prisma $ ',
  useColors: true,
});

runningRepl.context.prisma = prisma;
