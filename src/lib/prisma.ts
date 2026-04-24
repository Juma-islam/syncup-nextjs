import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // এটি দিলে ব্যাকএন্ডে কী কুয়েরি চলছে তা টার্মিনালে দেখতে পাবেন
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;