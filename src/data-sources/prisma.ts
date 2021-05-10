/**
 * Singleton instance of the PrismaClient.
 * In development we add our `prisma` instance to the global object
 * to prevent hot-reloading from creating multiple, unwanted instances
 * of the PrismaClient.
 *
 * https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
 */

import { PrismaClient } from '@prisma/client';

// Add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}
