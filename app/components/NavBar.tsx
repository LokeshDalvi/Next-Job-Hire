"use client";
import { Search,X } from 'lucide-react';
import Link from 'next/link'
import { useSearch } from "@/context/SearchContext";

const NavBar = () => {
const { searchQuery, setSearchQuery } = useSearch();
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#03256C] sticky top-0 z-50 shadow-md">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <span className="text-cyan-300 text-2xl font-bold hover:text-cyan-100 transition-colors">
            Next Hire
          </span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 w-1/3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by title or location…"
            className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-cyan-300 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.length > 0 ? (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 cursor-pointer text-lg font-bold hover:text-red-700"
            >
              <X size={20} />
            </button>
          ) : (
            <Search className="absolute right-3 top-2.5 font-bold text-gray-400 hover:text-blue-700" size={20} />
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link href="/">
          <span className="text-white font-medium hover:text-cyan-300 cursor-pointer transition-colors">
            Home
          </span>
        </Link>
        <Link href="/jobs">
          <span className="text-white font-medium hover:text-cyan-300 cursor-pointer transition-colors">
            Jobs
          </span>
        </Link>
        {/* <Link to="/add-jobs"> */}
        <span className="text-white font-medium hover:text-cyan-300 cursor-pointer transition-colors">
          Add Jobs
        </span>
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
