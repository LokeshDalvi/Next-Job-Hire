// app/components/JobsListings.tsx
"use client";
import JobCard from "@/components/JobCard";
import type { Job } from "@/lib/types"; 
import { useSearch } from "@/context/SearchContext";

function JobsListings({ jobs }: { jobs: Job[] }) {
  const { searchQuery } = useSearch();

  // filter on normalized data
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobsListings;
