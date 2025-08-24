import { getJob } from "../actions"; // server action
import EditJobForm from "@/components/EditJobForm";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  const job = await getJob(jobId);
  if (!job) {
    return <div className="p-6">Job not found</div>;
  }

  return <EditJobForm job={job} />;
}
