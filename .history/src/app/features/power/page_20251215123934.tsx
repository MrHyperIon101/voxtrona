"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Zap, Sliders, Gauge, Code, Settings } from "lucide-react";

export default function PowerPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[100px] animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/0">
              POWER
            </h1>
            <p className="text-xl md:text-3xl font-light tracking-[1em] text-yellow-200 uppercase mr-[-1em]">
              Total Control
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* DSP Engine */}
        <div className="py-24 flex items-center border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-6">
                <Sliders size={16} />
                <span className="text-sm font-bold tracking-wider">DSP SUITE</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Shape <br />
                <span className="text-gray-500">Your Sound.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                A professional-grade 10-band parametric EQ, compressor, and limiter built right in. 
                Adjust playback speed, pitch shift without affecting tempo, or apply reverb effects in real-time.
              </p>
              <ul className="space-y-4">
                {["Parametric EQ", "Pitch Shifting", "Playback Speed Control"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-yellow-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.2),transparent_70%)]" />
                <div className="flex gap-4 items-end h-32">
                  {[40, 70, 50, 90, 60, 80, 40, 60].map((h, i) => (
                    <div key={i} className="w-8 bg-yellow-500 rounded-t-md" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scripting */}
        <div className="py-24 flex items-center">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-green-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden p-8 group-hover:border-transparent transition-colors">
                 <code className="text-green-400 font-mono text-sm">
                   {`// Custom Script
onTrackStart(track) {
  if (track.genre === 'Rock') {
    dsp.setEQ('BassBoost');
    lights.setColor('#FF0000');
  }
}`}
                 </code>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
                <Code size={16} />
                <span className="text-sm font-bold tracking-wider">SCRIPTING</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Automate <br />
                <span className="text-gray-500">Everything.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                For the power users. Write simple JavaScript snippets to automate player behavior. 
                Change EQ based on genre, trigger smart home lights on play, or create custom shortcuts.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
