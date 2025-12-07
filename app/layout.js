import RightSidebar from "@/component/RightSidebar";
import "./globals.css";
import { getDocument } from "@/lib/doc";
import LeftSidebar from "@/component/LeftSidebar";
import Navbar from "@/component/Navbar";
import { ThemeProvider } from "@/component/common/ThemeProvider";

export const metadata = {
  title: "Rahad-IO-Docs , A documentation webside",
  description: "A documentation webside",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
