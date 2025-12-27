"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Music, 
  Play, 
  Repeat, 
  Youtube, 
  Radio, 
  FastForward,
  Waves
} from "lucide-react";

export default function CorePlaybackPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              CORE
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-blue-200 uppercase">
              Playback Experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-24 md:space-y-48">
        
        {/* Streaming Integration */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                <Youtube size={16} />
                <span className="text-sm font-bold tracking-wider">INTEGRATION</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Stream in <br />
                <span className="text-gray-500">Harmony.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Seamlessly integrated with Voxtron's catalog. Access millions of tracks, albums, and artists directly.
                No switching apps. Just pure music flowing.
              </p>
              <ul className="space-y-4">
                 {["Instant Access", "Official Catalog", "Seamless Switching"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                     {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-red-900/20 to-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2),transparent_70%)]" />
                <Play size={100} className="text-red-500/40 md:w-[150px] md:h-[150px] fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Audio Quality */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
             <div className="order-2 md:order-1 group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-amber-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-3xl font-black text-white">FLAC</div>
                        <div className="text-xs text-amber-500">LOSSLESS</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 opacity-50">
                        <div className="text-3xl font-black text-white">320</div>
                        <div className="text-xs text-white/50">KBPS</div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6">
                <Waves size={16} />
                <span className="text-sm font-bold tracking-wider">BITRATE</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                High Fidelity <br />
                <span className="text-gray-500">Audio.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Choose your quality. Save data with efficient 96kbps or immerse yourself in studio-quality FLAC lossless audio.
                Configurable per network type.
              </p>
               <ul className="grid grid-cols-2 gap-4">
                 {["96kbps (Low)", "160kbps (Medium)", "320kbps (High)", "FLAC (Ultra)"].map((item, i) => (
                  <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm md:text-base text-gray-300">
                     {item}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <FastForward size={16} />
                <span className="text-sm font-bold tracking-wider">CONTROL</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Total <br />
                <span className="text-gray-500">Mastery.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Adjust playback speed for podcasts, change pitch for practice, or ensure gapless transitions for concept albums.
                Voxtrona gives you the tools to listen your way.
              </p>
              <div className="grid gap-4">
                  {[
                      { title: "Gapless Playback", desc: "No silence between tracks." },
                      { title: "Crossfade", desc: "Smooth configurable transitions." },
                      { title: "Speed & Pitch", desc: "Independent tempo and key control." },
                      { title: "Background Playback", desc: "Keep listening while multitasking." }
                  ].map((feature, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <div className="w-1 h-full rounded-full bg-purple-500/50" />
                          <div>
                              <div className="font-bold text-white mb-1">{feature.title}</div>
                              <div className="text-sm text-gray-400">{feature.desc}</div>
                          </div>
                      </div>
                  ))}
              </div>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-purple-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-t-purple-500 rounded-full animate-spin" />
                    <FastForward size={48} className="text-purple-400" />
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
