// components/RightSidebar.jsx
import React from "react";

const RightSidebar = () => {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-sm text-slate-900">On this page</h4>
      <ul className="space-y-3 text-sm">
        <li>
          <a
            href="#quick-start"
            className="text-slate-600 hover:text-indigo-600 block"
          >
            Quick Start
          </a>
        </li>
        <li>
          <a
            href="#requirements"
            className="text-indigo-600 font-medium block border-l-2 border-indigo-600 pl-3 -ml-3"
          >
            Requirements
          </a>
        </li>
        <li>
          <a
            href="#configuration"
            className="text-slate-600 hover:text-indigo-600 block"
          >
            Configuration
          </a>
        </li>
        <li>
          <a
            href="#next-steps"
            className="text-slate-600 hover:text-indigo-600 block"
          >
            Next Steps
          </a>
        </li>
      </ul>

      {/* Optional Advertisement or Community Link */}
      <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-100">
        <p className="text-xs text-slate-500">
          Need help? Join our Discord community.
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
