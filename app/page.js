import CountriButionSection from "@/component/Home/CountriButionSection";
import FeatureCard from "@/component/Home/FeatureCard";
import Hero from "@/component/Home/Hero";
import HomePageNavBar from "@/component/Home/HomePageNavBar";

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
        <Hero />
        {/* --- Features / Bento Grid --- */}
        <FeatureCard />
        {/* --- Contribution Section --- */}
        <CountriButionSection />
      </div>
    </div>
  );
}
