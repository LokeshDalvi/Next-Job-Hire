// lib/fetchJobs.ts
import { Job } from "@/components/JobCard";

export async function fetchJobs(
  { results = 10, what = "javascript" }: { results?: number; what?: string } = {}
): Promise<Job[]> {
  const res = await fetch(
    `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_API_KEY}&results_per_page=${results}&what=${what}&content-type=application/json`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch jobs", await res.text());
    return [];
  }

  const data = await res.json();
  return data.results || [];
}

