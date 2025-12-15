"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { AudioLines, Palette, Search, Zap, Cast, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "AUDIO ENGINE",
    desc: "64-bit precision rendering with bit-perfect playback. No compression. No compromises.",
    icon: AudioLines,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
    href: "/features/audio-engine"
  },
  {
    title: "VISUALS",
    desc: "Dynamic themes that adapt to your album art in real-time. A feast for your eyes.",
    icon: Palette,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-transparent",
    href: "/features/visuals"
  },
  {
    title: "DISCOVERY",
    desc: "Unified search across YouTube, Spotify, and local files. Your music, one place.",
    icon: Search,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
    href: "/features/discovery"
  },
  {
    title: "POWER",
    desc: "Granular control over every aspect. Pitch shift, playback speed, scripts, and more.",
    icon: Zap,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-transparent",
    href: "/features/power"
  },
  {
    title: "CONNECT",
    desc: "Seamless casting to Chromecast and Android Auto. Music that moves with you.",
    icon: Cast,
    color: "text-green-400",
    gradient: "from-green-500/20 to-transparent",
    href: "/features/connect"
  },
  {
    title: "PRIVACY",
    desc: "Zero telemetry. Your data stays on your device. We don't want to know what you listen to.",
    icon: Lock,
    color: "text-red-400",
    gradient: "from-red-500/20 to-transparent",
    href: "/features/privacy"
  }
];

export default function FeaturesPage() {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 0.94 : 0.8]);

  return (
    <div ref={containerRef} className="relative">
      
      {/* HERO SECTION - Sticky */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div 
          style={{ opacity: prefersReduced ? 1 : heroOpacity, scale: prefersReduced ? 1 : heroScale }}
          className="relative z-10 text-center px-4"
        >
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] text-purple-200 uppercase">Features Overview</span>
          </div>
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-transparent mix-blend-overlay">
            UNLIMITED
          </h1>
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white/10">
            POWER
          </h1>
        </motion.div>
      </div>

      {/* SCROLL CONTENT */}
      <div className="relative z-20 mt-[50vh] pb-32 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-[2px] rounded-[3rem] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 h-full bg-black/80 backdrop-blur-xl rounded-[2.9rem] p-12 md:p-24 overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                  <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 ${feature.color}`}>
                    <feature.icon size={64} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{feature.title}</h2>
                    <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                      {feature.desc}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <Link href={feature.href} className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center overflow-hidden group/btn hover:border-white transition-colors duration-300">
                      <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                      <ArrowRight size={32} className="relative z-10 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:text-black transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
