import { Moon, Search, Sun, Terminal } from "lucide-react";
import React from "react";
import ThemeToggle from "../common/ThemeToggle";

const HomePageNavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
            <Terminal size={14} />
          </div>
          Rahad
          <span className="text-indigo-600 dark:text-indigo-400">Docs</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-400 text-sm w-64">
            <Search size={14} />
            <span>Search docs...</span>
            <span className="ml-auto text-xs border border-slate-300 dark:border-white/20 px-1.5 rounded">
              Ctrl K
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default HomePageNavBar;
