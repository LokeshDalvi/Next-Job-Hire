type Job = {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
};


function JobCard({job}:{job:Job}) {
  return (
    <div
      key={job.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#2541B2]/10 flex items-center justify-center">
            <span className="text-[#2541B2] font-bold text-lg">
              {job.title.charAt(0)}
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">
            {job.location}
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
            {job.salary}
          </span>
        </div>

        <button className="w-full mt-4 bg-[#2541B2] hover:bg-[#1A2F8A] text-white py-2 px-4 rounded-lg transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;