// components/Navbar.jsx
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <Link
          href={"/"}
          className="flex items-center gap-2 font-bold text-xl text-indigo-600 cursor-pointer"
        >
          <span className="bg-indigo-600 text-white p-1 rounded">JS</span>
          <span>Docs</span>
        </Link>

        {/* Search Bar Section */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-indigo-500">
              {/* Search Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-xs text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">
                Ctrl K
              </span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600">
            GitHub
          </a>
          <button className="hidden sm:block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            v1.0.0
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
