"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const LeftSidebar = ({ docs, params }) => {
  const groupObject = Object.groupBy(docs, (item) => {
    return (item.module || item.Module).trim();
  });
  const getParams = useParams();
  const moduleKeys = Object.keys(groupObject);

  return (
    <nav className="space-y-8">
      {moduleKeys.map((module, idx) => (
        <div key={idx}>
          {/* Module Heading Updated */}
          <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-3 px-2 uppercase tracking-wider opacity-90">
            {module}
          </h3>

          {groupObject[module] && (
            <ul className="space-y-1">
              {groupObject[module].map((item, index) => {
                const isActive = item.id === getParams?.id;

                return (
                  <li key={index}>
                    <Link
                      href={`/docs/${params.slug ? params.slug + "/" : ""}${
                        item.id
                      }`}
                      className={`block px-2 py-1.5 text-sm rounded-md transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
};

export default LeftSidebar;
