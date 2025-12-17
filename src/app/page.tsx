"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Disc, Activity, Zap, Globe, Cpu, Music2, Radio, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";
import Section from "@/components/Section";
import { motion as m } from "framer-motion";

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

  // On mobile, avoid scroll-linked transforms to prevent stutter when the hero leaves viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Desktop-like behavior on all devices as requested
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  const section1Y = useTransform(scrollYProgress, [0.1, 0.4], [isMobile ? 45 : 100, 0]);
  const section1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-screen md:min-h-[300vh]">
      
      {/* Fixed Background Elements - Purely decorative and transparent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
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

      {/* HERO SECTION - Conversion-focused, with vignette and micro demo */}
      <div className="sticky top-0 h-screen py-0 flex items-center justify-center overflow-hidden will-change-transform">
        {/* Contrast layer for readability over Beams */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.6)_100%)]" />

        <motion.div
          style={{ opacity: (heroOpacity as any), scale: (heroScale as any) }}
          className="relative z-10 w-full max-w-7xl px-4 md:px-8"
        >
          <div className="grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10 md:gap-16">
            {/* Copy + CTAs */}
            <div className="text-center md:text-left">
              <div className="mb-6 md:mb-8 inline-flex md:inline-flex">
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 md:backdrop-blur-md">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-blue-200">Engine Online</span>
                </div>
              </div>

              <h1 className="text-[14vw] md:text-7xl lg:text-8xl leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30">
                Voxtrona Music
              </h1>
              <p className="mt-3 md:mt-4 text-base md:text-2xl font-black tracking-tighter text-white/85">
                High‑Fidelity. Zero Compromise.
              </p>

              <p className="mt-5 md:mt-6 text-base md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
                Hear your library like the first time. Lossless wireless, neural EQ, and spatial upmixing—beautifully packaged for everyday listening.
              </p>

              <ul className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-400">
                <li className="flex items-center justify-center md:justify-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Lossless over the air</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Adaptive Neural EQ</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Spatial up to 7.1.4</li>
              </ul>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4 md:gap-5 justify-center md:justify-start">
                <Button href="/download" variant="primary" size="lg" aria-label="Download Voxtrona App">
                  <span className="font-bold tracking-wide">Download App</span>
                  <ArrowRight size={18} />
                </Button>
                <Button href="/features" variant="secondary" size="lg" aria-label="Explore Voxtrona Features">
                  Explore Features
                </Button>
              </div>

              {/* Trust row */}
              <div className="mt-6 md:mt-8 flex items-center justify-center md:justify-start gap-6 text-xs text-gray-400">
                <span className="opacity-80">No tracking</span>
                <span className="opacity-80">Offline-first</span>
                <span className="opacity-80">Open formats</span>
              </div>
            </div>

            {/* Micro demo card */}
            <div className="hidden md:block">
              <div className="relative mx-auto w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <div className="relative p-5">
                  {/* Minimal player mock */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10" />
                      <div className="flex-1">
                        <div className="h-3 w-32 bg-white/20 rounded-full" />
                        <div className="mt-2 h-2 w-20 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    {/* Progress */}
                    <div className="mt-6 h-2 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: "10%" }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                    {/* EQ bars */}
                    <div className="mt-6 grid grid-cols-8 gap-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-full bg-white/20 rounded-full"
                          style={{ height: 60 }}
                          animate={{ height: [20, 60, 25, 50, 30, 55, 22, 45][i % 8] }}
                          transition={{ duration: 1.2 + (i % 5) * 0.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sticky mobile CTA bar */}
        <div className="md:hidden fixed bottom-4 inset-x-4 z-10">
          <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-3 flex items-center gap-3">
            <Button href="/download" className="flex-1" size="md">Download</Button>
            <Button href="/features" variant="secondary" size="md">Features</Button>
          </div>
        </div>
      </div>

      {/* SCROLL CONTENT - wrapped in Section for consistent spacing */}
      <Section className="relative z-20 mt-[50vh] md:mt-[30vh] lg:mt-[50vh] pb-32">
        
        {/* SECTION 1: THE ENGINE */}
        <motion.div 
          style={{ y: prefersReduced ? 0 : section1Y, opacity: prefersReduced ? 1 : section1Opacity }}
          className="mx-auto mb-32 md:mb-64"
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

        {/* SECTION 2: FEATURES HORIZONTAL with staggered motion */}
        <div className="mx-auto space-y-16 md:space-y-32">
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
            <m.div
              key={i}
              className="group relative p-[2px] rounded-[2rem] md:rounded-[3rem] overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
                    <Button href={item.href} variant="secondary" size="md" className="mt-8">
                      Explore <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Removed Social Proof and FAQ as requested */}

        {/* FOOTER CTA */}
        <div className="mt-64 text-center pb-48">
          <h2 className="text-[10vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter leading-none mb-16">
            READY?
          </h2>
          <div className="relative z-10">
            <Button href="/download" size="lg" className="px-12 py-6 text-2xl font-bold">
              <Download size={24} />
              Download Now
            </Button>
          </div>
        </div>

      </Section>
    </div>
  );
}

