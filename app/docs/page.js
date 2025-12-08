"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Code,
  Server,
  Database,
  Globe,
  Terminal,
  ArrowRight,
  Cpu,
  Layout,
  Shield,
} from "lucide-react";

// আপনার কমন কম্পোনেন্টগুলো ইম্পোর্ট করুন
import HomePageNavBar from "@/component/Home/HomePageNavBar";

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // ১. ডামি ডাটা (বাস্তবে ডাটাবেস থেকে আসবে)
  const categories = [
    {
      name: "Frontend Development",
      icon: <Layout className="w-5 h-5" />,
      items: [
        {
          title: "Next.js 14",
          slug: "/docs/nextjs",
          desc: "অ্যাপ রাউটার, সার্ভার অ্যাকশন এবং অপ্টিমাইজেশন টেকনিক।",
          icon: <Globe className="w-6 h-6 text-slate-100" />,
          bg: "bg-black", // Brand color bg
        },
        {
          title: "React.js",
          slug: "/docs/react",
          desc: "কম্পোনেন্ট লাইফসাইকেল, হুকস এবং স্টেট ম্যানেজমেন্ট।",
          icon: <Code className="w-6 h-6 text-cyan-400" />,
          bg: "bg-slate-800",
        },
        {
          title: "Tailwind CSS",
          slug: "/docs/tailwind",
          desc: "ইউটিলিটি ফার্স্ট সিএসএস দিয়ে দ্রুত ডিজাইন তৈরি করুন।",
          icon: <Layout className="w-6 h-6 text-cyan-300" />,
          bg: "bg-cyan-900",
        },
      ],
    },
    {
      name: "Backend & Database",
      icon: <Server className="w-5 h-5" />,
      items: [
        {
          title: "Node.js",
          slug: "/docs/nodejs",
          desc: "ইভেন্ট লুপ এবং স্কেলেবল সার্ভার সাইড প্রোগ্রামিং।",
          icon: <Server className="w-6 h-6 text-green-400" />,
          bg: "bg-green-900/50",
        },
        {
          title: "PostgreSQL",
          slug: "/docs/postgres",
          desc: "রিলেশনাল ডাটাবেস ডিজাইন এবং কুয়েরি অপ্টিমাইজেশন।",
          icon: <Database className="w-6 h-6 text-blue-300" />,
          bg: "bg-blue-900/50",
        },
      ],
    },
    {
      name: "DevOps & Tools",
      icon: <Terminal className="w-5 h-5" />,
      items: [
        {
          title: "Docker",
          slug: "/docs/docker",
          desc: "কন্টেইনারাইজেশন এবং অ্যাপ্লিকেশন ডিপ্লয়মেন্ট গাইড।",
          icon: <Cpu className="w-6 h-6 text-blue-400" />,
          bg: "bg-blue-800",
        },
        {
          title: "Git & GitHub",
          slug: "/docs/git",
          desc: "ভার্সন কন্ট্রোল এবং ওপেন সোর্স কন্ট্রিবিউশন গাইডলাইন।",
          icon: <Shield className="w-6 h-6 text-orange-400" />,
          bg: "bg-orange-900/50",
        },
      ],
    },
  ];

  // সার্চ ফাংশনালিটি (বেসিক ফিল্টারিং)
  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-dark text-slate-900 dark:text-slate-50 font-sans">
      {/* Navbar */}
      <HomePageNavBar />

      {/* --- Header & Search --- */}
      <div className="pt-20 pb-16 px-6 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-navy-dark relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Documentation
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            যেকোনো টেকনোলজি শিখতে বা রেফারেন্স খুঁজতে নিচের সার্চ বার ব্যবহার
            করুন অথবা ক্যাটাগরি ব্রাউজ করুন।
          </p>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative flex items-center bg-white dark:bg-[#0f1629] border border-slate-200 dark:border-white/10 rounded-xl p-1 shadow-sm">
              <Search className="ml-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for guides, tools or libraries..."
                className="w-full bg-transparent border-none text-slate-900 dark:text-white px-4 py-3 focus:ring-0 focus:outline-none placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="hidden md:block px-3 py-1.5 mr-1 bg-slate-100 dark:bg-white/10 rounded-lg text-xs font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                /
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Documentation Grid --- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              {/* Category Title */}
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-white/10 pb-2">
                <span className="text-primary">{cat.icon}</span>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {cat.name}
                </h2>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((doc, docIdx) => (
                  <Link
                    href={doc.slug}
                    key={docIdx}
                    className="group relative block h-full"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white dark:bg-[#0f1629] border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                      {/* Icon Box */}
                      <div
                        className={`w-12 h-12 rounded-xl ${doc.bg} flex items-center justify-center mb-4 shadow-inner border border-white/10`}
                      >
                        {doc.icon}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        {doc.desc}
                      </p>

                      <div className="flex items-center text-primary text-sm font-medium mt-auto">
                        Read Guide{" "}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          // No Results Found State
          <div className="text-center py-20">
            <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">
              কোনো ডকুমেন্ট পাওয়া যায়নি
            </h3>
            <p className="text-slate-500">
              অন্য কোনো কি-ওয়ার্ড দিয়ে চেষ্টা করুন।
            </p>
          </div>
        )}

        {/* --- Request Section --- */}
        <div className="mt-20 p-8 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            কাঙ্ক্ষিত ডকুমেন্ট খুঁজে পাচ্ছেন না?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            আমাদের জানান আপনি কোন টপিকের ওপর ডকুমেন্টেশন চান। অথবা নিজেই
            কন্ট্রিবিউট করুন।
          </p>
          <Link
            href="/request"
            className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition shadow-lg shadow-primary/25"
          >
            Request a Topic
          </Link>
        </div>
      </div>
    </div>
  );
}
