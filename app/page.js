import CountriButionSection from "@/component/Home/CountriButionSection";
import FeatureCard from "@/component/Home/FeatureCard";
import Hero from "@/component/Home/Hero";
import HomePageNavBar from "@/component/Home/HomePageNavBar";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-navy-dark text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-500/30">
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
