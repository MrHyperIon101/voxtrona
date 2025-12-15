import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LightPillar from "@/components/LightPillar";
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
      <head>
        <link rel="icon" href="/voxtrona.png" type="image/png" />
        <link rel="shortcut icon" href="/voxtrona.png" type="image/png" />
        <link rel="apple-touch-icon" href="/voxtrona.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1.0}
            rotationSpeed={0.3}
            glowAmount={0.005}
            pillarWidth={3.0}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={0}
            interactive={false}
            mixBlendMode="normal"
          />
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
