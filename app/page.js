import Button from "@/component/common/Button";
import CountriButionSection from "@/component/Home/CountriButionSection";
import FeatureCard from "@/component/Home/FeatureCard";
import GitHubStatus from "@/component/Home/GitHubStatus";
import HomePageNavBar from "@/component/Home/HomePageNavBar";
import { ArrowRight, Github } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-navy-dark text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-500/30">
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
            <Button href="/docs">
              Start Reading <ArrowRight size={18} />
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/rahadmondal/rahad-io-docs"
            >
              <Github size={18} /> Star on GitHub
            </Button>
          </div>

          {/* --- Stats Moved Up (Here) --- */}
          <GitHubStatus />
        </section>

        {/* --- Features / Bento Grid --- */}
        <FeatureCard />

        {/* --- Contribution Section --- */}
        <CountriButionSection />
      </div>
    </div>
  );
}
