"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Radio, Smartphone, Music, Layers, Download, Settings, Globe, Heart, Headphones, Star, Users, Cpu } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Active Users", value: "2M+" },
  { label: "Tracks Streamed", value: "1B+" },
  { label: "Audio Quality", value: "32-bit" },
  { label: "Global Rating", value: "4.9/5" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">v2.4.0 Now Available</span>
          </div>

          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/10">
            VOXTRONA <br />
            MUSIC
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Experience music with <span className="text-blue-400 font-medium">surgical precision</span>. 
            The only player that combines audiophile-grade rendering with next-gen spatial audio.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/download"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              <Download size={24} />
              <span>Get Early Access</span>
            </Link>
            <Link
              href="/features"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-3"
            >
              <span>Explore Engine</span>
              <ArrowRight size={24} />
            </Link>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/20 backdrop-blur-sm py-8"
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left px-8 border-r border-white/5 last:border-0">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Feature Preview Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="col-span-2 p-12 rounded-[2.5rem] bg-gradient-to-br from-purple-900/20 to-blue-900/10 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <Headphones size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8">
                  <Radio size={32} className="text-purple-400" />
                </div>
                <h3 className="text-4xl font-bold mb-4">Spatial Audio</h3>
                <p className="text-xl text-gray-400 max-w-md">
                  Proprietary 3D audio engine that upscales stereo tracks into an immersive 360 soundstage.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="col-span-1 p-12 rounded-[2.5rem] bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-white/10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-8">
                  <Shield size={32} className="text-green-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Privacy First</h3>
                <p className="text-lg text-gray-400">
                  Zero telemetry. Your listening habits are yours alone.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="col-span-1 p-12 rounded-[2.5rem] bg-gradient-to-br from-orange-900/20 to-red-900/10 border border-white/10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-8">
                  <Zap size={32} className="text-orange-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Bit-Perfect</h3>
                <p className="text-lg text-gray-400">
                  Direct hardware access for uncompressed audio delivery.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="col-span-2 p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8">
                  <Layers size={32} className="text-blue-400" />
                </div>
                <h3 className="text-4xl font-bold mb-4">Universal Sync</h3>
                <p className="text-xl text-gray-400 max-w-md">
                  Seamlessly blend your local library with Spotify, YouTube Music, and cloud storage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to ascend?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of audiophiles who have already upgraded their listening experience.
          </p>
          <Link
            href="/download"
            className="inline-flex px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform items-center gap-3"
          >
            <Download size={28} />
            Download Voxtrona
          </Link>
        </div>
      </section>
    </div>
  );
}

