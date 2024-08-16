// src/lib/db.ts

import { PrismaClient } from '@prisma/client';

// Extend the Node.js global object to include our prisma client
declare global {
  var prismaGlobal: PrismaClient | undefined;
}

// Singleton pattern for Prisma Client
const prisma = global.prismaGlobal || new PrismaClient();

// Only in development, assign the client to globalThis to reuse it across hot reloads
if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = prisma;
}

export default prisma;
