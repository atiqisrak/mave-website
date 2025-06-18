import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mave - Glassmorphism Website",
  description: "A beautiful glassmorphism website with modern design and smooth animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-graphik`}
      >
        <ThemeProvider>
          <div className="min-h-screen dark:bg-black dark:text-white">
            <ThemeToggle />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
