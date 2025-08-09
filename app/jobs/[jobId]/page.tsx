import Link from "next/link";
import jobs_data from "@/data/job-data.json";
import { DollarSign, MapPin } from "lucide-react";

const JobDetails = async ({ params }: { params: { jobId: string } }) => {
  const { jobId } = await params;
  const job = jobs_data.find((job) => job.id === parseInt(jobId));
  if (!job) {
    return (
      <h1 className="text-center text-2xl mt-10 font-semibold">
        Job Not Found
      </h1>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200 mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-lg bg-[#2541B2]/10 flex items-center justify-center">
            <span className="text-[#2541B2] font-bold text-2xl">
              {job.title.charAt(0)}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
        </div>

        <p className="text-gray-700 mb-6 whitespace-pre-line">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 bg-cyan-100 text-cyan-800 text-sm px-4 py-1.5 rounded-full">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-2 bg-purple-100 text-purple-800 text-sm px-4 py-1.5 rounded-full">
            <DollarSign className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button className="w-full sm:w-auto bg-[#2541B2] hover:bg-[#1A2F8A] text-white text-lg py-2 px-6 rounded-lg transition-colors">
            Apply Now
          </button>

          <Link
            href="/jobs"
            className="text-[#2541B2] font-medium hover:underline"
          >
            ← Back to Listings
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
