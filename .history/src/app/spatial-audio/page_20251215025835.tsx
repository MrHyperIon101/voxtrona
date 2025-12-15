"use client";

import React from "react";
import { motion } from "framer-motion";
import { Headphones, Radio, Speaker, Waves, AudioLines, Box, Circle, Triangle } from "lucide-react";

export default function SpatialAudioPage() {
  return (
    <div className="min-h-screen pt-32 px-4 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 p-4 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <Headphones size={48} className="text-blue-400" />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Spatial Audio
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in a 360 soundstage. Music is no longer just left and rightit's all around you.
          </p>
        </div>

        {/* Visual Representation */}
        <div className="relative h-[400px] mb-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl" />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-64 h-64 md:w-96 md:h-96 border border-white/10 rounded-full flex items-center justify-center"
          >
            <div className="absolute inset-0 border border-white/5 rounded-full scale-150" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-75" />
            
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
            />
            
            {/* Orbiting Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-purple-500 w-4 h-4 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-pink-500 w-4 h-4 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
            <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-blue-500 w-4 h-4 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
            <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 bg-green-500 w-4 h-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
          </motion.div>
          
          <div className="absolute text-center">
            <h3 className="text-xl font-bold tracking-widest">YOU</h3>
            <p className="text-xs text-gray-500 mt-1">CENTER STAGE</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group"
          >
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
              <Box size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Object-Based</h3>
            <p className="text-gray-400 leading-relaxed">
              Sound sources are treated as individual objects that can be placed anywhere in 3D space, independent of channels.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group"
          >
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
              <SurroundSound size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Head Tracking</h3>
            <p className="text-gray-400 leading-relaxed">
              Dynamic head tracking adjusts the sound field as you turn your head, anchoring the audio to the real world.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group"
          >
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
              <Waves size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Binaural Rendering</h3>
            <p className="text-gray-400 leading-relaxed">
              Advanced HRTF algorithms simulate how your ears perceive sound, creating a realistic sense of depth and distance.
            </p>
          </motion.div>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-8">Supported Technologies</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-black tracking-tighter">DOLBY</span>
                <span className="text-sm tracking-[0.5em]">ATMOS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-black tracking-tighter">DTS</span>
                <span className="text-sm tracking-[0.5em]">X</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-black tracking-tighter">SONY</span>
                <span className="text-sm tracking-[0.5em]">360 RA</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

