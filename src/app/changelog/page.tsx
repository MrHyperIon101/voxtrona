"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCommit, Tag, Sparkles, TrendingUp, Package, Clock, Download, ExternalLink, ChevronDown,
  Star, Users, Shield, Smartphone, Music2, Radio, Globe, Zap, CheckCircle2,
  AlertTriangle, Cpu, Layers, Palette, Calendar, ArrowRight
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

// Release Data
const releases = [
  {
    version: "v2.1.1020Rev3",
    date: "Dec 25, 2025",
    type: "major",
    status: "BETA",
    title: "The \"Sonic Boom\" Update",
    highlights: [
      "Custom Native Audio Engine",
      "Dolby Atmos / DTS:X Spatial Audio",
      "YouTube Music & Video Integration",
      "SponsorBlock & De-Arrow"
    ],
    stats: {
      downloads: "15k+",
      rating: "4.9",
      commits: "142"
    },
    // Categorized Changes for maximum organization
    features: [
      {
        category: "Visuals & UI",
        icon: Palette,
        items: [
          "Liquid Glass Aesthetics: Complete redesign with OLED-friendly dark mode.",
          "Dynamic Color Engine: UI adapts to artwork with vibrant, glassy gradients.",
          "Interstellar Navigation: New gesture-based smooth navigation system.",
          "Visualizer 2.0: 64-band real-time spectrum analyzer with 5 presets."
        ]
      },
      {
        category: "Audio Core",
        icon: Cpu,
        items: [
          "Custom Audio Engine: 64-bit float precision pipeline.",
          "Native Spatial Audio: HRTF-based upmixing to 7.1.4 virtual surround.",
          "Format Support: FLAC, ALAC, DSD (DoP), and Opus up to 384kHz/32-bit.",
          "Parametric EQ: 10-band equalizer with Auto-EQ presets for 4000+ headphones."
        ]
      },
      {
        category: "Streaming & Cloud",
        icon: Globe,
        items: [
          "YouTube Music Integration: Seamless catalog access with localized charts.",
          "SponsorBlock Native: Auto-skip production intros, silence, and filler.",
          "Synced Lyrics: Romanized and translated lyrics powered by Musixmatch.",
          "Offline Mode: Encrypted local caching for data-free playback."
        ]
      },
       {
        category: "System & Privacy",
        icon: Shield,
        items: [
          "Zero-Telemetry: No tracking identifiers or usage data collection.",
          "Battery Optimization: Rewritten background service for 40% less drain.",
          "Android Auto: Full dashboard support with voice commands."
        ]
      }
    ]
  },
  {
    version: "v1.5.0",
    date: "Aug 15, 2025",
    type: "minor",
    status: "STABLE",
    title: "The Foundation Update",
    highlights: [
      "Local Library Management",
      "Basic gapless playback",
      "Material You Theme"
    ],
    stats: {
      downloads: "5k+",
      rating: "4.5",
      commits: "89"
    },
    features: [
      {
        category: "Core Features",
        icon: Layers,
        items: [
          "Local File Indexer: 10x faster scanning of device storage.",
          "Playlist Manager: Import/Export m3u and pls files.",
          "Sleep Timer: Fade out audio before stopping."
        ]
      }
    ]
  }
];

export default function ChangelogPage() {
  const [expandedVersions, setExpandedVersions] = useState<string[]>(["v2.1.1020", "v1.5.0"]);

  const toggleVersion = (version: string) => {
    setExpandedVersions(prev => 
      prev.includes(version) 
        ? prev.filter(v => v !== version) 
        : [...prev, version]
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-32">
        {/* Background Ambient */}
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[100px] rounded-full mix-blend-screen" />
        </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 mb-8 backdrop-blur-md"
           >
             <GitCommit size={16} className="text-blue-400" />
             <span className="font-semibold tracking-wider uppercase text-xs">System Changelog</span>
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-white/50"
           >
             Release Notes
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
           >
             Every update brings us closer to audio perfection. Explore the technical evolution of Voxtrona.
           </motion.p>
        </div>

        {/* Vertical Stack Layout (No complex timeline line) */}
        <div className="space-y-8">
            {releases.map((release, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-px rounded-[2.5rem] bg-linear-to-b from-white/10 to-transparent overflow-hidden"
                >
                    <div className="relative bg-black/60 backdrop-blur-xl rounded-[2.4rem] overflow-hidden border border-white/5">
                        
                        {/* Summary Section / Header */}
                        <div 
                            onClick={() => toggleVersion(release.version)}
                            className="p-6 md:p-10 cursor-pointer hover:bg-white/5 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                
                                {/* Version Badge & Date */}
                                <div className="flex-shrink-0 flex md:flex-col items-center gap-4 md:gap-2 min-w-[120px]">
                                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                                         {release.type === 'major' ? <Zap size={24} className="text-yellow-400" /> : <Package size={24} className="text-blue-400" />}
                                     </div>
                                     <div className="text-center">
                                         <div className="text-sm font-bold text-gray-400">{release.date}</div>
                                         <div className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${
                                             release.status === 'BETA' ? 'text-yellow-400' : 'text-green-400'
                                         }`}>
                                             {release.status}
                                         </div>
                                     </div>
                                </div>

                                {/* Content Info */}
                                <div className="flex-1 w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                                            {release.version}
                                        </h2>
                                        <div className={`p-3 rounded-full bg-white/5 border border-white/10 text-white/50 transition-transform duration-300 ${expandedVersions.includes(release.version) ? 'rotate-180 bg-white/10 text-white' : ''}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl text-gray-400 font-medium mb-6">{release.title}</h3>

                                    {/* Highlights Chips */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {release.highlights.map((h, hi) => (
                                            <div key={hi} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                                                {h}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Quick Stats - Mobile optimized */}
                                    <div className="flex items-center gap-6 text-sm text-gray-500 font-mono border-t border-white/5 pt-4">
                                        <div className="flex items-center gap-2"><Download size={14} /> {release.stats.downloads}</div>
                                        <div className="flex items-center gap-2"><Star size={14} /> {release.stats.rating}</div>
                                        <div className="flex items-center gap-2"><GitCommit size={14} /> {release.stats.commits}</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Detailed Changelog (Expandable) */}
                        <AnimatePresence>
                            {expandedVersions.includes(release.version) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-white/5"
                                >
                                    <div className="p-6 md:p-10 bg-black/20">
                                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                            {release.features.map((section, si) => (
                                                <div key={si}>
                                                    <h4 className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                                                        <section.icon size={14} /> {section.category}
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {section.items.map((item, ii) => (
                                                            <li key={ii} className="flex items-start gap-3 text-gray-300 leading-relaxed text-sm">
                                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                                                                <span className="opacity-90">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Call to Action */}
                                        {i === 0 && (
                                            <div className="mt-10 pt-8 border-t border-white/5 flex justify-center w-full">
                                                <a 
                                                    href="https://github.com/MrHyperIon101/voxtrona/releases/download/Rev3/app-full-arm64-v8a-release.apk"
                                                    className="group/btn relative p-6 w-full md:w-auto md:min-w-[400px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between overflow-hidden hover:bg-white/10 transition-colors cursor-pointer"
                                                >
                                                    <div className="relative z-10 text-left">
                                                        <h3 className="text-xl font-bold text-white mb-1">Download {release.version}</h3>
                                                        <p className="text-sm text-green-400 font-bold">44.6 MB • Latest Build</p>
                                                    </div>

                                                    {/* Animated Arrow Button */}
                                                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center overflow-hidden group-hover/btn:border-white transition-colors duration-300 bg-black/20 backdrop-blur-sm ml-6">
                                                        <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                                                        <ArrowRight size={24} className="relative z-10 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:text-black transition-all duration-300" />
                                                    </div>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
}
