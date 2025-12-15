"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Cast, Smartphone, Monitor, Wifi, Radio } from "lucide-react";

export default function ConnectPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[100px] animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/0">
              CONNECT
            </h1>
            <p className="text-xl md:text-3xl font-light tracking-[1em] text-green-200 uppercase">
              Ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* Casting */}
        <div className="py-24 flex items-center border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
                <Cast size={16} />
                <span className="text-sm font-bold tracking-wider">CASTING</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Play <br />
                <span className="text-gray-500">Anywhere.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Send your music to the big screen or your best speakers. Voxtrona supports native casting 
                to Chromecast, DLNA, and AirPlay devices with zero configuration.
              </p>
              <ul className="space-y-4">
                {["Chromecast Support", "DLNA / UPnP", "AirPlay Compatible"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-[1px] rounded-3xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-green-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_70%)]" />
                <Wifi size={200} className="text-green-500/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Android Auto */}
        <div className="py-24 flex items-center">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 group relative p-[1px] rounded-3xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-blue-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="w-full max-w-xs p-6 bg-gray-900 rounded-xl border border-gray-700">
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-blue-500 rounded-lg" />
                     <div>
                       <div className="h-4 w-32 bg-gray-700 rounded mb-2" />
                       <div className="h-3 w-20 bg-gray-800 rounded" />
                     </div>
                   </div>
                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full w-1/2 bg-blue-500" />
                   </div>
                 </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Smartphone size={16} />
                <span className="text-sm font-bold tracking-wider">ON THE ROAD</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Android <br />
                <span className="text-gray-500">Auto.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Take your library on the road. Our optimized Android Auto interface is designed for 
                safety and ease of use, giving you access to your playlists and voice search while driving.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
