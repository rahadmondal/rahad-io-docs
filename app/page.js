import Link from "next/link";
import {
  Github,
  ArrowRight,
  Book,
  Shield,
  Zap,
  Layout,
  Star,
  GitFork,
  Users,
} from "lucide-react";
import HomePageNavBar from "@/component/Home/HomePageNavBar";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-500/30">
        {/* --- Background Grid Pattern --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* --- Navbar --- */}
        <HomePageNavBar />
        {/* --- Hero Section --- */}
        <section className="relative z-10 pt-20 pb-20 px-6 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            v2.0 is now live
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Build faster with <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              Bangla Documentation.
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Rahad Io Docs হলো ডেভেলপারদের জন্য তৈরি একটি ওপেন সোর্স নলেজ হাব।
            অপ্রয়োজনীয় জটিলতা বাদ দিয়ে, সহজ বাংলায় টেকনোলজি শিখুন।
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/docs"
              className="h-12 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-500/20"
            >
              Start Reading <ArrowRight size={18} />
            </Link>
            <Link
              href="https://github.com"
              className="h-12 px-8 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium flex items-center justify-center gap-2 transition"
            >
              <Github size={18} /> Star on GitHub
            </Link>
          </div>

          {/* --- Stats Moved Up (Here) --- */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-slate-200 dark:border-white/10 pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />{" "}
                1.2k
              </div>
              <div className="text-xs text-slate-500 uppercase font-semibold mt-1">
                Stars
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <GitFork className="w-5 h-5 text-purple-500" /> 320
              </div>
              <div className="text-xs text-slate-500 uppercase font-semibold mt-1">
                Forks
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <Users className="w-5 h-5 text-blue-500" /> 45+
              </div>
              <div className="text-xs text-slate-500 uppercase font-semibold mt-1">
                Contributors
              </div>
            </div>
          </div>
        </section>

        {/* --- Features / Bento Grid --- */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Card */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition group">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Next.js 14 & React
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                অ্যাপ রাউটার, সার্ভার কম্পোনেন্ট এবং মডার্ন ওয়েব ডেভেলপমেন্টের
                পূর্ণাঙ্গ গাইড। একদম প্রোডাকশন-লেভেল কোড এক্সাম্পল সহ।
              </p>
              <Link
                href="/docs/nextjs"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn Next.js <ArrowRight size={16} />
              </Link>
            </div>

            {/* Sub Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Patterns</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                কিভাবে ক্লিন এবং রেস্পন্সিভ ইউজার ইন্টারফেস ডিজাইন করবেন তার
                গাইডলাইন।
              </p>
              <Link
                href="/docs/ui"
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500"
              >
                Explore &rarr;
              </Link>
            </div>

            {/* Sub Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">TypeScript</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                টাইপ সেফটি এবং এরর-ফ্রি কোড লেখার জন্য টাইপস্ক্রিপ্ট মাস্টারি।
              </p>
              <Link
                href="/docs/ts"
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500"
              >
                Explore &rarr;
              </Link>
            </div>

            {/* Main Card */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <Book size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Backend & DevOps
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Node.js, Docker এবং Kubernetes নিয়ে সহজ বাংলায় আলোচনা। সার্ভার
                ডিপ্লয়মেন্ট এবং স্কেলিং টেকনিক।
              </p>
              <Link
                href="/docs/backend"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn Backend <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* --- Contribution Section (The "Baka/Tilted" Effect) --- */}
        <section className="py-24 border-t border-slate-200 dark:border-white/10 relative z-10 overflow-hidden bg-slate-50 dark:bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold mb-6">
                <Github className="w-3 h-3" /> OPEN SOURCE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Grow with the <br /> Community.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Rahad Io Docs একটি সম্পূর্ণ Open Source প্রজেক্ট। আপনি চাইলেই
                আমাদের GitHub Repo-তে **Star** দিতে পারেন, অথবা **Pull Request
                (PR)** পাঠিয়ে কন্ট্রিবিউট করতে পারেন।
              </p>

              <div className="flex gap-4">
                <Link
                  href="https://github.com"
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg font-bold hover:shadow-lg transition"
                >
                  Fork Repository
                </Link>
              </div>
            </div>

            {/* The "Baka" (Tilted) Code Visual */}
            <div className="perspective-1000">
              {" "}
              {/* Perspective added for 3D effect */}
              <div className="bg-[#1e1e1e] border border-slate-800 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 ease-out origin-center">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    contribution.js
                  </span>
                </div>
                <div className="space-y-3 font-mono text-sm leading-6">
                  <div className="flex gap-2">
                    <span className="text-gray-500">// Let's contribute</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#c678dd]">const</span>
                    <span className="text-[#e5c07b]">contribute</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-[#c678dd]">async</span>
                    <span className="text-slate-400">()</span>
                    <span className="text-slate-400">=&gt;</span>
                    <span className="text-slate-400">{`{`}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#c678dd]">await</span>{" "}
                    <span className="text-[#61afef]">repo</span>.
                    <span className="text-[#56b6c2]">fork</span>();
                  </div>
                  <div className="pl-4">
                    <span className="text-[#c678dd]">await</span>{" "}
                    <span className="text-[#61afef]">code</span>.
                    <span className="text-[#56b6c2]">write</span>(
                    <span className="text-[#98c379]">"New Feature"</span>);
                  </div>
                  <div className="pl-4">
                    <span className="text-[#c678dd]">return</span>{" "}
                    <span className="text-[#61afef]">pullRequest</span>.
                    <span className="text-[#56b6c2]">send</span>();
                  </div>
                  <div className="text-slate-400">{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="py-12 text-center border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#09090b]">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Rahad Io Docs. Built for the
            Community.
          </p>
        </footer>
      </div>
    </div>
  );
}
