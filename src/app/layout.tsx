import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Frontend Resources",
  description: " 🔥 A curated collection of frontend development resources",
  openGraph: {
    title: "Frontend Resources",
    description: "A curated collection of frontend development resources",
    url: "https://codesandtags.io",
    siteName: "Frontend Resources",
    images: [
      {
        url: "/og-frontend-resources.png", // Add your OG image at public/og-frontend-resources.png
        width: 1200,
        height: 630,
        alt: "Frontend Resources Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Resources",
    description: "A curated collection of frontend development resources",
    images: ["/og-frontend-resources.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
