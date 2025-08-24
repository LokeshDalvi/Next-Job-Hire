// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SearchProvider from "@/context/SearchContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/NavBar"; // make sure path is correct


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Finder",
  description: "Search jobs easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SearchProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </SearchProvider>
      </body>
    </html>
  );
}
