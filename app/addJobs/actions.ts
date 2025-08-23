import { prisma } from "@/lib/prisma";
import crypto from "crypto";

function generateExternalId(length = 10) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}
// Utility function to add a job
export async function addJob(
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