"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Mic2, Languages, Sparkles, Music, Type, Quote, FileText } from "lucide-react";

export default function LyricsPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              LYRICS
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-pink-200 uppercase">
              Sing Along
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Synced Lyrics */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
                <Mic2 size={16} />
                <span className="text-sm font-bold tracking-wider">SYNCED</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Perfectly <br />
                <span className="text-gray-500">Timed.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Never miss a beat. Voxtrona pulls time-synced lyrics from multiple providers like LRCLIB, 
                Spotify, and Musixmatch to give you a karaoke-style scrolling experience that aligns perfectly with the audio.
              </p>
              <ul className="space-y-4">
                 {[
                     "Word-by-word syncing support",
                     "Fallback to static lyrics if sync unavailable",
                     "Offline lyrics caching",
                     "Large, readable TV-style UI"
                 ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                     {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-pink-900/20 to-black border border-white/10 flex flex-col items-center justify-center overflow-hidden group-hover:border-transparent transition-colors p-8 text-center bg-black/50 backdrop-blur-sm">
                 <div className="space-y-6 transform scale-110">
                     <div className="text-2xl md:text-3xl font-bold text-white/30 blur-[1px] transition-all duration-300 hover:text-white/60 hover:blur-none">Yesterday</div>
                     <div className="text-3xl md:text-5xl font-black text-white scale-110 tracking-tight glow-pink">All my troubles</div>
                     <div className="text-2xl md:text-3xl font-bold text-white/30 blur-[1px] transition-all duration-300 hover:text-white/60 hover:blur-none">Seemed so far away</div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: AI Translation */}
        <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-purple-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_70%)]" />
                     <div className="grid grid-cols-2 gap-8">
                         <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                             <Quote size={32} className="text-purple-400 mb-2" />
                             <div className="text-sm text-gray-400">Original</div>
                             <div className="font-bold">Hello</div>
                         </div>
                         <div className="p-6 bg-purple-500/20 border border-purple-500/40 rounded-xl">
                             <Sparkles size={32} className="text-purple-300 mb-2" />
                             <div className="text-sm text-purple-300">Translated</div>
                             <div className="font-bold text-white">Hola</div>
                         </div>
                     </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                    <Languages size={16} />
                    <span className="text-sm font-bold tracking-wider">GEMINI POWERED</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Translate <br />
                    <span className="text-gray-500">Culture.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    Don't just listen; understand. Voxtrona uses standard AI provider APIs (Gemini, OpenAI)
                    to translate foreign lyrics in real-time, maintaining context, slang, and even rhyme schemes.
                  </p>
                  <ul className="space-y-4">
                     {[
                         "Real-time AI Translation",
                         "Context-aware (Gemini Flash)",
                         "Dual-view (Original + Translation)",
                         "Save translations offline"
                     ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

        {/* Section 3: Canvas support */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
                <Music size={16} />
                <span className="text-sm font-bold tracking-wider">IMMERSIVE</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Spotify <br />
                <span className="text-gray-500">Canvases.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Bring album art to life. Voxtrona supports Spotify Canvas loops, replacing static covers with 
                short, looping video art provided by the artists.
              </p>
              <div className="grid grid-cols-2 gap-4">
                  {[
                      { title: "HD Video", desc: "High quality loops." },
                      { title: "Low Data", desc: "Optimized streaming." },
                      { title: "Artist Vision", desc: "See what they see." },
                      { title: "Battery Safe", desc: "Pauses when hidden." }
                  ].map((feature, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="font-bold text-white mb-1">{feature.title}</div>
                          <div className="text-xs text-gray-400">{feature.desc}</div>
                      </div>
                  ))}
               </div>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                  <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center animate-pulse" />
                  <div className="relative z-10 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-white font-bold">PLAYING CANVAS</span>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
