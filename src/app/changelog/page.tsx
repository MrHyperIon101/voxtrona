"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCommit, Tag, AlertCircle, CheckCircle2, Zap, Bug, Sparkles,
  TrendingUp, Package, Clock, Download, ExternalLink, ChevronDown,
  Star, Users, Code, Wrench, Shield
} from "lucide-react";

const releases = [
  {
    version: "v2.1.1020",
    date: "2025-12-15",
    type: "major",
    title: "The \"Unleashed\" Update",
    tag: "Latest",
    downloads: "10K+",
    rating: 4.8,
    highlights: [
      "Spatial Audio Engine with Dolby & DTS:X",
      "Spotify Integration",
      "Material Design 3 UI"
    ],
    changes: [
      { type: "feat", text: "Spatial Audio Engine: Integrated Dolby, Dirac, and DTS:X tuning", category: "Audio" },
      { type: "feat", text: "Hybrid Playback: Seamlessly switches between local files and YouTube/YouTube Music", category: "Playback" },
      { type: "feat", text: "Spotify Integration: Full two-way sync (Playlist Sync Coming Soon)", category: "Integration" },
      { type: "feat", text: "Smart Tools: SponsorBlock and ReturnYouTubeDislike", category: "Features" },
      { type: "feat", text: "Material Design 3: Complete UI rewrite using Jetpack Compose", category: "UI/UX" },
      { type: "feat", text: "Android Auto: Full in-car dashboard support (Coming Soon)", category: "Platform" },
      { type: "feat", text: "Room Database: Robust library management", category: "Backend" },
      { type: "feat", text: "Ad-Free Streaming: YouTube Music and YouTube without ads", category: "Features" },
      { type: "feat", text: "Silence Skipping & Audio Normalization", category: "Audio" },
      { type: "feat", text: "Unified Search: YouTube and YouTube Music catalogs", category: "Search" },
      { type: "feat", text: "Offline Caching & Local Library Management", category: "Storage" }
    ]
  },
  {
    version: "v1.0.0",
    date: "2024-01-01",
    type: "minor",
    title: "The \"Sandbox\" Era",
    tag: "Stable",
    downloads: "5K+",
    rating: 4.2,
    highlights: [
      "Initial Release",
      "Local File Playback",
      "Offline-First"
    ],
    changes: [
      { type: "feat", text: "App-Specific Storage: Local file player", category: "Storage" },
      { type: "feat", text: "Basic Playback: Standard Play/Pause/Stop", category: "Playback" },
      { type: "feat", text: "Offline Only: No internet permissions requested", category: "Privacy" },
      { type: "feat", text: "Simple UI: List view of filenames", category: "UI/UX" }
    ]
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "feat": return <Zap size={16} className="text-yellow-400" />;
    case "fix": return <Bug size={16} className="text-green-400" />;
    case "perf": return <TrendingUp size={16} className="text-blue-400" />;
    case "security": return <Shield size={16} className="text-red-400" />;
    default: return <GitCommit size={16} className="text-gray-400" />;
  }
};

const getCategoryColor = (category: string) => {
  const colors: any = {
    "Audio": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Playback": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Integration": "bg-green-500/20 text-green-400 border-green-500/30",
    "Features": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "UI/UX": "bg-pink-500/20 text-pink-400 border-pink-500/30",
    "Platform": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    "Backend": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Search": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    "Storage": "bg-teal-500/20 text-teal-400 border-teal-500/30",
    "Privacy": "bg-red-500/20 text-red-400 border-red-500/30"
  };
  return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

export default function ChangelogPage() {
  const [expandedVersions, setExpandedVersions] = useState<string[]>(["v2.1.1020"]);

  const toggleVersion = (version: string) => {
    setExpandedVersions(prev =>
      prev.includes(version)
        ? prev.filter(v => v !== version)
        : [...prev, version]
    );
  };

  return (
    <div className="min-h-screen pt-32 px-4 pb-32">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
            <Clock size={16} className="text-green-400" />
            <span className="text-sm font-bold tracking-widest text-green-400">RELEASE HISTORY</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
            MISSION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              LOG
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track every evolution, feature, and improvement in Voxtrona's journey to become the ultimate music player.
          </p>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Package size={16} />
              <span>{releases.length} Releases</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Download size={16} />
              <span>15K+ Downloads</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span>4.5 Average</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-blue-500/50 to-purple-500/50" />

          <div className="space-y-12 md:space-y-16">
            {releases.map((release, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="relative"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-ping opacity-20" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`md:grid md:grid-cols-2 gap-8 ${idx % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
                  <div className={idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                    <div className="group relative p-[2px] rounded-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#22c55e_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 group-hover:border-green-500/30 transition-all duration-300">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Tag size={20} className="text-green-400" />
                              <span className="font-mono text-2xl font-bold">{release.version}</span>
                              {release.tag === "Latest" && (
                                <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-bold">
                                  {release.tag}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-500 font-mono flex items-center gap-2">
                              <Clock size={14} />
                              {release.date}
                            </span>
                          </div>

                          <button
                            onClick={() => toggleVersion(release.version)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <ChevronDown
                              className={`transition-transform ${
                                expandedVersions.includes(release.version) ? "rotate-180" : ""
                              }`}
                              size={20}
                            />
                          </button>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                          {release.title}
                        </h3>

                        {/* Stats */}
                        <div className="flex items-center gap-4 mb-6 text-sm">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Download size={14} />
                            <span>{release.downloads}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <span>{release.rating}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Code size={14} />
                            <span>{release.changes.length} Changes</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <div className="text-sm font-bold text-gray-400 mb-3 flex items-center gap-2">
                            <Sparkles size={14} />
                            KEY HIGHLIGHTS
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {release.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-sm"
                              >
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Expandable Changes */}
                        <AnimatePresence>
                          {expandedVersions.includes(release.version) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 border-t border-white/10">
                                <div className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
                                  <Wrench size={14} />
                                  FULL CHANGELOG
                                </div>
                                <ul className="space-y-3">
                                  {release.changes.map((change, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.05 }}
                                      className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-colors"
                                    >
                                      <div className="mt-1">{getIcon(change.type)}</div>
                                      <div className="flex-1">
                                        <span className="text-gray-300">{change.text}</span>
                                        <div className="mt-1">
                                          <span className={`text-xs px-2 py-0.5 rounded border ${getCategoryColor(change.category)}`}>
                                            {change.category}
                                          </span>
                                        </div>
                                      </div>
                                    </motion.li>
                                  ))}
                                </ul>

                                {/* Download Link */}
                                {release.version === "v2.1.1020" && (
                                  <a
                                    href="/download"
                                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
                                  >
                                    <Download size={18} />
                                    Download This Version
                                    <ExternalLink size={14} />
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Empty column for layout */}
                  <div className="hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Join our community to get notified about new releases and updates
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/community"
                className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Users size={18} />
                Join Community
              </a>
              <a
                href="/download"
                className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 font-bold hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                Download Latest
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
