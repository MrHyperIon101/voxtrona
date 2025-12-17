import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundBeams from "@/components/BackgroundBeams";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voxtrona Music",
  description: "The ultimate audiophile music player.",
  icons: {
    icon: "/voxtrona.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-0">
          <BackgroundBeams />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Navbar />
      </body>
    </html>
  );
}
