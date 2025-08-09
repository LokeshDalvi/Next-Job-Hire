import Link from "next/link";
import JobCard from "@/components/JobCard";
import jobs_data from "@/data/job-data.json";

export default function Home() {
  const new_jobs = jobs_data.slice(4);

  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-[70vh] bg-[#03256C] text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#03256C]/90 to-[#2541B2]/70"></div>
        <div className="z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your <span className="text-cyan-300">Dream Job</span> Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Thousands of jobs waiting for your skills
          </p>
          <Link
            href="/jobs"
            className="btn bg-cyan-400 hover:bg-cyan-300 text-[#03256C] font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {new_jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
