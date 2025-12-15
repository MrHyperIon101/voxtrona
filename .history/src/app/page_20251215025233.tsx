"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Radio, Smartphone, Music, Layers, Download, Settings, Globe, Heart, Headphones } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Ad-Free Streaming",
    description: "Plays music directly from YouTube Music and YouTube without ads.",
    icon: Shield,
  },
  {
    title: "Background Playback",
    description: "Continues playing when the app is closed or screen is off.",
    icon: Layers,
  },
  {
    title: "High Quality Audio/Video",
    description: "Supports up to 1080p video playback with subtitles.",
    icon: Zap,
  },
  {
    title: "Voxtrona Spatial Audio",
    description: "Powered by a custom engine developed in partnership with Dirac, Dolby, and DTS:X.",
    icon: Radio,
  },
  {
    title: "Silence Skipping",
    description: "Automatically skips silent parts of tracks.",
    icon: ArrowRight,
  },
  {
    title: "Android Auto Support",
    description: "Full integration for in-car listening.",
    icon: Smartphone,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Voxtrona Music
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            The ultimate audiophile music player. Experience studio-grade 3D audio, ad-free streaming, and seamless integration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link
              href="/download"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Download Now
            </Link>
            <Link
              href="/features"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              Explore Features
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Experience</h2>
          <p className="text-gray-400 text-lg">Everything you need for the perfect listening session.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Spatial Audio Highlight */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Spatial Audio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Reimagined
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Powered by a custom engine developed in partnership with Dirac, Dolby, and DTS:X for a studio-grade 3D experience. Immerse yourself in sound like never before.
            </p>
            <Link
              href="/spatial-audio"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-lg"
            >
              Learn more about Spatial Audio <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-full bg-gradient-to-tr from-purple-500/30 to-blue-500/30 blur-3xl"
          >
            {/* Placeholder for 3D visual or abstract representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Headphones size={120} className="text-white/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations & Discovery */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <Globe size={40} className="mb-6 text-blue-400" />
            <h3 className="text-3xl font-bold mb-4">Content & Discovery</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Unified Search across YouTube & Music
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Home Dashboard with Charts & New Releases
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                AI Suggestions & Curated Mood Playlists
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Dedicated Podcasts Section
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <Heart size={40} className="mb-6 text-green-400" />
            <h3 className="text-3xl font-bold mb-4">Seamless Integrations</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Spotify Playlist Sync & Canvas Support
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                SponsorBlock Integration
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                ReturnYouTubeDislike Support
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Multi-source Lyrics (LRCLIB, Spotify, AI)
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Settings size={48} className="mx-auto mb-6 text-pink-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Music, Your Way</h2>
          <p className="text-xl text-gray-400 mb-12">
            Material Design 3 with dynamic theming, mini player, and extensive interface settings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Dynamic Theming", "Mini Player", "8D Audio Controls", "Backup & Restore"].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

