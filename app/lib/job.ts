// lib/job.ts
import type { RawJob, Job } from "@/lib/types"; 


export function normalizeJob(job: RawJob): Job {
  return {
    id: typeof job.id === "number" ? job.id : parseInt(job.id),
    externalId: job.externalId || job.id?.toString(),
    title: job.title,
    company:
      typeof job.company === "string"
        ? job.company
        : job.company?.display_name || "Unknown Company",
    url: job.url || job.redirect_url || "",
    description: job.description,
    location:
      typeof job.location === "string"
        ? job.location
        : job.location?.display_name || "Unknown",
    min_salary: job.min_salary || job.salary_min || 0,
    max_salary: job.max_salary || job.salary_max || 0,
    source: job.source || "adzuna",
    createdAt: job.createdAt
      ? new Date(job.createdAt)
      : new Date(job.created || Date.now()),
    updatedAt: job.updatedAt ? new Date(job.updatedAt) : new Date(),
    contract_type: job.contract_type || "",
    category:
      typeof job.category === "string"
        ? job.category
        : job.category?.label || "",
  };
}


