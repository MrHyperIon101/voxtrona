"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Shield, Cloud, Terminal, Lock, Server, Database } from "lucide-react";

export default function SettingsPage() {
  // const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              CONTROL
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-slate-200 uppercase">
              Your Data. Your Rules.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Privacy & Security */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 mb-6">
                <Shield size={16} />
                <span className="text-sm font-bold tracking-wider">PRIVACY CORE</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Fortress <br />
                <span className="text-gray-500">Mode.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Voxtrona is built on a privacy-first architecture. All listening history, preferences, and downloaded caches
                stay on your device unless you explicitly choose to sync.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                 {[
                    { text: "Local-First DB", icon: Database },
                    { text: "Encrypted Cache", icon: Lock },
                    { text: "On-Device Processing", icon: Server },
                    { text: "No Tracking Specs", icon: Shield }
                 ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="w-4 h-4 text-slate-500" />
                     {item.text}
                  </div>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-slate-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="relative z-10 w-48 h-64 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl flex flex-col p-4 space-y-3">
                    <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse delay-75" />
                    <div className="flex-1" />
                    <div className="h-32 rounded-lg bg-slate-800/50 border border-dashed border-slate-700 flex items-center justify-center">
                        <Lock className="text-slate-500" />
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-slate-500/10 blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Account & Sync */}
        <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-indigo-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                     <div className="flex gap-8">
                         <div className="w-24 h-40 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                             <span className="text-4xl">📱</span>
                         </div>
                         <div className="w-40 h-28 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center self-center">
                             <span className="text-4xl">💻</span>
                         </div>
                     </div>
                     <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     >
                        <div className="w-64 h-64 border border-dashed border-indigo-500/30 rounded-full" />
                     </motion.div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
                    <Cloud size={16} />
                    <span className="text-sm font-bold tracking-wider">SYNC</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Universal <br />
                    <span className="text-gray-500">Access.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    Create a secure Voxtrona Identity to sync your content across devices. 
                    End-to-end encrypted synchronization ensures your listening habits remain yours alone.
                  </p>
                  <ul className="space-y-4">
                     {[
                         "Cross-Device Playback Handoff",
                         "Encrypted Library Cloud Backup",
                         "Shared Listening Sessions",
                         "Spotify & YT Music Auth Bridge"
                     ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

        {/* Section 3: Advanced/Develope */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <Terminal size={16} />
                <span className="text-sm font-bold tracking-wider">POWER USER</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Under the <br />
                <span className="text-gray-500">Hood.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                For those who need total control. Access developer tools, customize audio routing, 
                tweak buffer settings, and manage raw database entries.
              </p>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs md:text-sm text-emerald-400/80">
                  <div className="p-2 border border-emerald-500/20 rounded bg-emerald-950/30">
                      &gt; audio_buffer: 512ms
                  </div>
                  <div className="p-2 border border-emerald-500/20 rounded bg-emerald-950/30">
                      &gt; thread_prio: HIGHEST
                  </div>
                   <div className="p-2 border border-emerald-500/20 rounded bg-emerald-950/30">
                      &gt; cache_limit: 10GB
                  </div>
                   <div className="p-2 border border-emerald-500/20 rounded bg-emerald-950/30">
                      &gt; api_region: AUTO
                  </div>
              </div>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-emerald-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="w-full h-full p-6 font-mono text-xs text-emerald-500/50 overflow-hidden leading-relaxed select-none">
                    {Array.from({length: 20}).map((_, i) => (
                        <div key={i} className="whitespace-nowrap opacity-50">
                            0x{Math.random().toString(16).slice(2, 10).toUpperCase()} :: 
                            PROCESS_AUDIO_STREAM [PID:{Math.floor(Math.random() * 9000) + 1000}]
                        </div>
                    ))}
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
