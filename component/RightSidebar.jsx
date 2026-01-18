import { getContent } from "@/lib/doc";
import Link from "next/link";
import React from "react";

const RightSidebar = async ({ headings }) => {
  return (
    <div className="space-y-4">
      {/* Title */}
      <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-4">
        On this page
      </h4>

      <ul className="space-y-3 text-sm">
        {/* Inactive Link Example */}
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link
              href={`#${heading.id}`}
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
            >
              {heading.text}
            </Link>
          </li>
        ))}
        {/* <li>
          <a
            href="#quick-start"
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
          >
            Quick Start
          </a>
        </li> */}

        {/* Active Link Example */}
        {/* <li>
          <a
            href="#requirements"
            className="font-medium block border-l-2 pl-3 -ml-3 transition-colors
            text-indigo-600 border-indigo-600 
            dark:text-indigo-400 dark:border-indigo-400"
          >
            Requirements
          </a>
        </li> */}

        {/* More Inactive Links */}
        {/* <li>
          <a
            href="#configuration"
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
          >
            Configuration
          </a>
        </li>
        <li>
          <a
            href="#next-steps"
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
          >
            Next Steps
          </a>
        </li> */}
      </ul>

      {/* Community / Help Box */}
      <div
        className="mt-8 p-4 rounded-lg border transition-colors
        bg-slate-50 border-slate-100 
        dark:bg-white/5 dark:border-white/10"
      >
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Need help?{" "}
          <a
            href="#"
            className="underline hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Join our Discord community.
          </a>
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
