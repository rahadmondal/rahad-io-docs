import React from "react";
import RightSidebar from "../RightSidebar";
import LeftSidebar from "../LeftSidebar";
import Navbar from "../Navbar";
import { getDocument } from "@/lib/doc";

const DocsLayout = ({ children, params }) => {
  const allDocs = getDocument(params?.slug);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-dark text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto flex w-full ">
        {/* --- Left Sidebar --- */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-slate-200 dark:border-white/10 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-6 pl-4 pr-2">
          <LeftSidebar docs={allDocs} params={params} />
        </aside>

        {/* --- Main Content --- */}
        <main className="flex-1 min-w-0 py-8 px-4 md:px-8">{children}</main>

        {/* --- Right Sidebar --- */}
        <aside className="hidden xl:block w-64 shrink-0 h-[calc(100vh-4rem)] border-l border-slate-200 dark:border-white/10 sticky top-16 py-8 pr-4 pl-4">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
};

export default DocsLayout;
