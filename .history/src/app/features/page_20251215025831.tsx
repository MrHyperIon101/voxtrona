"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Layers, Zap, Radio, ArrowRight, Smartphone, Search, Home, Music, Mic, Globe, Heart, Download, Database, Palette, Settings, CloudLightning, AudioLines, Cast, Share2, Lock, Eye, Battery, Wifi } from "lucide-react";

const features = [
  {
    title: "Audio Engine",
    description: "Audiophile-grade playback engine with 64-bit processing.",
    icon: AudioLines,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    items: [
      "Bit-perfect playback",
      "ReplayGain support",
      "Crossfade & Gapless",
      "10-band Equalizer",
      "Bass Boost & Virtualizer"
    ]
  },
  {
    title: "Content Discovery",
    description: "Unified search across multiple platforms.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    items: [
      "YouTube Music Integration",
      "Spotify Charts & Playlists",
      "SoundCloud Support",
      "Local Library Scan",
      "Smart Recommendations"
    ]
  },
  {
    title: "Visual Experience",
    description: "Stunning visuals that react to your music.",
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    items: [
      "Live Lyrics (Synced)",
      "Dynamic Themes (Monet)",
      "Canvas Support",
      "Visualizers",
      "Dark/Light/OLED Modes"
    ]
  },
  {
    title: "Advanced Features",
    description: "Power user tools for total control.",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    items: [
      "SponsorBlock Integration",
      "Return YouTube Dislike",
      "Sleep Timer",
      "Playback Speed Control",
      "Pitch Shift"
    ]
  },
  {
    title: "Connectivity",
    description: "Listen anywhere, on any device.",
    icon: Cast,
    color: "text-green-400",
    bg: "bg-green-500/10",
    items: [
      "Chromecast Support",
      "Android Auto",
      "Last.fm Scrobbling",
      "Discord Rich Presence",
      "Bluetooth Metadata"
    ]
  },
  {
    title: "Privacy & Offline",
    description: "Your music, your data, your control.",
    icon: Lock,
    color: "text-red-400",
    bg: "bg-red-500/10",
    items: [
      "Offline Downloads",
      "No Tracking/Telemetry",
      "Local Backup/Restore",
      "Cache Management",
      "Proxy Support"
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-32 px-4 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Feature Rich
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Voxtrona is packed with everything you need for the perfect listening experience.
            And then some.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bg} blur-3xl rounded-full -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100`} />
              
              <div className={`inline-flex p-3 rounded-2xl ${feature.bg} ${feature.color} mb-6`}>
                <feature.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${feature.color.replace("text-", "bg-")}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

