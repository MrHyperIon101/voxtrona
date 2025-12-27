"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Compass, Sparkles, BarChart3, Play, TrendingUp } from "lucide-react";

export default function DiscoveryPage() {
  // const { scrollYProgress } = useScroll(); // Unused for now
  
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              DISCOVERY
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-purple-200 uppercase">
              Explore New Worlds
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Personalized Feed */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-bold tracking-wider">FOR YOU</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Curated <br />
                <span className="text-gray-500">Just for You.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Your personal soundtrack, updated daily. Our algorithms learn your taste to serve up "Quick Picks",
                "Forgotten Favorites", and "New Releases" that you interrupt your day to listen to.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                 {[
                     "My Supermix (Endless)",
                     "New Release Mix",
                     "Discover Mix",
                     "Replay Mix"
                 ].map((item, i) => (
                  <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm md:text-base text-gray-300">
                     {item}
                  </div>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-purple-900/40 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-white/20 transition-all duration-500">
                 {/* Ambient Background Glow */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]" />

                 {/* 3D Card Stack Container */}
                 <div className="relative w-48 h-48 md:w-64 md:h-64 group-hover:scale-105 transition-transform duration-500">
                    
                    {/* Back Card (Left) */}
                    <div className="absolute top-4 -left-12 w-full h-full rounded-2xl bg-linear-to-br from-pink-500 to-rose-600 shadow-2xl transform -rotate-12 scale-90 opacity-60 group-hover:-translate-x-4 transition-transform duration-500 border border-white/10" />

                    {/* Back Card (Right) */}
                    <div className="absolute top-4 -right-12 w-full h-full rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-2xl transform rotate-12 scale-90 opacity-60 group-hover:translate-x-4 transition-transform duration-500 border border-white/10" />

                    {/* Main Center Card */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-600 to-indigo-600 shadow-2xl z-10 border border-white/20 flex items-center justify-center overflow-hidden">
                        {/* Inner gradient/texture */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-size-[250%_250%] animate-shimmer" />

                        <div className="relative z-20 flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                                <Play className="fill-white text-white w-6 h-6 ml-1" />
                            </div>
                            <span className="text-white font-bold tracking-widest text-xs uppercase mt-2">Supermix</span>
                        </div>
                    </div>

                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mood Mixes */}
        <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-cyan-900/40 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-white/20 transition-all duration-500">
                     
                     {/* EQ Visualizer Container */}
                     <div className="flex items-end gap-3 md:gap-4 h-64 padding-8">
                        {[
                            { name: "Focus", height: "h-48", color: "from-violet-500 to-purple-600", delay: "delay-0" },
                            { name: "Chill", height: "h-32", color: "from-cyan-400 to-teal-500", delay: "delay-100" },
                            { name: "Energy", height: "h-60", color: "from-amber-400 to-orange-600", delay: "delay-200" },
                            { name: "Sleep", height: "h-24", color: "from-indigo-400 to-blue-900", delay: "delay-300" },
                            { name: "Party", height: "h-56", color: "from-pink-500 to-rose-600", delay: "delay-150" },
                        ].map((bar, i) => (
                            <div key={i} className="group/bar relative flex flex-col items-center gap-3">
                                <div className={`w-12 md:w-16 ${bar.height} rounded-2xl bg-linear-to-t ${bar.color} relative overflow-hidden transition-all duration-500 group-hover/bar:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                    {/* Glass reflection */}
                                    <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/30 to-transparent opacity-50" />
                                    {/* Liquid Bubble Animation (Fake) */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/20 blur-md animate-pulse" />
                                </div>
                                <span className="text-xs md:text-sm font-bold text-white/50 tracking-wider group-hover/bar:text-white transition-colors">
                                    {bar.name}
                                </span>
                            </div>
                        ))}
                     </div>

                     {/* Reflection floor */}
                     <div className="absolute bottom-10 inset-x-0 h-20 bg-linear-to-t from-black via-black/80 to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                    <Compass size={16} />
                    <span className="text-sm font-bold tracking-wider">MOODS</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Vibe <br />
                    <span className="text-gray-500">Check.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    How are you feeling? Tap a Mood Chip to instantly filter your recommendations.
                    Whether you need to focus, sweat, or drift off, we have a mix ready.
                  </p>
                  <ul className="space-y-4">
                     {[
                         "Activity-based Filtering",
                         "Genre-blending Stations",
                         "Day/Night Adaptive suggestions",
                         "Infinite Autoplay"
                     ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

        {/* Section 3: Charts */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-6">
                <TrendingUp size={16} />
                <span className="text-sm font-bold tracking-wider">TRENDING</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Global <br />
                <span className="text-gray-500">Pulse.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                See what the world is listening to. Explore Top 100 charts from over 100 countries, 
                viral hits on TikTok, and emerging artists on the rise.
              </p>
              <div className="grid gap-4">
                  {[
                      { title: "Top 100 Global", desc: "The biggest hits right now." },
                      { title: "Viral 50", desc: "Trending on social media." },
                      { title: "New Music Friday", desc: "Fresh drops this week." },
                      { title: "Billboard Hot 100", desc: "Official chart integration." }
                  ].map((feature, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                          <div className="font-black text-rose-500/50 text-xl w-8 flex items-center justify-center">#{i + 1}</div>
                          <div>
                              <div className="font-bold text-white mb-1">{feature.title}</div>
                              <div className="text-sm text-gray-400">{feature.desc}</div>
                          </div>
                      </div>
                  ))}
               </div>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-rose-900/20 to-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                  <BarChart3 size={120} className="text-rose-500/50" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black to-transparent" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
