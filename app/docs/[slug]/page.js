import { getDocument } from "@/lib/doc";
import Link from "next/link";
import Image from "next/image";

// ১. পেজের ডাটা কনফিগারেশন (আপনার প্রয়োজন মতো বাংলা টেক্সট বসিয়ে নিন)
const topicData = {
  javascript: {
    title: "Mastering JavaScript",
    subtitle: "শূণ্য থেকে জাভাস্ক্রিপ্ট হিরো হওয়ার কমপ্লিট গাইড",
    description: `জাভাস্ক্রিপ্ট হলো বর্তমান বিশ্বের সবচেয়ে জনপ্রিয় এবং শক্তিশালী প্রোগ্রামিং ভাষা। এই ডকুমেন্টেশনটি এমনভাবে সাজানো হয়েছে যাতে একজন একদম নতুন শিক্ষার্থীও ভেরিয়েবল থেকে শুরু করে অ্যাডভান্সড কনসেপ্ট (যেমন: Asynchronous JS, OOP) পর্যন্ত শিখতে পারে।
    
    আমরা এখানে রিয়েল-লাইফ প্রজেক্ট এবং ইন্টারভিউ প্রশ্ন নিয়েও আলোচনা করব। আপনি যদি ওয়েব ডেভেলপমেন্টে ক্যারিয়ার গড়তে চান, তবে এই গাইডটি আপনার জন্য।`,

    author: {
      name: "MD A Rahad Mondal",
      role: "Lead Developer & Instructor",
      bio: "আমি গত ৫ বছর ধরে ফুল স্ট্যাক ডেভেলপমেন্ট করছি। আমার লক্ষ্য হলো জটিল বিষয়গুলোকে সহজ বাংলায় সবার কাছে পৌঁছে দেওয়া।",
      avatar: "/assets/authors/rahad-mondal-avatar.jpeg",
    },

    reference: {
      source: "tapaScript by Tapas Adhikary",
      sourcesLink:
        "https://youtube.com/playlist?list=PLIJrr73KDmRw2Fwwjt6cPC_tk5vcSICCu&si=DKsE-XOKX6pxQjTU",
      note: "এই ডকুমেন্টেশনটি তৈরি করতে Tapas Adhikary ভাইয়ের টিউটোরিয়াল থেকে অনুপ্রেরণা নিয়েছি। বিশেষ কৃতজ্ঞতা তাদের প্রতি।",
    },

    estimatedHours: "১৫+ ঘণ্টা",
    level: "Beginner to Pro",
  },

  // ডিফল্ট ডাটা (অন্য স্লাগের জন্য)
  default: {
    title: "Technical Documentation",
    subtitle: "Learn efficiently with our structured guides",
    description:
      "Welcome to our documentation site. Select a topic to start learning.",
    author: {
      name: "Team Docs",
      role: "Contributor",
      bio: "Passionate about open source and teaching.",
    },
    reference: {
      source: "Official Docs",
      note: "Based on official documentation standards.",
    },
    estimatedHours: "10+ Hours",
    level: "All Levels",
  },
};

const Topicpage = async ({ params }) => {
  const { slug } = await params;

  // ডকুমেন্ট লোড করা
  const allDocs = getDocument(slug);

  // প্রথম লেসন খুঁজে বের করা (বাটন লিংকের জন্য)
  const firstDocs = allDocs.sort((a, b) => a.order - b.order)[0] || allDocs[0];

  // নির্দিষ্ট স্লাগের ডাটা আনা
  const info = topicData[slug] || topicData.default;

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-10 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase mb-3">
            {info.level} Course
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {info.title}
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl">{info.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN (Main Content) --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                কোর্স সম্পর্কে কিছু কথা
              </h2>
              <div className="prose prose-blue text-gray-600 leading-relaxed whitespace-pre-line">
                {info.description}
              </div>

              {/* Call to Action Button */}
              <div className="mt-8">
                {firstDocs ? (
                  <Link
                    href={`/docs/${slug}/${firstDocs.id}`}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                  >
                    শেখা শুরু করুন (Start Learning) →
                  </Link>
                ) : (
                  <button
                    disabled
                    className="px-8 py-4 bg-gray-300 rounded-xl text-white cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>

            {/* Reference / Credits Section */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                💡 কৃতজ্ঞতা ও রেফারেন্স
              </h3>
              <p className="text-blue-800/80 mb-2">{info.reference.note}</p>
              <Link
                href={info.reference.sourcesLink}
                target="blank"
                className="text-sm font-bold text-blue-600"
              >
                Source: {info.reference.source}
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Sidebar / Meta Info) --- */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                Course Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Total Lessons</span>
                  <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                    {allDocs.length} টি
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                    {info.estimatedHours}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Language</span>
                  <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                    Bangla
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Last Updated</span>
                  <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                    Oct 2023
                  </span>
                </div>
              </div>
            </div>

            {/* Author Profile Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <Image
                  src={info.author.avatar}
                  alt="Author"
                  fill
                  className="object-cover"
                />
                <span className="flex items-center justify-center h-full text-2xl">
                  👨‍💻
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {info.author.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {info.author.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                "{info.author.bio}"
              </p>

              <div className="mt-4 pt-4 border-t flex justify-center space-x-3">
                {/* Social Links Placeholder */}
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topicpage;
