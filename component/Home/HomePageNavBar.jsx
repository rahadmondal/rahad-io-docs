import { Moon, Search, Sun, Terminal } from "lucide-react";
import React from "react";
import ThemeToggle from "../common/ThemeToggle";
import Link from "next/link";

const HomePageNavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-navy-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 font-bold text-lg tracking-tight"
        >
          <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
            <Terminal size={14} />
          </div>
          Rahad
          <span className="text-indigo-600 dark:text-indigo-400">Docs</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href={"/docs"}>Documentation</Link>
          <Link href={"https://github.com/rahadmondal/rahad-io-docs"}>
            GitHub
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default HomePageNavBar;
