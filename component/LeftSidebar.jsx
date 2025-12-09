import Link from "next/link";
import React from "react";

const LeftSidebar = ({ docs, slug }) => {
  // Note: Object.groupBy is a newer JS feature (ES2024).
  // Make sure your Node version supports it (v21+), otherwise use lodash or a polyfill.
  const groupObject = Object.groupBy(docs, (item) => {
    return (item.module || item.Module).trim();
  });

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
                // Active State Logic (Example)
                // বাস্তবে এখানে আপনাকে চেক করতে হবে বর্তমান URL item.id এর সাথে মিলছে কিনা
                const isActive = item.title === "Installation";

                return (
                  <li key={index}>
                    <Link
                      // slug যদি undefined থাকে তবে যাতে ভেঙে না যায় তাই সেফটি চেক
                      href={`/docs/${slug ? slug + "/" : ""}${item.id}`}
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
