// components/LeftSidebar.jsx
import Link from "next/link";
import React from "react";

const LeftSidebar = ({ docs }) => {
  const groupObject = Object.groupBy(docs, (item) => {
    return (item.module || item.Module).trim();
  });

  const moduleKeys = Object.keys(groupObject);

  return (
    <nav className="space-y-8">
      {moduleKeys.map((module, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-sm text-slate-900 mb-3 px-2">
            {module}
          </h3>

          {groupObject[module] && (
            <ul className="space-y-1">
              {" "}
              {groupObject[module].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`${item.id}`}
                    className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                      item.title === "Installation" // Active state example
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
};

export default LeftSidebar;
