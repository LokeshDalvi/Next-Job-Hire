"use server";

import { prisma } from "@/lib/prisma";
// import { redirect } from "next/navigation";

export async function getJob(id: string) {
  return prisma.job.findUnique({
    where: { id },
  });
}

export async function updateJob(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;
  const url = formData.get("url") as string;
  const externalId = formData.get("externalId") as string;
  const min_salary = Number(formData.get("min_salary"));
  const max_salary = Number(formData.get("max_salary"));

  try {
    await prisma.job.update({
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

    return { success: true, id };
  } catch (err) {
    console.error("Error updating job:", err);
    return { success: false, error: "Failed to update job" };
  }
}

export async function deleteJob(id: string) {
  return prisma.job.delete({
    where: { id },
  });
}
