"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Sliders, AudioWaveform, Ear, Smartphone, Waves, Zap, Speaker } from "lucide-react";

export default function AudioFXPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] md:hidden" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[100px] animate-pulse will-change-transform" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/0">
              AUDIO FX
            </h1>
            <p className="text-lg md:text-3xl font-light tracking-[0.5em] md:tracking-[1em] text-amber-200 uppercase">
              Sculpt Sound
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Equalizer & Bass */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6">
                <Sliders size={16} />
                <span className="text-sm font-bold tracking-wider">EQUALIZER</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Total Freq <br />
                <span className="text-gray-500">Control.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Fine-tune every frequency. Use our powerful 5-band or system-level multi-band equalizer 
                to match your headphones or your mood. Includes a separate dedicated Bass Boost engine.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                 {[
                     "5-Band Parametric EQ",
                     "Dynamic Bass Boost",
                     "30+ Professional Presets",
                     "Auto-EQ for popular headphones"
                 ].map((item, i) => (
                  <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm md:text-base text-gray-300">
                     {item}
                  </div>
                ))}
              </ul>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-amber-900/20 to-black/30 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 <div className="flex items-end gap-3 h-48 md:h-64 px-8 w-full justify-between">
                    {[40, 70, 50, 90, 60, 80, 45, 75].map((h, i) => (
                        <div key={i} className="flex-1 bg-amber-500 rounded-t-lg relative group/bar">
                            <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                            <motion.div 
                                initial={{ height: "0%" }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                                className="w-full bg-amber-500 rounded-t-lg h-full"
                            />
                        </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Spatial Audio */}
        <div className="flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-indigo-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_70%)]" />
                     <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 border border-indigo-500/30 rounded-full animate-[ping_3s_linear_infinite]" />
                        <div className="absolute inset-0 border border-indigo-500/30 rounded-full animate-[ping_3s_linear_infinite_1s]" />
                        <Ear size={100} className="text-indigo-400 relative z-10" />
                     </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
                    <Smartphone size={16} />
                    <span className="text-sm font-bold tracking-wider">SPATIALIZER</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Android <br />
                    <span className="text-gray-500">Spatial Audio.</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    Experience native spatial audio on Android 13+. Voxtrona taps into the system's audio engine 
                    to support dynamic head tracking with compatible headphones (Pixel Buds, LinkBuds, etc.).
                  </p>
                  <ul className="space-y-4">
                     {[
                         "Dynamic Head Tracking Support",
                         "Dolby Atmos Compatibility",
                         "Virtual 7.1 Surround Sound",
                         "Immersive Soundstage"
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

        {/* Section 3: DSP & Reverb */}
        <div className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6">
                <AudioWaveform size={16} />
                <span className="text-sm font-bold tracking-wider">DSP ENGINE</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Studio <br />
                <span className="text-gray-500">Reverb.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Add depth to flat recordings. Our convolution reverb engine allows you to simulate environments 
                ranging from a small recording studio to a massive concert hall.
              </p>
              <div className="grid gap-4">
                  {[
                      { title: "Concert Hall", desc: "For that massive, live feel." },
                      { title: "Small Studio", desc: "Tight, intimate acoustics." },
                      { title: "Plate Reverb", desc: "Vintage 60s warmth." },
                      { title: "Stereo Widener", desc: "Expand the soundstage." }
                  ].map((feature, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                          <div className="w-1 h-full rounded-full bg-orange-500/50" />
                          <div>
                              <div className="font-bold text-white mb-1">{feature.title}</div>
                              <div className="text-sm text-gray-400">{feature.desc}</div>
                          </div>
                      </div>
                  ))}
               </div>
            </div>
            
            <div className="group relative p-px rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full rounded-[1.4rem] bg-linear-to-br from-orange-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-transparent transition-colors">
                 {/* Visual representation of reverb - expanding circles */}
                 <div className="relative">
                     <Speaker size={64} className="relative z-10 text-orange-500" />
                      {[1, 1.5, 2, 2.5].map((scale, i) => (
                          <div 
                            key={i}
                            className="absolute inset-0 border border-orange-500/30 rounded-full"
                            style={{ 
                                scale: scale, 
                                opacity: 1 - (i * 0.2),
                                transition: "all 0.5s ease" 
                            }}
                          />
                      ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
