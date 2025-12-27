"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Globe, Languages, Map, Users, Flag, MessageCircle } from "lucide-react";

export default function GlobalPage() {
  // const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              GLOBAL
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-rose-200 uppercase">
              No Borders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Localization */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-6">
                <Globe size={16} />
                <span className="text-sm font-bold tracking-wider">WORLDWIDE</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Native <br />
                <span className="text-gray-500">Everywhere.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Voxtrona speaks your language. With support for over 70+ languages, 
                our interface adapts to feel right at home, no matter where you are.
              </p>
              <div className="flex flex-wrap gap-2">
                 {["English", "Español", "中文", "हिन्दी", "العربية", "Português", "Русский", "日本語", "Deutsch", "Français"].map((lang, i) => (
                  <div key={i} className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300">
                     {lang}
                  </div>
                ))}
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500">
                    +60 More
                </div>
              </div>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-rose-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <Languages size={100} className="text-rose-500/50" />
                 <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
                    {Array.from({length: 36}).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-white/5" />
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Regional Charts */}
        <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-orange-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                     {/* Abstract Map Representation */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <Map size={200} className="text-orange-500" />
                     </div>
                     <div className="relative z-10 flex gap-4">
                        <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-orange-500/30 text-orange-400 text-sm font-bold shadow-lg animate-bounce">
                           NYC
                        </div>
                         <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-orange-500/30 text-orange-400 text-sm font-bold shadow-lg animate-bounce delay-100">
                           LDN
                        </div>
                         <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-orange-500/30 text-orange-400 text-sm font-bold shadow-lg animate-bounce delay-200">
                           TOK
                        </div>
                     </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6">
                    <Flag size={16} />
                    <span className="text-sm font-bold tracking-wider">REGIONS</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Local <br />
                    <span className="text-gray-500">Pulse.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    Explore what's trending across the globe. Switch your content region instantly to discover
                    viral hits from Brazil, underground scenes in Berlin, or K-Pop straight from Seoul.
                  </p>
                  <ul className="space-y-4">
                     {[
                         "100+ Country Charts",
                         "City-Level Trends",
                         "Instant Region Switching",
                         "Cultural Playlists"
                     ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

        {/* Section 3: Community */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Users size={16} />
                <span className="text-sm font-bold tracking-wider">COMMUNITY</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Crowd <br />
                <span className="text-gray-500">Powered.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Our translations are powered by a vibrant community of contributors on Crowdin.
                Join thousands of users helping to bring Voxtrona to every corner of the world.
              </p>
              <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                      {[
                        { bg: "from-blue-500 to-cyan-500", text: "JD" },
                        { bg: "from-purple-500 to-pink-500", text: "AS" },
                        { bg: "from-amber-500 to-orange-600", text: "RK" },
                        { bg: "from-emerald-500 to-teal-600", text: "FY" },
                        { bg: "from-rose-500 to-red-600", text: "SZ" },
                      ].map((user, i) => (
                          <div key={i} className={`w-10 h-10 rounded-full bg-linear-to-br ${user.bg} border-2 border-black flex items-center justify-center text-xs font-bold text-white ring-2 ring-black transform hover:-translate-y-1 transition-transform cursor-default z-${i*10}`}>
                              {user.text}
                          </div>
                      ))}
                  </div>
                  <div className="text-sm text-gray-400">
                      <span className="text-white font-bold">500+</span> Contributors <br/>
                      <span className="text-xs text-blue-400">Join the revolution</span>
                  </div>
              </div>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-blue-900/20 to-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                  <MessageCircle size={100} className="text-blue-500/50" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
