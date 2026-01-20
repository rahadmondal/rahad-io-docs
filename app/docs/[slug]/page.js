import { getDocument } from "@/lib/doc";
import Link from "next/link";
import Image from "next/image";
import HeaderSction from "@/component/topicpage/HeaderSction";
import LeftSideContent from "@/component/topicpage/LeftSideContent";
import RightSideMetaData from "@/component/topicpage/RightSideMetaData";
import HomePageNavBar from "@/component/Home/HomePageNavBar";

const topicData = {
  javascript: {
    title: "Mastering JavaScript",
    subtitle: "শূণ্য থেকে জাভাস্ক্রিপ্ট হিরো হওয়ার কমপ্লিট গাইড",
    description: `জাভাস্ক্রিপ্ট হলো বর্তমান বিশ্বের সবচেয়ে জনপ্রিয় এবং শক্তিশালী প্রোগ্রামিং ভাষা। এই ডকুমেন্টেশনটি এমনভাবে সাজানো হয়েছে যাতে একজন একদম নতুন শিক্ষার্থীও ভেরিয়েবল থেকে শুরু করে অ্যাডভান্সড কনসেপ্ট (যেমন: Asynchronous JS, OOP) পর্যন্ত শিখতে পারে।
    
    আমরা এখানে রিয়েল-লাইফ প্রজেক্ট এবং ইন্টারভিউ প্রশ্ন নিয়েও আলোচনা করব। আপনি যদি ওয়েব ডেভেলপমেন্টে ক্যারিয়ার গড়তে চান, তবে এই গাইডটি আপনার জন্য।`,

    author: {
      name: "MD A Rahad Mondal",
      role: "Lead Developer & Instructor",
      bio: "আমি গত ৫ বছর ধরে ফুল স্ট্যাক ডেভেলপমেন্ট করছি। আমার লক্ষ্য হলো জটিল বিষয়গুলোকে সহজ বাংলায় সবার কাছে পৌঁছে দেওয়া।",
      avatar: "/assets/authors/rahad-mondal-avatar.jpeg",
      githubProfile: "https://github.com/rahadmondal",
      linkedinProfile: "https://www.linkedin.com/in/rahad-mondal/",
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

  // প্রথম লেসন খুঁজে বের করা
  const firstDocs = allDocs.sort((a, b) => a.order - b.order)[0] || allDocs[0];

  // নির্দিষ্ট স্লাগের ডাটা আনা
  const info = topicData[slug] || topicData.default;

  return (
    // Main Background: Light(gray-50) -> Dark(gray-900)
    <>
      <HomePageNavBar />
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* --- Header Section --- */}
          <HeaderSction info={info} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* --- LEFT COLUMN (Main Content) --- */}
            <LeftSideContent info={info} firstDocs={firstDocs} slug={slug} />
            {/* --- RIGHT COLUMN --- */}
            <RightSideMetaData allDocs={allDocs} info={info} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topicpage;
