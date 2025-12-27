"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Headphones, Radio, Speaker, Waves, AudioLines, Box, Circle, Triangle, Zap, Target, Activity, ScanFace, Mic2 } from "lucide-react";

export default function SpatialAudioPage() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Only apply transforms on desktop to prevent mobile lag
  // We can't easily detect mobile in SSR, so we'll use a CSS-based approach or just simplify
  // For now, let's remove the heavy scroll transforms entirely as requested for mobile performance
  // The user said "hanging the website in mobile like crazy", so we should be conservative.
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section - Immersive Storytelling */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_90%)]" />
          <div className="hidden md:block absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="hidden md:block absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              SPATIAL
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[1em] text-blue-200 uppercase">
              Audio Engine
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-12 flex flex-col items-center gap-2 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-px h-12 bg-linear-to-b from-transparent via-white/20 to-transparent" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/30">Scroll to Explore</span>
        </motion.div>
      </section>

      {/* Partners Section - Border Removed */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-12">Certified & Powered By</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {/* Dolby Atmos */}
            <div className="flex items-center gap-3 group/logo cursor-pointer">
              <svg className="h-10 w-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.564v16.872h2.488c4.648 0 8.438-3.788 8.438-8.436s-3.79-8.436-8.438-8.436H0zm21.512 0c-4.648 0-8.438 3.788-8.438 8.436s3.79 8.436 8.438 8.436H24V3.564h-2.488z"/>
              </svg>
              <span className="text-2xl font-bold tracking-tighter">DOLBY <span className="font-light">ATMOS</span></span>
            </div>

            {/* Dirac Live */}
            <div className="flex items-center gap-2 group/logo cursor-pointer">
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
            <div className="flex items-center gap-2 group/logo cursor-pointer">
              <div className="flex items-center">
                 <span className="text-4xl font-black tracking-tighter text-white">dts</span>
                 <span className="text-4xl font-black italic text-orange-500 mx-1">:</span>
                 <span className="text-4xl font-black italic text-orange-500">X</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 border-t border-white/5 pt-24">
        
        {/* Dolby Atmos Section */}
        <div className="py-12 md:py-24 flex items-center">
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
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-blue-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
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
            <div className="order-2 md:order-1 group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-purple-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
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
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-orange-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 border-20 border-orange-500/10 rounded-full scale-50 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 border-20 border-orange-500/5 rounded-full scale-75 group-hover:scale-125 transition-transform duration-700 delay-100" />
                <Target size={80} className="text-orange-500 relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Head Tracking & HRTF Grid */}
        <div className="py-12 md:py-24 grid md:grid-cols-2 gap-8">
          <div className="group relative p-px rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 transition-opacity duration-500" />
            
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

          <div className="group relative p-px rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 transition-opacity duration-500" />
            
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

