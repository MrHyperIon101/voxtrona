"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Library, Folder, Download, ListMusic, Cloud, Heart, Database, RefreshCw } from "lucide-react";

export default function LibraryPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              LIBRARY
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-emerald-200 uppercase">
              Your World
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Unified Library */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <Database size={16} />
                <span className="text-sm font-bold tracking-wider">UNIFIED</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Everything <br />
                <span className="text-gray-500">In One Place.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Stop jumping between apps. Voxtrona unifies your local MP3s, YouTube Music library, and Spotify playlists 
                into one seamless, searchable interface.
              </p>
              <ul className="space-y-4">
                 {[
                     "Import from YouTube Music & Spotify",
                     "Scan Local Device Storage",
                     "Universal Search across all sources",
                     "Smart sorting and filtering"
                 ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                     {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-emerald-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="grid grid-cols-2 gap-6 p-8">
                    <div className="p-6 rounded-2xl bg-red-600/10 border border-red-500/20 flex flex-col items-center">
                        <Cloud size={32} className="text-red-500 mb-2" />
                        <span className="text-xs text-red-400 font-bold">YT MUSIC</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-green-600/10 border border-green-500/20 flex flex-col items-center">
                         <Cloud size={32} className="text-green-500 mb-2" />
                        <span className="text-xs text-green-400 font-bold">SPOTIFY</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex flex-col items-center col-span-2">
                         <Folder size={32} className="text-blue-500 mb-2" />
                        <span className="text-xs text-blue-400 font-bold">LOCAL STORAGE</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Offline Mode */}
        <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-blue-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                     <Download size={120} className="text-blue-500/50 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                    <Download size={16} />
                    <span className="text-sm font-bold tracking-wider">OFFLINE</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    No Net? <br />
                    <span className="text-gray-500">No Problem.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    Going on a flight? Subway commute? Cache your favorite playlists and albums for offline playback.
                    Set intelligent limits so you never run out of space.
                  </p>
                  <ul className="space-y-4">
                     {[
                         "One-click Download",
                         "Smart Cache Management",
                         "Automatic 'Liked Songs' caching",
                         "Storage usage visualization"
                     ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

        {/* Section 3: Sync & Backup */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <RefreshCw size={16} />
                <span className="text-sm font-bold tracking-wider">ALWAYS SAFE</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Cloud <br />
                <span className="text-gray-500">Backup.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Switching phones? Voxtrona can backup your settings, playlists, and favorites to a file 
                or sync them so you never lose your curation.
              </p>
              <div className="grid gap-4">
                  {[
                      { title: "Export Data", desc: "JSON format backup." },
                      { title: "Playlist Sync", desc: "Two-way sync with YT Music." },
                      { title: "Import Stats", desc: "Bring history from Last.fm." },
                      { title: "Auto-Backup", desc: "Daily local snapshots." }
                  ].map((feature, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                          <div className="w-1 h-full rounded-full bg-emerald-500/50" />
                          <div>
                              <div className="font-bold text-white mb-1">{feature.title}</div>
                              <div className="text-sm text-gray-400">{feature.desc}</div>
                          </div>
                      </div>
                  ))}
               </div>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-emerald-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                  <div className="relative">
                      <div className="absolute inset-0 border-4 border-dashed border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="w-32 h-32 rounded-full bg-emerald-500/10 flex items-center justify-center backdrop-blur-md border border-emerald-500/50">
                          <RefreshCw size={48} className="text-emerald-400" />
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
