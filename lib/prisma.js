import { PrismaClient } from "@prisma/client";

// Get instance of prisma client
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
