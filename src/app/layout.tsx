import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundBeams from "@/components/BackgroundBeams";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Voxtrona Music - High-Fidelity Wireless Audio Player",
    template: "%s | Voxtrona Music",
  },
  description: "The ultimate audiophile music player. Experience lossless wireless audio, neural EQ, and 7.1.4 spatial upmixing. Download the app today.",
  keywords: ["music player", "lossless audio", "spatial audio", "audiophile", "wireless audio", "neural EQ", "voxtrona"],
  applicationName: "Voxtrona Music",
  authors: [{ name: "Voxtrona Team", url: "https://voxtrona.com" }],
  creator: "Voxtrona",
  metadataBase: new URL("https://voxtrona.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Voxtrona Music - High-Fidelity Wireless Audio",
    description: "Experience lossless wireless audio, neural EQ, and 7.1.4 spatial upmixing.",
    url: "https://voxtrona.com",
    siteName: "Voxtrona Music",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists or use a localized path if available
        width: 1200,
        height: 630,
        alt: "Voxtrona Music App Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxtrona Music",
    description: "The ultimate audiophile music player. Lossless, Spatial, Neural.",
    creator: "@voxtrona",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Voxtrona Music",
  "operatingSystem": "Windows, macOS, Linux, iOS, Android",
  "applicationCategory": "MultimediaApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Voxtrona is a high-fidelity music player featuring neural EQ, spatial audio upmixing, and lossless wireless transmission.",
  "featureList": "Lossless Wireless, Neural EQ, Spatial Audio, Cloud Sync"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <Preloader />
      </body>
    </html>
  );
}
