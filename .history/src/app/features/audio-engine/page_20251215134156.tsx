"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AudioLines, Waves, Speaker, Music2, Mic2, Activity, Zap } from "lucide-react";

export default function AudioEnginePage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[60vh] md:h-[80vh] flex items-center justify-center relative overflow-hidden">
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
              AUDIO
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-blue-200 uppercase">
              Engine Core
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* 64-bit Rendering */}
        <div className="py-12 md:py-24 flex items-center border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Activity size={16} />
                <span className="text-sm font-bold tracking-wider">PRECISION</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                64-bit <br />
                <span className="text-gray-500">Rendering.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Most players truncate audio data. We don't. Voxtrona's internal audio pipeline operates at 
                64-bit floating point precision, ensuring that every digital signal processing step retains 
                absolute fidelity before the final output stage.
              </p>
              <ul className="space-y-4">
                {["Zero Quantization Noise", "Infinite Headroom", "Bit-Perfect Output"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-blue-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]" />
                <Waves size={120} className="text-blue-500/20 animate-pulse md:w-[200px] md:h-[200px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Format Support */}
        <div className="py-12 md:py-24 flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-purple-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="grid grid-cols-2 gap-4 md:gap-8 text-center">
                   {['FLAC', 'DSD', 'WAV', 'MQA'].map((fmt) => (
                     <div key={fmt} className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10">
                       <span className="text-xl md:text-3xl font-bold text-white/80">{fmt}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Music2 size={16} />
                <span className="text-sm font-bold tracking-wider">COMPATIBILITY</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Play <br />
                <span className="text-gray-500">Everything.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                From standard MP3s to audiophile-grade DSD512. If it's an audio file, Voxtrona plays it.
                Our custom decoder handles obscure formats and high-res containers with ease.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
