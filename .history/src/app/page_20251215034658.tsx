"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play, Disc, Activity, Zap, Globe, Cpu, Music2, Radio, Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  const section1Y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const section1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[300vh]">
      
      {/* Fixed Background Elements - Purely decorative and transparent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"
        />
      </div>

      {/* HERO SECTION - Sticky */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block"
          >
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium tracking-widest uppercase text-blue-200">Audio Engine Active</span>
            </div>
          </motion.div>

          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-transparent mix-blend-overlay">
            VOXTRONA
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-xl md:text-3xl font-light text-gray-400 max-w-2xl mx-auto"
          >
            The boundary between <span className="text-white font-medium">sound</span> and <span className="text-white font-medium">reality</span> has dissolved.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link href="/download" className="group relative px-12 py-5 bg-transparent overflow-hidden rounded-full">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full skew-x-12 origin-left" />
              
              <span className="relative z-10 flex items-center gap-3 font-bold text-lg tracking-wide text-white">
                INITIALIZE CORE 
                <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                   <ArrowRight size={20} className="absolute transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                   <ArrowRight size={20} className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </span>
              
              {/* Glow Effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL CONTENT - Floats over the sticky hero */}
      <div className="relative z-20 mt-[50vh] pb-32 px-4">
        
        {/* SECTION 1: THE ENGINE */}
        <motion.div 
          style={{ y: section1Y, opacity: section1Opacity }}
          className="max-w-7xl mx-auto mb-64"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90">
                PURE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ENERGY</span>
              </h2>
              <p className="text-2xl text-gray-400 leading-relaxed">
                Our proprietary 64-bit audio engine processes sound with surgical precision. 
                No compression. No artifacts. Just pure, unadulterated frequency response.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Activity className="text-blue-400 mb-4" size={32} />
                  <div className="text-3xl font-bold">0.01<span className="text-sm text-gray-500">ms</span></div>
                  <div className="text-sm text-gray-400">Latency</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Zap className="text-purple-400 mb-4" size={32} />
                  <div className="text-3xl font-bold">768<span className="text-sm text-gray-500">kHz</span></div>
                  <div className="text-sm text-gray-400">Sample Rate</div>
                </div>
              </div>
            </div>
            
            {/* Abstract Visual */}
            <div className="relative h-[600px] w-full rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 rounded-full border border-white/20 border-dashed relative"
              >
                <div className="absolute inset-0 rounded-full border border-white/10 scale-75" />
                <div className="absolute inset-0 rounded-full border border-white/10 scale-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
              </motion.div>
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-12 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">System Status</div>
                    <div className="font-mono text-green-400">PROCESSING AUDIO STREAM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: FEATURES HORIZONTAL */}
        <div className="max-w-7xl mx-auto space-y-32">
          {[
            { 
              title: "SPATIAL", 
              subtitle: "IMMERSION", 
              desc: "Upscale stereo to 7.1.4 virtual surround.",
              icon: Globe,
              color: "from-blue-500 to-cyan-500",
              href: "/spatial-audio"
            },
            { 
              title: "NEURAL", 
              subtitle: "EQ", 
              desc: "AI-powered equalization that adapts to your hearing.",
              icon: Cpu,
              color: "from-purple-500 to-pink-500",
              href: "/features/power"
            },
            { 
              title: "CLOUD", 
              subtitle: "SYNC", 
              desc: "Your library, everywhere. Instantly.",
              icon: Radio,
              color: "from-orange-500 to-red-500",
              href: "/features/connect"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              className="group relative p-1 rounded-[3rem] bg-gradient-to-r from-white/5 to-white/0"
            >
              <div className="relative rounded-[2.9rem] bg-black/20 backdrop-blur-xl border border-white/10 p-12 md:p-24 overflow-hidden">
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${item.color} opacity-10 blur-[100px] group-hover:opacity-20 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div>
                    <item.icon size={64} className="mb-8 text-white/80" />
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                      {item.title}
                    </h3>
                    <h4 className="text-4xl md:text-6xl font-bold text-white/20 tracking-tighter">
                      {item.subtitle}
                    </h4>
                  </div>
                  <div className="max-w-md text-right md:text-left">
                    <p className="text-2xl text-gray-300 font-light">{item.desc}</p>
                    <Link href={item.href} className="mt-8 group relative px-8 py-3 rounded-full border border-white/20 overflow-hidden inline-flex items-center gap-2 font-bold text-white transition-colors hover:border-white/50">
                      <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
                      <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                        Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-64 text-center pb-48">
          <h2 className="text-[10vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter leading-none mb-16">
            READY?
          </h2>
          <div className="relative z-10">
            <Link href="/download" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-2xl font-bold hover:scale-110 transition-transform shadow-[0_0_100px_rgba(255,255,255,0.3)]">
              <Download size={32} />
              Download Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

