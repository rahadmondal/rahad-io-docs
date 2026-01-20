
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSideMetaData = ({ allDocs, info }) => {
  return (
    <div className="space-y-6">
      {/* Stats Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-300">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b dark:border-gray-700 pb-2">
          Course Stats
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-gray-400">
              Total Lessons
            </span>
            <span className="font-bold text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {allDocs.length} টি
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-gray-400">Duration</span>
            <span className="font-bold text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {info.estimatedHours}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-gray-400">Language</span>
            <span className="font-bold text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              Bangla
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-gray-400">
                
              Last Updated
            </span>
            <span className="font-bold text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              Oct 2023
            </span>
          </div>
        </div>
      </div>

      {/* Author Profile Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center transition-colors duration-300">
        <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full mb-4 overflow-hidden relative border-2 border-white dark:border-gray-600 shadow-md">
          <Image
            src={info.author.avatar}
            alt="Author"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {info.author.name}
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
          {info.author.role}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          &quot;{info.author.bio}&quot;
        </p>

        <div className="mt-4 pt-4 border-t dark:border-gray-700 flex justify-center space-x-3">
          <Link
            href={info.author.githubProfile || "#"}
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={info.author.linkedinProfile || "#"}
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSideMetaData;
