"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, Tag, AlertCircle, CheckCircle2, Zap } from "lucide-react";

const releases = [
  {
    version: "v2.1.1020",
    date: "2025-12-15",
    type: "major",
    title: "The \"Unleashed\" Update",
    changes: [
      { type: "feat", text: "Spatial Audio Engine: Integrated Dolby, Dirac, and DTS:X tuning" },
      { type: "feat", text: "Hybrid Playback: Seamlessly switches between local files and YouTube/YouTube Music" },
      { type: "feat", text: "Spotify Integration: Full two-way sync (Playlist Sync Coming Soon)" },
      { type: "feat", text: "Smart Tools: SponsorBlock and ReturnYouTubeDislike" },
      { type: "feat", text: "Material Design 3: Complete UI rewrite using Jetpack Compose" },
      { type: "feat", text: "Android Auto: Full in-car dashboard support (Coming Soon)" },
      { type: "feat", text: "Room Database: Robust library management" },
      { type: "feat", text: "Ad-Free Streaming: YouTube Music and YouTube without ads" },
      { type: "feat", text: "Silence Skipping & Audio Normalization" },
      { type: "feat", text: "Unified Search: YouTube and YouTube Music catalogs" },
      { type: "feat", text: "Offline Caching & Local Library Management" }
    ]
  },
  {
    version: "v1.0.0",
    date: "2024-01-01",
    type: "minor",
    title: "The \"Sandbox\" Era",
    changes: [
      { type: "feat", text: "App-Specific Storage: Local file player" },
      { type: "feat", text: "Basic Playback: Standard Play/Pause/Stop" },
      { type: "feat", text: "Offline Only: No internet permissions requested" },
      { type: "feat", text: "Simple UI: List view of filenames" }
    ]
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "feat": return <Zap size={16} className="text-yellow-400" />;
    case "fix": return <CheckCircle2 size={16} className="text-green-400" />;
    case "perf": return <AlertCircle size={16} className="text-blue-400" />;
    default: return <GitCommit size={16} className="text-gray-400" />;
  }
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen pt-32 px-4 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
            MISSION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              LOG
            </span>
          </h1>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-12 md:space-y-24">
            {releases.map((release, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white z-10 mt-8 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:w-1/2 px-0 md:px-8">
                  <div className="group relative p-[1px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative h-full bg-black/40 md:backdrop-blur-xl rounded-[1.4rem] p-6 md:p-8 border border-white/10 group-hover:border-transparent transition-colors duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                        <Tag size={20} className="text-blue-400" />
                        <span className="font-mono text-xl font-bold">{release.version}</span>
                      </div>
                      <span className="text-sm text-gray-500 font-mono">{release.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6">{release.title}</h3>
                    
                    <ul className="space-y-4">
                      {release.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <div className="mt-1">{getIcon(change.type)}</div>
                          <span>{change.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>

                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

