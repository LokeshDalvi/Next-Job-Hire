"use client";

import { updateJob } from "@/jobs/[jobId]/actions";
import type { Job } from "@/lib/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function EditJob({ job }:{job:Job}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await updateJob(formData);

      if (result.success) {
        toast.success("Job updated successfully!");
        router.push(`/jobs/${result.id}`);
      } else {
        toast.error(result.error || "Failed to update job!");
      }
    });
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden inputs */}
        <input type="hidden" name="id" value={job.id} />
        <input type="hidden" name="externalId" value={job.externalId} />

        {/* Title */}
        <div>
            <label className="block mb-1 font-medium">Job Title</label>
            <input
            type="text"
            name="title"
            defaultValue={job.title}
            className="w-full border rounded-lg p-2"
            required
            />
        </div>

        {/* Company */}
        <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
            type="text"
            name="company"
            defaultValue={job.company}
            className="w-full border rounded-lg p-2"
            required
            />
        </div>

        {/* Location */}
        <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
            type="text"
            name="location"
            defaultValue={job.location}
            className="w-full border rounded-lg p-2"
            required
            />
        </div>

        {/* URL */}
        <div>
            <label className="block mb-1 font-medium">Job URL</label>
            <input
            type="url"
            name="url"
            defaultValue={job.url || ""}
            className="w-full border rounded-lg p-2"
            />
        </div>

        {/* Description */}
        <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
            name="description"
            defaultValue={job.description}
            className="w-full border rounded-lg p-2 h-28"
            required
            />
        </div>

        {/* Min Salary */}
        <div>
            <label className="block mb-1 font-medium">Minimum Salary</label>
            <input
            type="number"
            name="min_salary"
            defaultValue={job.min_salary}
            className="w-full border rounded-lg p-2"
            required
            />
        </div>

        {/* Max Salary */}
        <div>
            <label className="block mb-1 font-medium">Maximum Salary</label>
            <input
            type="number"
            name="max_salary"
            defaultValue={job.max_salary}
            className="w-full border rounded-lg p-2"
            required
            />
        </div>

        <button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
            {pending ? "Updating..." : "Update Job"}
        </button>
        </form>
    </div>
  );
}
