import { redirect } from "next/navigation";
import { addJob } from "../lib/prisma";

const AddJobs = () => {
  async function createJob(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const companyName = formData.get("companyName") as string;
    const location = formData.get("location") as string;
    const url = formData.get("url") as string || "";
    const description = formData.get("description") as string;
    const min_salary = formData.get("min_salary") as string;
    const max_salary = formData.get("max_salary") as string;


    await addJob(
      title,
      companyName,
      location,
      description,
      url,
      parseInt(min_salary),
      parseInt(max_salary),
    );
    redirect("/jobs");
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-6">Add Job</h1>
      <form action={createJob} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-1 font-medium">Company</label>
          <input
            type="text"
            name="companyName"
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
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
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
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJobs;
