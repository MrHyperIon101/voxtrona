"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Headphones, Radio, Speaker, Waves, AudioLines, Box, Circle, Triangle, Zap, Target, Activity, ScanFace, Mic2 } from "lucide-react";

export default function SpatialAudioPage() {
  
  // Only apply transforms on desktop to prevent mobile lag
  // We can't easily detect mobile in SSR, so we'll use a CSS-based approach or just simplify
  // For now, let's remove the heavy scroll transforms entirely as requested for mobile performance
  // The user said "hanging the website in mobile like crazy", so we should be conservative.
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Mobile Static Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] md:hidden" />
          
          {/* Desktop Animated Background */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/0">
              SPATIAL
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[1em] text-blue-200 uppercase">
              Audio Engine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-white uppercase tracking-widest mb-8">Certified & Powered By</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Dolby Atmos */}
            <div className="flex items-center gap-3 group/logo">
              <svg className="h-10 w-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.564v16.872h2.488c4.648 0 8.438-3.788 8.438-8.436s-3.79-8.436-8.438-8.436H0zm21.512 0c-4.648 0-8.438 3.788-8.438 8.436s3.79 8.436 8.438 8.436H24V3.564h-2.488z"/>
              </svg>
              <span className="text-2xl font-bold tracking-tighter">DOLBY <span className="font-light">ATMOS</span></span>
            </div>

            {/* Dirac Live */}
            <div className="flex items-center gap-2 group/logo">
              <div className="relative h-20 w-64 transition-all duration-500 filter brightness-0 invert group-hover:filter-none">
                <Image 
                  src="/dirac-logo.png" 
                  alt="Dirac Live" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            {/* DTS:X */}
            <div className="flex items-center gap-2 group/logo">
              <svg className="h-8 w-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="m23.556 14.346-1.194-1.173a.841.841 0 0 1 .604-1.445h.59a.346.346 0 0 0 .349-.343v-.636H18.97a1.492 1.492 0 0 0-1.507 1.477v.003c0 .396.16.775.444 1.05l1.201 1.18a.841.841 0 0 1-.604 1.446h-1.849a1.306 1.306 0 0 1-1.317-1.294v-2.876h1.135a.346.346 0 0 0 .35-.343v-.636h-1.485V7.587l-3.866 1.66v1.494h-1.87V7.123h-2.87a.986.986 0 0 0-.997.98v2.638H3.67C1.514 10.741 0 11.893 0 13.81c0 1.71 1.776 3.068 3.676 3.068h4.615a1.306 1.306 0 0 0 1.318-1.294v-3.855h1.863v2.503c0 1.423.874 2.646 2.65 2.646h8.371A1.492 1.492 0 0 0 24 15.4v-.003a1.444 1.444 0 0 0-.444-1.051zM5.729 15.683a.217.217 0 0 1-.219.214h-.13c-1.34 0-1.835-.908-1.85-2.088.015-1.216.525-2.088 1.85-2.088h.349v3.962z"/>
              </svg>
              <span className="text-3xl font-black italic text-orange-500">:X</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* Dolby Atmos Section */}
        <div className="py-12 md:py-24 flex items-center border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Box size={16} />
                <span className="text-sm font-bold tracking-wider">OBJECT-BASED AUDIO</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Dolby Atmos <br />
                <span className="text-gray-500">Integration.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Experience sound that moves all around you with breathtaking realism. 
                Voxtrona's native Dolby Atmos decoder renders up to 128 simultaneous audio objects, 
                placing each sound in its precise 3D coordinate relative to your listening position.
              </p>
              <ul className="space-y-4">
                {["Height Channels", "Cinema-Grade Rendering", "Dynamic Metadata"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-blue-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="grid grid-cols-3 gap-4 relative z-10">
                  {[...Array(9)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      className="hidden md:block w-4 h-4 rounded-full bg-blue-400"
                    />
                  ))}
                  {/* Static fallback for mobile */}
                  {[...Array(9)].map((_, i) => (
                    <div key={`static-${i}`} className="md:hidden w-4 h-4 rounded-full bg-blue-400/50" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dirac Live Section */}
        <div className="py-12 md:py-24 flex items-center border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-purple-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity }}
                      className="hidden md:block w-2 h-full bg-purple-500/50 rounded-full origin-bottom will-change-transform"
                    />
                  ))}
                  {/* Static fallback for mobile */}
                  {[...Array(20)].map((_, i) => (
                    <div key={`static-${i}`} className="md:hidden w-2 h-1/2 bg-purple-500/50 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Activity size={16} />
                <span className="text-sm font-bold tracking-wider">ROOM CORRECTION</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Powered by <br />
                <span className="text-gray-500">Dirac Live.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                World-leading room correction technology, now optimized for headphones. 
                We analyze the impulse response of your specific gear and correct frequency 
                anomalies in real-time for a perfectly flat, studio-reference response.
              </p>
              <ul className="space-y-4">
                {["Impulse Response Correction", "Phase Alignment", "Reference Curve Target"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DTS:X Ultra Section */}
        <div className="py-12 md:py-24 flex items-center border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6">
                <Target size={16} />
                <span className="text-sm font-bold tracking-wider">POSITIONAL ACCURACY</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                DTS:X Ultra <br />
                <span className="text-gray-500">Precision.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Designed for gaming and VR, DTS:X Ultra provides a competitive edge with 
                pinpoint positional accuracy. Hear exactly where the enemy is coming from, 
                or get lost in the ambient details of your favorite open-world soundtrack.
              </p>
              <ul className="space-y-4">
                {["Gaming Mode", "VR Optimization", "Distance Modeling"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-orange-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 border-[20px] border-orange-500/10 rounded-full scale-50 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 border-[20px] border-orange-500/5 rounded-full scale-75 group-hover:scale-125 transition-transform duration-700 delay-100" />
                <Target size={80} className="text-orange-500 relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Head Tracking & HRTF Grid */}
        <div className="py-12 md:py-24 grid md:grid-cols-2 gap-8">
          <div className="group relative p-[1px] rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 transition-opacity duration-500" />
            <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 md:p-12 rounded-[2.4rem] bg-white/5 border border-white/10 overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ScanFace size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                  <ScanFace size={24} className="text-green-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Dynamic Head Tracking</h3>
                <p className="text-gray-400 leading-relaxed">
                  The soundstage stays fixed in space, even when you move. Turn your head, 
                  and the vocals stay front-and-center, just like a live performance.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative p-[1px] rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 transition-opacity duration-500" />
            <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 md:p-12 rounded-[2.4rem] bg-white/5 border border-white/10 overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Mic2 size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                  <Mic2 size={24} className="text-pink-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Personalized HRTF</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your ears are unique. Scan your ear profile to generate a custom 
                  Head Related Transfer Function (HRTF) for the most accurate spatial simulation possible.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

