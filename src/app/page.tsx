"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Disc, Activity, Zap, Globe, Cpu, Music2, Radio, Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const prefersReduced = useReducedMotion();

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Clamp ranges and provide lighter ranges on mobile
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 0.92 : 0.8]);
  
  const section1Y = useTransform(scrollYProgress, [0.1, 0.4], [isMobile ? 45 : 100, 0]);
  const section1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-screen md:min-h-[300vh]">
      
      {/* Fixed Background Elements - Purely decorative and transparent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Mobile Static Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] md:hidden" />

        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="hidden md:block absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] will-change-transform"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="hidden md:block absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] will-change-transform"
        />
      </div>

      {/* HERO SECTION - Sticky on all viewports to match Features page */}
      <div className="sticky top-0 h-screen py-0 flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: prefersReduced ? 1 : heroOpacity, scale: prefersReduced ? 1 : heroScale }}
          className="relative z-10 text-center px-4"
        >
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 md:backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium tracking-widest uppercase text-blue-200">Audio Engine Active</span>
            </div>
          </div>

          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-transparent mix-blend-overlay">
            VOXTRONA
          </h1>
          
          <p className="mt-8 text-xl md:text-3xl font-light text-gray-400 max-w-2xl mx-auto">
            The boundary between <span className="text-white font-medium">sound</span> and <span className="text-white font-medium">reality</span> has dissolved.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
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
          </div>
        </motion.div>
      </div>

      {/* SCROLL CONTENT - Align mobile spacing with Features page */}
      <div className="relative z-20 mt-[50vh] md:mt-[30vh] lg:mt-[50vh] pb-32 px-4">
        
        {/* SECTION 1: THE ENGINE */}
        <motion.div 
          style={{ y: prefersReduced ? 0 : section1Y, opacity: prefersReduced ? 1 : section1Opacity }}
          className="max-w-7xl mx-auto mb-32 md:mb-64"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90">
                PURE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ENERGY</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Our proprietary 64-bit audio engine processes sound with surgical precision. 
                Now featuring lossless wireless transmission for studio-quality audio, completely untethered.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 md:backdrop-blur-sm">
                  <Activity className="text-blue-400 mb-4" size={32} />
                  <div className="text-2xl md:text-3xl font-bold">0.01<span className="text-sm text-gray-500">ms</span></div>
                  <div className="text-sm text-gray-400">Latency</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 md:backdrop-blur-sm">
                  <Radio className="text-purple-400 mb-4" size={32} />
                  <div className="text-2xl md:text-3xl font-bold">Lossless<span className="text-sm text-gray-500"></span></div>
                  <div className="text-sm text-gray-400">Wireless Audio</div>
                </div>
              </div>
            </div>
            
            {/* Abstract Visual */}
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] border border-white/10 bg-white/5 md:backdrop-blur-md overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              
              {/* Wireless Energy Animation */}
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Expanding Ripples - Desktop Only */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="hidden md:block absolute rounded-full border border-white/20 w-[50px] h-[50px] will-change-transform"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ 
                      scale: 16, 
                      opacity: 0,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Rotating Dashed Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 border-dashed"
                />

                {/* Inner Pulsing Core */}
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute w-24 h-24 md:w-32 md:h-32 bg-blue-500/20 rounded-full blur-2xl"
                />
                
                {/* Center Point */}
                <div className="relative z-10 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse" />
              </div>

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
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
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
            <div 
              key={i}
              className="group relative p-[2px] rounded-[2rem] md:rounded-[3rem] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-[1.9rem] md:rounded-[2.9rem] p-8 md:p-24 overflow-hidden">
                <div className={`absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br ${item.color} opacity-10 blur-[60px] md:blur-[100px] group-hover:opacity-20 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                  <div className="w-full">
                    {/* Mobile: left-aligned single line with icon inline (tighter to fit 320px) */}
                    <div className="md:hidden flex items-center gap-2">
                      <item.icon size={32} className="text-white/80 shrink-0" />
                      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis text-left text-[6.5vw] sm:text-[6vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                        {item.title} {item.subtitle}
                      </h3>
                    </div>

                    {/* Desktop/Tablet: keep original two-line layout with icon above */}
                    <item.icon size={48} className="hidden md:block mb-8 text-white/80 md:w-16 md:h-16" />
                    <h3 className="hidden md:block text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                      {item.title}
                    </h3>
                    <h4 className="hidden md:block text-3xl md:text-6xl font-bold text-white/20 tracking-tighter">
                      {item.subtitle}
                    </h4>
                  </div>
                  <div className="max-w-md text-right md:text-left">
                    <p className="text-xl md:text-2xl text-gray-300 font-light">{item.desc}</p>
                    <Link href={item.href} className="mt-8 group relative px-8 py-3 rounded-full border border-white/20 overflow-hidden inline-flex items-center gap-2 font-bold text-white transition-colors hover:border-white/50">
                      <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
                      <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                        Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-64 text-center pb-48">
          <h2 className="text-[10vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter leading-none mb-16">
            READY?
          </h2>
          <div className="relative z-10">
            <Link href="/download" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-2xl font-bold overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_100px_rgba(255,255,255,0.5)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] opacity-0 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                <Download size={32} className="group-hover:animate-bounce" />
                Download Now
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

