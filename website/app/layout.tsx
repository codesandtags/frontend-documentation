import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "remixicon/fonts/remixicon.css";
import "./globals.css";

import Header from "./ui/header";
import TopNav from "./ui/top-nav";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Documentation",
  description: "🔥A curated list of awesome useful resources for Front-End.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-neutral-900 ${inter.className} dark:text-neutral-400`}
      >
        <div className="flex flex-col min-h-screen p-6 items-center gap-2">
          <Header />
          <main className="w-full max-w-5xl flex flex-col flex-1 mt-16 lg:mt-4 text-sm gap-8">
            <TopNav />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
