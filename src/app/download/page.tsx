"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Download, Smartphone, Monitor, Shield, Terminal, Cpu, HardDrive, Zap,
  CheckCircle2, AlertCircle, ExternalLink, Star, Users,
  TrendingUp, Package, FileText, Github, MessageCircle, Sparkles, Music, Layers, ArrowRight, Tv
} from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

// --- Components ---

function CardSpotlight({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  // Optimization: Cache rect on mouse enter to avoid layout thrashing on move
  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    mouseX.set(e.clientX - rectRef.current.left);
    mouseY.set(e.clientY - rectRef.current.top);
  };

  return (
    <div
      ref={cardRef}
      className="group relative border border-white/10 bg-gray-900/20 overflow-hidden rounded-3xl"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 md:group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

const SpecGrid = ({ features, colorClass }: { features: { icon: any, label: string, desc: string }[], colorClass: string }) => (
  <div className="grid grid-cols-2 gap-3 mb-8 flex-1">
    {features.map((item, i) => (
      <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/feat">
        <div className={clsx("mb-2 p-1.5 w-fit rounded-lg transition-transform group-hover/feat:scale-110", colorClass)}>
          <item.icon size={16} />
        </div>
        <div className="font-bold text-sm text-white">{item.label}</div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">{item.desc}</div>
      </div>
    ))}
  </div>
);

const AnimatedParticles = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted || isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <Particle key={i} />
      ))}
    </div>
  );
};

const Particle = () => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomScale = Math.random() * 0.5 + 0.5;
  const randomDuration = Math.random() * 3 + 2;
  const randomDelay = Math.random() * 2;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/20 rounded-full"
      style={{ left: `${randomX}%`, top: `${randomY}%` }}
      initial={{ scale: randomScale, opacity: 0 }}
      animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
      transition={{ duration: randomDuration, repeat: Infinity, delay: randomDelay }}
    />
  );
};

// --- Main Page Component ---

export default function DownloadPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-[200svh] md:min-h-[250vh] text-white selection:bg-white/20">

      <AnimatedParticles />

      {/* HERO SECTION */}
      <div className="sticky top-0 h-screen py-0 flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-4 will-change-transform"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/80">
            <Download size={16} className="animate-bounce" />
            <span className="text-sm font-bold tracking-widest">LATEST BUILD: v2.2.2026</span>
          </div>

          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent">
            DEPLOY
            <br />
            THE CORE
          </h1>
        </motion.div>
      </div>

      {/* SCROLL CONTENT */}
      <div className="relative z-20 mt-[30vh] pb-32 px-4 md:px-8">

        {/* PLATFORM SELECTION */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32">

          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <CardSpotlight>
              <div className="relative h-full bg-black/40 backdrop-blur-xl p-8 flex flex-col md:min-h-[600px]">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <Smartphone size={120} className="transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                    <Smartphone size={32} className="text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Android</h2>
                  <p className="text-gray-400">The complete mobile high-fidelity experience.</p>
                </div>

                <SpecGrid
                  colorClass="bg-green-500/10 text-green-400"
                  features={[
                    { icon: Sparkles, label: "Spatial Audio", desc: "Dolby / DTS:X" },
                    { icon: Music, label: "Lossless", desc: "FLAC & WAV" },
                    { icon: Layers, label: "Visuals", desc: "Lyrics + Canvas" },
                    { icon: CheckCircle2, label: "Playback", desc: "Background Mode" }
                  ]}
                />

                <div className="space-y-3">
                  <a
                    href="https://github.com/MrHyperIon101/voxtrona/releases/download/Official-R/VoxtronaMusic-full-arm64-v2.2.2026-release.apk"
                    className="group/btn relative w-full p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-white">Download Official</span>
                      <span className="text-[10px] text-green-400 tracking-wider font-mono">v2.2.2026 • STABLE</span>
                    </div>
                    <ArrowRight size={20} className="text-white/50 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/MrHyperIon101/voxtrona/releases/download/Rev3/app-full-arm64-v8a-release.apk"
                    className="group/btn relative w-full p-4 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-all flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-white/80">Get Beta</span>
                      <span className="text-[10px] text-gray-500 tracking-wider font-mono">DAILY BUILD</span>
                    </div>
                    <ArrowRight size={20} className="text-white/30 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Windows Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <CardSpotlight>
              <div className="relative h-full bg-black/40 backdrop-blur-xl p-8 flex flex-col md:min-h-[600px]">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <Monitor size={120} className="transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                    <Monitor size={32} className="text-blue-400" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-3xl font-bold">Windows</h2>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">DEV</span>
                  </div>
                  <p className="text-gray-400">Desktop power unleashed with ASIO support.</p>
                </div>

                <SpecGrid
                  colorClass="bg-blue-500/10 text-blue-400"
                  features={[
                    { icon: AlertCircle, label: "Audio Engine", desc: "Advanced EQ" },
                    { icon: AlertCircle, label: "Drivers", desc: "ASIO Support" },
                    { icon: AlertCircle, label: "Native", desc: "Win 10/11" },
                    { icon: AlertCircle, label: "Bitrate", desc: "Hi-Res Ready" },
                  ]}
                />

                <div className="space-y-3">
                  <button disabled className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-white/30 cursor-not-allowed flex items-center justify-between">
                    <div className="flex flex-col text-left">
                      <span className="font-bold">Official Release</span>
                      <span className="text-[10px] tracking-wider font-mono">COMING SOON</span>
                    </div>
                  </button>
                  <Link
                    href="/beta?platform=windows"
                    className="group/btn relative w-full p-4 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-all flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-white/80">Join Beta</span>
                      <span className="text-[10px] text-blue-400 tracking-wider font-mono">EARLY ACCESS</span>
                    </div>
                    <ArrowRight size={20} className="text-white/30 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* TV Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <CardSpotlight>
              <div className="relative h-full bg-black/40 backdrop-blur-xl p-8 flex flex-col md:min-h-[600px]">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <Tv size={120} className="transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.1)]">
                    <Tv size={32} className="text-rose-400" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-3xl font-bold">Smart TV</h2>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">PLAN</span>
                  </div>
                  <p className="text-gray-400">Cinematic audio for the big screen.</p>
                </div>

                <SpecGrid
                  colorClass="bg-rose-500/10 text-rose-400"
                  features={[
                    { icon: AlertCircle, label: "Interface", desc: "TV Native" },
                    { icon: AlertCircle, label: "Passthrough", desc: "Dolby Atmos" },
                    { icon: AlertCircle, label: "Control", desc: "Remote API" },
                    { icon: AlertCircle, label: "Engine", desc: "Lossless" },
                  ]}
                />

                <div className="space-y-3">
                  <button disabled className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-white/30 cursor-not-allowed flex items-center justify-between">
                    <div className="flex flex-col text-left">
                      <span className="font-bold">Official Release</span>
                      <span className="text-[10px] tracking-wider font-mono">TBA</span>
                    </div>
                  </button>
                  <Link
                    href="/beta?platform=smarttv"
                    className="group/btn relative w-full p-4 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-all flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-white/80">Join Waitlist</span>
                      <span className="text-[10px] text-rose-400 tracking-wider font-mono">NOTIFY ME</span>
                    </div>
                    <ArrowRight size={20} className="text-white/30 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

        </div>

        {/* Requirements & Installation - Cleaned up for mobile */}
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Terminal className="text-purple-400" />
              System Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Processor", val: "Snapdragon 600+ / i3", icon: Cpu, color: "blue" },
                { label: "RAM", val: "2GB (Android) / 4GB (PC)", icon: Zap, color: "green" },
                { label: "Storage", val: "100MB Free Space", icon: HardDrive, color: "purple" },
                { label: "OS", val: "Android 8.0+ / Win 10", icon: Shield, color: "red" },
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                  <div className={`p-3 rounded-xl bg-${req.color}-500/10`}>
                    <req.icon size={20} className={`text-${req.color}-400`} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">{req.label}</div>
                    <div className="font-medium text-white">{req.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Github, label: "Source", href: "#" },
              { icon: FileText, label: "Changelog", href: "/changelog" },
              { icon: MessageCircle, label: "Community", href: "/community" },
              { icon: Shield, label: "Privacy", href: "/features/privacy" }
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center flex flex-col items-center gap-2"
              >
                <link.icon size={24} className="text-white/70" />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
