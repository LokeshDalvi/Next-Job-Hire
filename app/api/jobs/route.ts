import { prisma } from "@/lib/prisma";

export async function GET() {
  const jobs = await prisma.job.findMany(); // depends on table name
  return Response.json(jobs);
}
