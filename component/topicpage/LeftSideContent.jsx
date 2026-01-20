import Link from "next/link";
import React from "react";

const LeftSideContent = ({ info, firstDocs, slug }) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Description Card */}   
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-300">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          কোর্স সম্পর্কে কিছু কথা
        </h2>
        {/* prose-invert: Markdown টেক্সট ডার্ক মোডে অটোমেটিক সাদা করে দেবে */}
        <div className="prose prose-blue dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {info.description}
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          {firstDocs ? (
            <Link
              href={`/docs/${slug}/${firstDocs.id}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all shadow-lg hover:shadow-blue-200 dark:hover:shadow-none"
            >
              শেখা শুরু করুন (Start Learning) →
            </Link>
          ) : (
            <button
              disabled
              className="px-8 py-4 bg-gray-300 dark:bg-gray-700 rounded-xl text-white dark:text-gray-400 cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>

      {/* Reference / Credits Section */}
      <div className="bg-blue-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-blue-100 dark:border-slate-700 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
          💡 কৃতজ্ঞতা ও রেফারেন্স
        </h3>
        <p className="text-blue-800/80 dark:text-blue-300/80 mb-2">
          {info.reference.note}
        </p>
        <Link
          href={info.reference.sourcesLink}
          target="blank"
          className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
        >
          Source: {info.reference.source}
        </Link>
      </div>
    </div>
  );
};

export default LeftSideContent;
