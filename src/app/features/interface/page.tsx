"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, Droplets, Moon, Layout, Square, Layers, Sparkles } from "lucide-react";

export default function InterfacePage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              INTERFACE
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-cyan-200 uppercase">
              Liquid Glass
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Liquid Glass Aesthetics */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                <Droplets size={16} />
                <span className="text-sm font-bold tracking-wider">AESTHETICS</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Responsive <br />
                <span className="text-gray-500">Liquid Glass.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                The interface isn't just static; it breathes. We utilize advanced mesh gradients and real-time backdrop blur
                to create a sense of depth and materiality. Elements slide and morph with fluid physics-based animations.
              </p>
              <ul className="space-y-4">
                  {[
                      "Real-time Backdrop Blur",
                      "Physics-based Micro-interactions",
                      "Mesh Gradient Backgrounds",
                      "Depth-aware Layering"
                  ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {item}
                      </li>
                  ))}
              </ul>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse" />
                 <div className="w-64 h-24 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/80 font-medium tracking-widest">GLASS_UI</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: OLED & Dark Mode */}
        <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                     <div className="w-full h-full bg-transparent flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
                         <Moon size={120} className="text-white fill-white shadow-[0_0_50px_rgba(255,255,255,0.5)]" />
                     </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
                    <Moon size={16} />
                    <span className="text-sm font-bold tracking-wider">TRUE BLACK</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    OLED <br />
                    <span className="text-gray-500">Perfection.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    Turn off the lights. Our implementation of Dark Mode goes beyond just gray; we offer a True Black OLED mode
                    that turns off pixels completely, saving battery and looking stunning on modern displays.
                  </p>
                  <ul className="space-y-4">
                     {[
                         "#000000 True Black Backgrounds",
                         "High Contrast Text",
                         "Battery Saving on OLED Panels",
                         "Reduced Eye Strain"
                     ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

        {/* Section 3: Customization Engine */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Palette size={16} />
                <span className="text-sm font-bold tracking-wider">THEMING</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Your App. <br />
                <span className="text-gray-500">Your Colors.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Don't settle for defaults. Voxtrona extracts prominent colors from your album art to theme the player dynamically,
                or lets you manually pick your accent colors to match your vibe.
              </p>
               <div className="grid grid-cols-2 gap-4">
                  {[
                      { title: "Dynamic", desc: "Colors from Album Art" },
                      { title: "Static", desc: "Choose your favorite" },
                      { title: "Material You", desc: "System Monet theming" },
                      { title: "Auto-Night", desc: "Schedule dark mode" }
                  ].map((feature, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="font-bold text-white mb-1">{feature.title}</div>
                          <div className="text-xs text-gray-400">{feature.desc}</div>
                      </div>
                  ))}
               </div>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="w-16 h-16 rounded-full bg-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.5)]" />
                    <div className="w-16 h-16 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
                    <div className="w-16 h-16 rounded-full bg-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.5)]" />
                    <div className="w-16 h-16 rounded-full bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
                 </div>
              </div>
            </div>
          </div>
        </div>

         {/* Section 4: Layout Density */}
         <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors p-8">
                     <div className="w-full space-y-4">
                        <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse" />
                        <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse delay-75" />
                        <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse delay-150" />
                        <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse delay-200" />
                     </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
                    <Layout size={16} />
                    <span className="text-sm font-bold tracking-wider">DENSITY</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Fit Your <br />
                    <span className="text-gray-500">Screen.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    Whether you're on a massive tablet or a compact phone, Voxtrona adapts. Choose from Cozy, Compact, or Comfortable
                    layout densities to see more music or enjoy larger touch targets.
                  </p>
                  <ul className="space-y-4">
                     {[
                         "Compact Mode for maximum efficiency",
                         "Cozy Mode with large album art",
                         "Tablet Split-view layouts",
                         "Desktop-class sidebar navigation"
                     ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
