"use client";
import { Search,X } from 'lucide-react';
import { useState } from "react";
const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleChange = (value: string) => {
    console.log(value);
    setSearchQuery(value);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#03256C] sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <span className="text-cyan-300 text-2xl font-bold hover:text-cyan-100 transition-colors">
          JobFinder
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 w-1/3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by title or location…"
            className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-cyan-300 outline-none"
            value={searchQuery}
            onChange={(e) => handleChange(e.target.value)}
          />
          {searchQuery.length > 0 ? (
            <button
              onClick={() => handleChange("")}
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
        {/* <Link to="/"> */}
        <span className="text-white font-medium hover:text-cyan-300 cursor-pointer transition-colors">
          Home
        </span>
        {/* </Link>
        <Link to="/jobs"> */}
        <span className="text-white font-medium hover:text-cyan-300 cursor-pointer transition-colors">
          Jobs
        </span>
        {/* </Link>
        <Link to="/add-jobs"> */}
        <span className="text-white font-medium hover:text-cyan-300 cursor-pointer transition-colors">
          Add Jobs
        </span>
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
