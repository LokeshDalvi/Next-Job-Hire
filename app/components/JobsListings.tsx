// app/components/JobsListings.tsx
"use client";
import JobCard,{Job} from "@/components/JobCard";
import { useSearch } from "@/context/SearchContext";

function JobsListings({ jobs }:{jobs:Job[]}) {
  const { searchQuery } = useSearch();

  const filteredJobs = jobs.filter(
    (job) => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.display_name.toLowerCase().includes(searchQuery.toLowerCase()),
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
