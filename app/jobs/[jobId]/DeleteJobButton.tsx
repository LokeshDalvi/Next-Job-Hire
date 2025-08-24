"use client";

import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useTransition } from "react";
import { useRouter } from "next/navigation"; // can be used in client components
import { deleteJob } from "./actions"; // server action

export default function DeleteJobButton({
  jobId,
  title,
}: {
  jobId: string;
  title: string;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleDelete() {
    const result = await Swal.fire({
      title: "Are you sure?",
      html: `
        <p class="text-gray-700">You are about to delete:</p>
        <strong>${title}</strong><br/>
        <code>${jobId}</code>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      startTransition(async () => {
        try {
          await deleteJob(jobId); // calls server
          toast.success("Job deleted successfully");
          router.push("/jobs"); // go back to list
        } catch (err) {
          console.log(err);
          toast.error("Failed to delete job");
        }
      });
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-800 py-2 px-3 rounded-lg text-sm"
    >
      <Trash2 className="w-4 h-4" />
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
