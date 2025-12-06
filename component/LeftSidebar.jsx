// components/LeftSidebar.jsx
import React from "react";

const LeftSidebar = ({ docs }) => {
  const links = [
    {
      title: "Getting Started",
      items: ["Introduction", "Installation", "Project Structure"],
    },
    { title: "Components", items: ["Button", "Card", "Modal", "Navbar"] },
    { title: "Utilities", items: ["Colors", "Spacing", "Typography"] },
  ];

  const groupObject = Object.groupBy(docs, (item) => {
    return (item.module || item.Module).trim();
  });

  console.log(groupObject);

  return (
    <nav className="space-y-8">
      {links.map((section, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-sm text-slate-900 mb-3 px-2">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <a
                  href="#"
                  className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                    item === "Installation" // Active state example
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default LeftSidebar;
