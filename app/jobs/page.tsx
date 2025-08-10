// app/jobs/JobsPage.tsx
import JobsListings from "@/components/JobsListings";
import {Job} from "@/components/JobCard";
import { fetchJobs } from "@/lib/fetchJobs";
async function JobsPage() {

  const jobs: Job[] = await fetchJobs({ results: 15 });

  return (
      <JobsListings jobs={jobs} />
  );
}

export default JobsPage;
