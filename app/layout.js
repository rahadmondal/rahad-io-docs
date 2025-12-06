import RightSidebar from "@/component/RightSidebar";
import "./globals.css";
import { getDocument } from "@/lib/doc";
import LeftSidebar from "@/component/LeftSidebar";
import Navbar from "@/component/Navbar";

export const metadata = {
  title: "Rahad-IO-Docs , A documentation webside",
  description: "A documentation webside",
};

export default function RootLayout({ children }) {
  const allDocs = getDocument();

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="min-h-screen bg-white text-slate-900">
          {/* 1. Navbar - Fixed at top */}
          <Navbar />

          {/* Main Container */}
          <div className="max-w-[1440px] mx-auto flex w-full">
            {/* 2. Left Sidebar - Hidden on mobile, sticky on desktop */}
            <aside className="hidden lg:block w-64 shrink-0 border-r border-slate-200 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-6 pl-4 pr-2">
              <LeftSidebar docs={allDocs} />
            </aside>

            {/* 3. Main Content - Takes remaining space */}
            <main className="flex-1 min-w-0 py-8 px-4 md:px-8">{children}</main>

            {/* 4. Right Sidebar - Table of Contents */}
            <aside className="hidden xl:block w-64 shrink-0 h-[calc(100vh-4rem)] sticky top-16 py-8 pr-4 pl-4">
              <RightSidebar />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
