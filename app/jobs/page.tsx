// app/jobs/JobsPage.tsx
import JobsListings from "@/components/JobsListings";
import type { Job } from "@/lib/types"; 
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
async function JobsPage() {
  const jobs: Job[] = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <JobsListings jobs={jobs} />;
}

export default JobsPage;
