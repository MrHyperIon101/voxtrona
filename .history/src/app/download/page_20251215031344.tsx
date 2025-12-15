"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Smartphone, Monitor, QrCode, ArrowRight, Check, Star, Zap, Shield, Cpu, Globe, Wifi, Battery } from "lucide-react";

export default function DownloadPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: [0.2, 0.5, 0.2], y: -100 }}
              transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
              className="absolute bottom-0 w-1 bg-gradient-to-t from-blue-500 to-transparent h-96 blur-sm"
              style={{ left: `${20 + i * 15}%` }}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8">
            <Download size={16} />
            <span className="text-sm font-bold tracking-wider">GET STARTED</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/10">
            INSTALL <br />
            THE CORE
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deploy the Voxtrona Audio Engine to your device. <br />
            Experience low-latency, high-fidelity playback anywhere.
          </p>
        </motion.div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10">
          {/* Android Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative p-1 bg-gradient-to-b from-green-500/50 to-transparent rounded-[2.5rem]"
          >
            <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-black rounded-[2.4rem] p-8 md:p-12 border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <Smartphone size={120} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                  <Smartphone size={32} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Android</h3>
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-sm">v2.4.0 STABLE</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {["Material You Support", "System-wide EQ", "Offline Playback", "Widget Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Download size={20} />
                Download APK
              </button>
            </div>
          </motion.div>

          {/* Windows Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative p-1 bg-gradient-to-b from-blue-500/50 to-transparent rounded-[2.5rem]"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-black rounded-[2.4rem] p-8 md:p-12 border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <Monitor size={120} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                  <Monitor size={32} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Windows</h3>
                  <div className="flex items-center gap-2 text-blue-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="font-mono text-sm">COMING SOON</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {["WASAPI Exclusive Mode", "VST Plugin Support", "Mini Player", "Discord Rich Presence"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500">
                    <Check size={18} className="text-blue-900" />
                    {item}
                  </li>
                ))}
              </ul>

              <button disabled className="w-full py-4 rounded-xl bg-white/10 text-gray-500 font-bold text-lg cursor-not-allowed flex items-center justify-center gap-2">
                <Shield size={20} />
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Zero Latency", desc: "Optimized audio pipeline ensures instant playback response.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
              { icon: Battery, title: "Battery Efficient", desc: "Uses < 2% CPU in background playback on modern devices.", color: "text-green-400", bg: "bg-green-500/10" },
              { icon: Wifi, title: "Smart Sync", desc: "Intelligent caching algorithm minimizes data usage.", color: "text-blue-400", bg: "bg-blue-500/10" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <feature.icon size={24} className={feature.color} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-green-400 flex items-center gap-2">
                <Smartphone size={20} /> Android
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>OS Version</span>
                  <span className="text-white">Android 10+</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>RAM</span>
                  <span className="text-white">4GB Min</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Storage</span>
                  <span className="text-white">100MB Free</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Processor</span>
                  <span className="text-white">Snapdragon 845+</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                <Monitor size={20} /> Windows
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>OS Version</span>
                  <span className="text-white">Windows 10/11 (64-bit)</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>RAM</span>
                  <span className="text-white">8GB Min</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Storage</span>
                  <span className="text-white">500MB Free</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Audio</span>
                  <span className="text-white">DirectSound / WASAPI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
