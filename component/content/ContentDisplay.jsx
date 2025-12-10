import { getContent } from "@/lib/doc";
import React from "react";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";

const ContentDisplay = async ({ params }) => {
  const { id, slug } = params;
  const content = await getContent(id, slug);
  return (
    <article className="max-w-none w-full pb-20">
      {/* --- 1. Document Header (Title & Meta) --- */}
      <header className="mb-10 border-b border-slate-200 dark:border-white/10 pb-10">
        {/* Category (Optional) */}
        <div className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-3">
          {content.category || "Documentation"}
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          {content.title}
        </h1>

        {/* Description / Lead Text */}
        {content.description && (
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {content.description}
          </p>
        )}

        {/* Meta Info (Author, Date) */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-slate-100 dark:bg-white/10">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium">
              {content.author || "Rahad Team"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-slate-100 dark:bg-white/10">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <span>{content.date || "Updated recently"}</span>
          </div>
        </div>
      </header>

      {/* --- 2. Main Markdown Content --- */}
      <div
        className="doc-content"
        dangerouslySetInnerHTML={{ __html: content.contentHtml }}
      />
    </article>
  );
};

export default ContentDisplay;
