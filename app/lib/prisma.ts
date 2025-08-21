// lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

function generateExternalId(length = 10) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}
// Utility function to add a job
export function addJob(
  title: string,
  company: string,
  location: string,
  description: string,
  url: string,
  min_salary: number,
  max_salary: number
) {
  const externalId = generateExternalId();
  return prisma.job.create({
    data: {
      title,
      company,
      location,
      description,
      url,
      min_salary,
      max_salary,
      source: "Job Portal",
      externalId,
    },
  });
}
