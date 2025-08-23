import Link from "next/link";
import { redirect } from "next/navigation";
import { DollarSign, MapPin, Pencil, Trash2 } from "lucide-react";
import type { Job } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { updateJob, deleteJob } from "./actions"; // clean import
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const JobDetails = async ({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) => {
  const { jobId } = await params;

  const job: Job | null = await prisma.job.findUnique({
    where: { id: jobId },
  });

  if (!job) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-semibold mb-4">Job Not Found</h1>
        <Link
          href="/jobs"
          className="inline-flex items-center px-4 py-2 bg-[#2541B2] text-white rounded-lg hover:bg-[#1A2F8A] transition-colors"
        >
          ← Back to Listings
        </Link>
      </div>
    );
  }

  async function updateJobAction() {
    "use server";
    await updateJob(jobId);
    redirect("/jobs");
  }

  async function deleteJobAction() {
    "use server";
    await deleteJob(jobId);
    redirect("/jobs");
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
            <span>
              {job.min_salary} - {job.max_salary}
            </span>
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
        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <form action={updateJobAction}>
          <button className="flex items-center gap-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-2 px-3 rounded-lg text-sm">
            <Pencil className="w-4 h-4" /> Edit
          </button>
          </form>
          <form action={deleteJobAction}>
            <button
              type="submit"
              className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-800 py-2 px-3 rounded-lg text-sm"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
