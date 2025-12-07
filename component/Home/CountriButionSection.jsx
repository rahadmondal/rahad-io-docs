/* eslint-disable react/jsx-no-comment-textnodes */
import { Github } from "lucide-react";
import Link from "next/link";

const CountriButionSection = () => {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-white/10 relative z-10 overflow-hidden bg-slate-50 dark:bg-extra-navy-dark">
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
            Rahad Io Docs একটি সম্পূর্ণ Open Source প্রজেক্ট। আপনি চাইলেই আমাদের
            GitHub Repo-তে **Star** দিতে পারেন, অথবা **Pull Request (PR)**
            পাঠিয়ে কন্ট্রিবিউট করতে পারেন।
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/rahadmondal/rahad-io-docs/fork"
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg font-bold hover:shadow-lg transition"
            >
              Fork Repository
            </Link>
          </div>
        </div>

        {/* The Tilted Code Visual */}
        <div className="perspective-1000">
          <div
            className="
    bg-slate-100 dark:bg-navy-dark
    border border-slate-300 dark:border-slate-700
    rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 
    transition duration-500 ease-out origin-center
  "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-300 dark:border-white/10 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                contribution.js
              </span>
            </div>

            {/* Code */}
            <div className="space-y-3 font-mono text-sm leading-6">
              <div className="flex gap-2">
                <span className="text-slate-500">// Let’s contribute</span>
              </div>

              <div className="flex gap-2">
                <span className="text-purple-500">const</span>
                <span className="text-yellow-600 dark:text-yellow-300">
                  contribute
                </span>
                <span className="text-slate-500">=</span>
                <span className="text-purple-500">async</span>
                <span className="text-slate-500">()</span>
                <span className="text-slate-500">=&gt;</span>
                <span className="text-slate-500">{`{`}</span>
              </div>

              <div className="pl-4">
                <span className="text-purple-500">await</span>{" "}
                <span className="text-blue-500 dark:text-blue-300">repo</span>.
                <span className="text-cyan-500 dark:text-cyan-300">fork</span>
                ();
              </div>

              <div className="pl-4">
                <span className="text-purple-500">await</span>{" "}
                <span className="text-blue-500 dark:text-blue-300">code</span>.
                <span className="text-cyan-500 dark:text-cyan-300">write</span>(
                <span className="text-emerald-600 dark:text-emerald-400">
                  &quot;New Feature&quot;
                </span>
                );
              </div>

              <div className="pl-4">
                <span className="text-purple-500">return</span>{" "}
                <span className="text-blue-500 dark:text-blue-300">
                  pullRequest
                </span>
                .<span className="text-cyan-500 dark:text-cyan-300">send</span>
                ();
              </div>

              <div className="text-slate-500">{`}`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriButionSection;
