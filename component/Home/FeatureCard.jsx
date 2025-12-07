import { HomePageCardData } from "@/data/HomePageCardData";
import { Zap, Layout, Shield, Book, ArrowRight } from "lucide-react";
import Link from "next/link";

const icons = { Zap, Layout, Shield, Book };

export default function FeatureCard() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HomePageCardData.map((card, idx) => {
          const Icon = icons[card.icon];

          return (
            <div
              key={idx}
              className={`${
                card.colSpan || ""
              } p-8 rounded-2xl bg-white dark:bg-extra-navy-dark 
                          border border-slate-200 dark:border-white/10 
                          hover:border-indigo-500/50 transition group`}
            >
              <div
                className={`w-10 h-10 ${card.bg} rounded-lg flex items-center justify-center ${card.textColor} mb-6`}
              >
                <Icon size={24} />
              </div>

              <h3
                className={`${
                  card.type === "main" ? "text-2xl" : "text-xl"
                } font-bold mb-3 text-slate-900 dark:text-white`}
              >
                {card.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {card.desc}
              </p>

              <Link
                href={card.link}
                className={`${
                  card.type === "main"
                    ? "text-indigo-600 dark:text-indigo-400 font-medium hover:underline inline-flex items-center gap-1"
                    : "text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500"
                }`}
              >
                {card.linkText}{" "}
                {card.type === "main" && <ArrowRight size={16} />}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
