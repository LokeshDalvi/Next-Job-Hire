// lib/fetchJobs.ts
import { Job } from "@/lib/types"; 
import { normalizeJob } from "@/lib/job"; 

export async function fetchJobs({
  results = 10,
  what = "developer",
}: { results?: number; what?: string } = {}): Promise<Job[]> {
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

export async function fetchJobById(jobId: string) {
  const url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_APP_KEY}&id=${jobId}`;

  const res = await fetch(url);
  if (!res.ok) return null;

  const data = await res.json();
  return data.results[0] ? normalizeJob(data.results[0]) : null;
}
