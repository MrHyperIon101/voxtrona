"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Disc, Activity, Zap, Globe, Cpu, Music2, Radio, Download } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import HeroVisual from "@/components/HeroVisual";
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

  // Scroll-linked animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero animations - keep the cool effects!
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Section animations - cool scroll effects for all devices
  const section1Y = useTransform(scrollYProgress, [0.1, 0.4], [isMobile ? 45 : 100, 0]);
  const section1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] md:min-h-[300vh]">

      {/* Fixed Background Elements - Desktop only */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] will-change-transform"
        />
      </div>

      {/* HERO SECTION - Conversion-focused */}
      <div className="sticky top-0 h-screen py-0 flex items-center justify-center overflow-hidden will-change-transform">

        <motion.div
          style={{ opacity: (heroOpacity as any), scale: (heroScale as any) }}
          className="relative z-10 w-full max-w-7xl px-4 md:px-8"
        >
          <div className="grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10 md:gap-16">
            {/* Copy + CTAs */}
            <div className="text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 md:mb-8 inline-flex md:inline-flex"
              >
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <div className="flex items-end gap-1 h-3">
                    <motion.div
                      animate={{ height: ["20%", "100%", "50%", "80%", "30%"] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="w-1 bg-blue-400 rounded-full"
                    />
                    <motion.div
                      animate={{ height: ["60%", "30%", "100%", "40%", "70%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                      className="w-1 bg-purple-400 rounded-full"
                    />
                    <motion.div
                      animate={{ height: ["40%", "80%", "30%", "100%", "50%"] }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                      className="w-1 bg-blue-400 rounded-full"
                    />
                    <motion.div
                      animate={{ height: ["80%", "40%", "90%", "20%", "60%"] }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                      className="w-1 bg-purple-400 rounded-full"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-blue-100/90 text-shadow-sm">Neural Engine Active</span>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/30"
              >
                Voxtrona Music
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 md:mt-4 text-sm md:text-2xl font-black tracking-tighter text-white/85"
              >
                High‑Fidelity. Zero Compromise.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-4 md:mt-6 text-sm md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
              >
                Studio clarity meets intelligent processing - adapting perfectly to you.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
              >
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                  <span className="text-xs font-medium text-gray-300">Lossless over the air</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
                  <span className="text-xs font-medium text-gray-300">Adaptive Neural EQ</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <span className="text-xs font-medium text-gray-300">Spatial up to 7.1.4</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4 md:gap-5 justify-center md:justify-start"
              >
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4 md:gap-6 justify-center md:justify-start">
                  {/* Download Button */}
                  <Link href="/download" className="group/btn relative flex items-center gap-4 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-full transition-all">
                    <div className="text-left">
                      <div className="text-lg font-bold text-white leading-none">Download App</div>
                      <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">v2.2 Official</div>
                    </div>
                    <div className="relative w-12 h-12 rounded-full border border-white/20 flex items-center justify-center overflow-hidden bg-black/20">
                      <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                      <ArrowRight size={20} className="relative z-10 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:text-black transition-all duration-300" />
                    </div>
                  </Link>

                  {/* Explore Button */}
                  <Link href="/features" className="group/btn relative flex items-center gap-4 px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/5 rounded-full transition-all">
                    <div className="text-left">
                      <div className="text-lg font-bold text-gray-200 leading-none">Explore Features</div>
                    </div>
                    <div className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                      <ArrowRight size={18} className="relative z-10 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:text-black transition-all duration-300" />
                    </div>
                  </Link>
                </div>
              </motion.div>

            </div>

            {/* Micro demo card */}
            <div className="hidden md:block">
              <HeroVisual />
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL CONTENT - wrapped in Section for consistent spacing */}
      <Section className="relative z-20 mt-[20vh] md:mt-[30vh] lg:mt-[50vh] pb-32">

        {/* MILESTONES SECTION */}
        <div className="max-w-7xl mx-auto px-4 mb-32 md:mb-48">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Active Users", value: "40k+", icon: Globe },
              { label: "Downloads", value: "700k+", icon: Download },
              { label: "Rating", value: "4.9", icon: Activity },
              { label: "Songs Streamed", value: "29M+", icon: Music2 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-3xl bg-transparent border border-white/10 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-colors"
              >
                <stat.icon className="text-gray-400 mb-4 group-hover:text-blue-400 transition-colors" size={24} />
                <div className="text-3xl md:text-5xl font-black text-white mb-1 tracking-tighter">{stat.value}</div>
                <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 1: THE ENGINE - NEXT LEVEL UPGRADE */}
        <motion.div
          style={{ y: prefersReduced ? 0 : section1Y, opacity: prefersReduced ? 1 : section1Opacity }}
          className="mx-auto mb-32 md:mb-64"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-8 relative z-10">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white/90">
                PURE <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x bg-[size:200%_auto]">ENERGY</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                Our proprietary <span className="text-blue-400 font-bold">64-bit audio engine</span> processes sound with surgical precision.
                Experience a soundstage so wide, it feels infinite. Completely untethered.
              </p>

              {/* Feature Tags - Minimalist */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-gray-300">
                  Neural Processing
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-gray-300">
                  Real-time Upscaling
                </div>
              </div>
            </div>

            {/* Right Column: Pure Organic Energy Visual */}
            <div className="relative h-[500px] md:h-[600px] w-full rounded-[3rem] border border-white/10 bg-black overflow-hidden flex items-center justify-center">

              {/* Interactive Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

              {/* LIQUID ENERGY CORE */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Blob 1: Blue - Calm movement */}
                <motion.div
                  animate={isMobile ? undefined : {
                    scale: [1, 1.1, 1],
                    x: [-10, 10, -10],
                    y: [-10, 10, -10],
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-48 h-48 md:w-96 md:h-96 bg-blue-600 rounded-full blur-[80px] md:blur-[100px] opacity-50 mix-blend-screen"
                />

                {/* Blob 2: Purple - Calm counter movement */}
                <motion.div
                  animate={isMobile ? undefined : {
                    scale: [1.1, 1, 1.1],
                    x: [10, -10, 10],
                    y: [10, -10, 10],
                  }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-48 h-48 md:w-80 md:h-80 bg-purple-600 rounded-full blur-[60px] md:blur-[80px] opacity-50 mix-blend-screen"
                />

                {/* Blob 3: Core White Heat - Subtle */}
                <motion.div
                  animate={isMobile ? undefined : { scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-24 md:w-32 md:h-32 bg-white rounded-full blur-[40px] md:blur-[50px] opacity-30 mix-blend-overlay"
                />

                {/* Central Physical Element (The "Source") */}
                <div className="relative z-10 w-28 h-28 md:w-40 md:h-40 bg-black/50 backdrop-blur-3xl rounded-full border border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.2)] flex items-center justify-center group">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500/10 to-purple-500/10" />
                  <Activity size={36} className="text-white relative z-20 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-500" />

                  {/* Orbiting Particle - Slower */}
                  <div className="absolute inset-0 md:animate-[spin_8s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6]" />
                  </div>
                </div>

                {/* Floating Elegant Stats - Pushed to Corners */}
                {/* Stat 1: Latency (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-6 bottom-6 md:left-20 md:bottom-1/3 flex items-center gap-4 py-2 px-4 rounded-full bg-black/20 backdrop-blur-md md:bg-transparent md:p-0"
                >
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter">0.01ms</div>
                    <div className="text-[10px] md:text-xs text-blue-400 font-mono tracking-widest uppercase">Ultra Low Latency</div>
                  </div>
                  {/* Line only on Desktop */}
                  <div className="hidden md:block w-12 h-px bg-linear-to-r from-blue-500 to-transparent" />
                </motion.div>

                {/* Stat 2: Lossless (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute right-6 top-6 md:right-20 md:top-1/3 flex items-center gap-4 py-2 px-4 rounded-full bg-black/20 backdrop-blur-md md:bg-transparent md:p-0"
                >
                  {/* Line only on Desktop */}
                  <div className="hidden md:block w-12 h-px bg-linear-to-l from-purple-500 to-transparent" />
                  <div className="text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter">LOSSLESS</div>
                    <div className="text-[10px] md:text-xs text-purple-400 font-mono tracking-widest uppercase">Bit-Perfect Audio</div>
                  </div>
                </motion.div>
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
              initial={{ opacity: 0, y: isMobile ? 10 : 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-black/20 backdrop-blur-xl rounded-[1.9rem] md:rounded-[2.9rem] p-6 md:p-24 overflow-hidden">
                <div className={`absolute top-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-linear-to-br ${item.color} opacity-10 blur-2xl md:blur-[100px] group-hover:opacity-20 transition-opacity duration-700`} />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
                  <div className="w-full">
                    {/* Mobile: Vertical layout with icon on top */}
                    <div className="md:hidden space-y-3">
                      <item.icon size={36} className="text-white/80" />
                      <h3 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/50">
                        {item.title}
                      </h3>
                      <h4 className="text-2xl font-bold text-white/30 tracking-tighter">
                        {item.subtitle}
                      </h4>
                    </div>

                    {/* Desktop/Tablet: keep original layout */}
                    <item.icon size={48} className="hidden md:block mb-8 text-white/80 md:w-16 md:h-16" />
                    <h3 className="hidden md:block text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/50">
                      {item.title}
                    </h3>
                    <h4 className="hidden md:block text-3xl md:text-6xl font-bold text-white/20 tracking-tighter">
                      {item.subtitle}
                    </h4>
                  </div>
                  <div className="w-full md:max-w-md">
                    <p className="text-base md:text-2xl text-gray-300 font-light leading-relaxed">{item.desc}</p>
                    <Link href={item.href} className="mt-8 group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="font-bold text-sm">Explore</span>
                      <div className="relative w-8 h-8 rounded-full border border-white/20 flex items-center justify-center overflow-hidden bg-black/20">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:text-black transition-all duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Removed Social Proof and FAQ as requested */}

        {/* FOOTER CTA */}
        <div className="mt-24 text-center pb-24">
          <h2 className="text-[10vw] font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 tracking-tighter leading-none mb-8">
            READY?
          </h2>
          <div className="relative z-10 inline-block">
            <Link href="/download" className="group/btn relative flex items-center gap-6 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-full transition-all">
              <div className="text-left">
                <div className="text-2xl font-bold text-white leading-none">Download Now</div>
                <div className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Experience Hi-Fi</div>
              </div>
              <div className="relative w-16 h-16 rounded-full border border-white/20 flex items-center justify-center overflow-hidden bg-black/20">
                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <ArrowRight size={24} className="relative z-10 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:text-black transition-all duration-300" />
              </div>
            </Link>
          </div>
        </div>

      </Section>
    </div>
  );
}

