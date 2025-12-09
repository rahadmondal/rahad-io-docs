import BackGroundEffect from "@/component/common/BackGroundEffect";
import Footer from "@/component/common/Footer";
import { ThemeProvider } from "@/component/common/ThemeProvider";
import "./globals.css";
import HomePageNavBar from "@/component/Home/HomePageNavBar";

export const metadata = {
  title: "Rahad-IO-Docs , A documentation webside",
  description: "A documentation webside",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>
          {/* --- Background Grid Pattern --- */}
          <BackGroundEffect />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
