"use server";

import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

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
  max_salary: number,
) {
  try {
    const externalId = generateExternalId();
    await prisma.job.create({
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

    revalidatePath("/jobs");
    return { success: true };
  } catch (error) {
    console.error("Error adding job:", error);
    return { success: false, error: "Failed to add job" };
  }
}