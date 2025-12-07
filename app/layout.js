import Footer from "@/component/common/Footer";
import { ThemeProvider } from "@/component/common/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Rahad-IO-Docs , A documentation webside",
  description: "A documentation webside",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
