import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Calendar,
  User,
  Edit,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// ডামি ডাটা ফাংশন (আপনার lib থেকে রিপ্লেস করবেন)
// import { getDocBySlug, getAllDocs } from "@/lib/doc";

export async function generateMetadata({ params }) {
  // মেটাডাটা জেনারেট করার জন্য
  return {
    title: `Documentation - ${params.slug}`,
  };
}

export default async function DocPage({ params }) {
  const { slug } = await params;

  // ১. ডাটা ফেচিং (আপনার লজিক অনুযায়ী বসাবেন)
  // const doc = await getDocBySlug(slug);

  // ডামি ডাটা (Testing এর জন্য)
  const doc = {
    title: "Introduction to Next.js",
    description:
      "Learn how to build full-stack web applications with Next.js 14.",
    date: "October 10, 2024",
    author: "Rahad Islam",
    category: "Getting Started",
    content:
      "<h1>Welcome to Next.js</h1><p>Next.js is a React framework for building full-stack web applications...</p><h2>Main Features</h2><ul><li>App Router</li><li>Server Actions</li></ul>", // বাস্তবে এটা MDX সোর্স হবে
  };

  if (!doc) {
    return notFound();
  }

  return (
    <article className="w-full max-w-4xl mx-auto pb-20">
      {/* --- 1. Breadcrumb Navigation --- */}
      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
        <Link href="/docs" className="hover:text-primary transition-colors">
          Docs
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium text-slate-800 dark:text-slate-200">
          {doc.category}
        </span>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium text-primary">{doc.title}</span>
      </div>

      {/* --- 2. Header Section --- */}
      <div className="mb-10 border-b border-slate-200 dark:border-white/10 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          {doc.title}
        </h1>

        

        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {doc.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-slate-100 dark:bg-white/10">
              <User className="w-4 h-4" />
            </div>
            <span className="font-medium">{doc.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-slate-100 dark:bg-white/10">
              <Calendar className="w-4 h-4" />
            </div>
            <span>Last updated: {doc.date}</span>
          </div>
        </div>
      </div>

      {/* --- 3. Main Content (Prose) --- */}
      {/* 'prose' ক্লাসটি মার্কডাউন কন্টেন্টকে অটোমেটিক স্টাইল করে।
         dark:prose-invert ডার্ক মোডে টেক্সট সাদা করে দেয়।
      */}
      <div
        className="
        prose prose-slate dark:prose-invert 
        max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight 
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-[''] prose-code:after:content-['']
        prose-img:rounded-xl prose-img:border prose-img:border-slate-200 dark:prose-img:border-white/10
      "
      >
        {/* যদি MDX Remote ব্যবহার করেন তবে <MDXRemote source={doc.content} /> */}
        {/* ডামি কন্টেন্টের জন্য dangerouslySetInnerHTML ব্যবহার করছি */}
        <div dangerouslySetInnerHTML={{ __html: doc.content }} />

        {/* Example of how text looks */}
        <p>
          This is a sample paragraph to show how the <strong>typography</strong>{" "}
          looks. Here is a link to <a href="#">Learn more</a>.
        </p>
        <h3>Code Example</h3>
        <pre className="bg-[#1e1e1e] text-slate-50 p-4 rounded-lg overflow-x-auto">
          <code>{`// Sample Code Block
export default function Hello() {
  return <h1>Hello World</h1>
}`}</code>
        </pre>
      </div>

      {/* --- 4. Footer & Navigation --- */}
      <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/10">
        {/* Edit on GitHub Link */}
        <Link
          href={`https://github.com/your-repo/blob/main/docs/${slug}.mdx`}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-8"
        >
          <Edit className="w-4 h-4" />
          Edit this page on GitHub
        </Link>

        {/* Prev / Next Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Previous Link */}
          <Link
            href="#"
            className="group p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
          >
            <div className="text-xs text-slate-500 mb-1 flex items-center gap-1 group-hover:text-primary">
              <ArrowLeft className="w-3 h-3" /> Previous
            </div>
            <div className="font-semibold text-slate-900 dark:text-white">
              Installation Guide
            </div>
          </Link>

          {/* Next Link */}
          <Link
            href="#"
            className="group p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-right"
          >
            <div className="text-xs text-slate-500 mb-1 flex items-center gap-1 justify-end group-hover:text-primary">
              Next <ArrowRight className="w-3 h-3" />
            </div>
            <div className="font-semibold text-slate-900 dark:text-white">
              Project Structure
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
