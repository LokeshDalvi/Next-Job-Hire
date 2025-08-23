import Link from "next/link";
import { DollarSign, MapPin } from "lucide-react";
import type { Job } from "@/lib/types"; 

function JobCard({ job }: { job: Job }) {
  return (
    <div
      key={job.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#2541B2]/10 flex items-center justify-center">
            <span className="text-[#2541B2] font-bold text-lg">
              {job.title.charAt(0)}
            </span>
          </div>
          <Link href={`/jobs/${job.id}`}>
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 bg-cyan-100 text-cyan-800 text-sm px-4 py-1.5 rounded-full">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-2 bg-purple-100 text-purple-800 text-sm px-4 py-1.5 rounded-full">
            <DollarSign className="w-4 h-4" />
            <span>
              {job.min_salary} - {job.max_salary}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
