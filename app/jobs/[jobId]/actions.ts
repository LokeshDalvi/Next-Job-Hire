"use server";

import { prisma } from "@/lib/prisma";

export async function updateJob(
  id: string,
  title: string,
  company: string,
  location: string,
  description: string,
  url: string,
  externalId: string,
  min_salary: number,
  max_salary: number
) {
  return prisma.job.update({
    where: { id },
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

export async function deleteJob(id: string) {
  return prisma.job.delete({
    where: { id },
  });
}
