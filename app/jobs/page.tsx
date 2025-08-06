// app/jobs/page.tsx
"use client";
import jobs_data from "@/data/job-data.json";
import JobCard from "@/components/JobCard";
import { useSearch } from "@/context/SearchContext";

function JobsPage() {
  const { searchQuery } = useSearch();

  const filteredJobs = jobs_data.filter(
    (job) => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobsPage;
