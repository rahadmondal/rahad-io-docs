import Link from "next/link";
import React from "react";
import ThemeToggle from "./common/ThemeToggle"; // আপনার পাথ অনুযায়ী

const Navbar = () => {
  return (
    // 1. Header Background & Border updated for Dark Mode
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-navy-dark backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* --- Logo Section --- */}
        <Link
          href={"/"}
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
        >
          {/* JS Box */}
          <span className="bg-indigo-600 text-white p-1 rounded shadow-lg shadow-indigo-500/20">
            JS
          </span>
          {/* Text Color handles both modes */}
          <span className="text-slate-800 dark:text-slate-100">Docs</span>
        </Link>

        {/* --- Search Bar Section --- */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400">
              {/* Search Icon */}
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

            {/* Input Field Updated */}
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-12 text-sm outline-none transition-all 
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100
              dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:focus:bg-[#0b1121] dark:focus:ring-indigo-500/20"
            />

            {/* Ctrl K Badge */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-xs text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-white/10 rounded px-1.5 py-0.5 bg-slate-100 dark:bg-white/5">
                Ctrl K
              </span>
            </div>
          </div>
        </div>

        {/* --- Right Actions --- */}
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          {/* Theme Toggle Button */}
          <div className="border-l border-slate-200 dark:border-white/10 pl-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
