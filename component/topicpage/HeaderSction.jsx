import React from "react";

const HeaderSction = ({ info }) => {
  return (
    <div className="mb-10 text-center lg:text-left">
      <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-bold tracking-wide uppercase mb-3 border border-blue-100 dark:border-blue-800">
        {info.level} Course
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        {info.title}
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
        {info.subtitle}
      </p>
    </div>
  );
};

export default HeaderSction;
