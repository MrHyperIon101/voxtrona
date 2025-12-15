"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Search, Globe, Database, Network, Share2 } from "lucide-react";

export default function DiscoveryPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/0">
              DISCOVERY
            </h1>
            <p className="text-xl md:text-3xl font-light tracking-[1em] text-purple-200 uppercase">
              Unified Search
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* Unified Search */}
        <div className="py-24 flex items-center border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Search size={16} />
                <span className="text-sm font-bold tracking-wider">ONE BAR</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Search <br />
                <span className="text-gray-500">Everywhere.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Stop switching apps. Voxtrona indexes your local library and integrates with YouTube Music 
                and Spotify APIs. Type once, find results from all your sources in a single, unified list.
              </p>
              <ul className="space-y-4">
                {["Local Files", "YouTube Music", "Spotify Integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-purple-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_70%)]" />
                <Network size={200} className="text-purple-500/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Smart Metadata */}
        <div className="py-24 flex items-center">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-blue-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <Database size={150} className="text-blue-500/20" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Database size={16} />
                <span className="text-sm font-bold tracking-wider">METADATA</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Auto <br />
                <span className="text-gray-500">Tagging.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Messy library? No problem. Voxtrona automatically fetches high-quality album art, 
                artist bios, and correct tags for your local files using advanced acoustic fingerprinting.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
