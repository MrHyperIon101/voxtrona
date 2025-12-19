"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Download, Smartphone, Monitor, Shield, Terminal, Cpu, HardDrive, Zap,
  CheckCircle2, AlertCircle, ExternalLink, Star, Users,
  TrendingUp, Package, FileText, Github, MessageCircle
} from "lucide-react";

export default function DownloadPage() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const cardsY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[200svh] md:min-h-[250vh]">

      {/* Animated Background Particles - Desktop Only */}
      {mounted && (
        <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomScale = Math.random() * 0.5 + 0.5;
            const randomDuration = Math.random() * 3 + 2;
            const randomDelay = Math.random() * 2;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                }}
                initial={{ scale: randomScale, opacity: 0 }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay
                }}
              />
            );
          })}
        </div>
      )}

      {/* HERO SECTION */}
      <div className="sticky top-0 h-screen py-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          style={{ opacity: heroOpacity as any, scale: heroScale as any }}
          className="relative z-10 text-center px-4 will-change-transform"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Download size={16} className="animate-bounce" />
            <span className="text-sm font-bold tracking-widest">LATEST BUILD: v2.1.1020</span>
          </div>

          <h1 className="text-[15vw] md:text-[10vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-transparent mix-blend-overlay">
            DEPLOY
          </h1>
          <h1 className="text-[15vw] md:text-[10vw] leading-[0.8] font-black tracking-tighter text-white/10">
            THE CORE
          </h1>
        </motion.div>
      </div>

      {/* SCROLL CONTENT */}
      <div className="relative z-20 mt-[50vh] pb-32 px-4">

        {/* PLATFORM SELECTION */}
        <motion.div
          style={{ y: cardsY as any, opacity: cardsOpacity as any }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-32 md:mb-64 will-change-transform"
        >
          {/* Android Card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-[2px] rounded-3xl md:rounded-[3rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#22c55e_360deg)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full bg-black/80 md:backdrop-blur-xl rounded-3xl md:rounded-[2.9rem] p-6 md:p-12 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-green-500/10 blur-[60px] md:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-green-500/20 transition-colors duration-500" />

              <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 rotate-12 group-hover:rotate-0">
                <Smartphone className="w-32 h-32 md:w-[240px] md:h-[240px]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Smartphone size={32} className="text-green-400" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                    RECOMMENDED
                  </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">Android</h2>
                <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12">
                  The complete mobile experience. <br />
                  Material You support included.
                </p>

                {/* Features List */}
                <div className="mb-8 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span>Full offline support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span>Background playback</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span>Android 8.0+</span>
                  </div>
                </div>

                <button disabled className="group/btn relative w-full py-5 md:py-6 rounded-2xl bg-gray-800 text-gray-400 font-bold text-lg md:text-xl overflow-hidden cursor-not-allowed">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Download size={24} />
                    Coming Soon
                  </span>
                </button>

                <div className="mt-4 text-center text-sm text-gray-500 font-mono">
                  v2.1.1020 • 45MB
                </div>
              </div>
            </div>
          </motion.div>

          {/* Windows Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-[2px] rounded-3xl md:rounded-[3rem] overflow-hidden opacity-60"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-100 transition-opacity duration-500" />

            <div className="relative h-full bg-black/80 md:backdrop-blur-xl rounded-3xl md:rounded-[2.9rem] p-6 md:p-12 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 transition-colors duration-500" />

              <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-5 rotate-12">
                <Monitor className="w-32 h-32 md:w-[240px] md:h-[240px]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Monitor size={32} className="text-blue-400" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold border border-yellow-500/30">
                    IN DEVELOPMENT
                  </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">Windows</h2>
                <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12">
                  Desktop power unleashed. <br />
                  High-res audio support.
                </p>

                {/* Features List */}
                <div className="mb-8 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <AlertCircle size={16} className="text-yellow-400" />
                    <span>Advanced audio controls</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <AlertCircle size={16} className="text-yellow-400" />
                    <span>ASIO driver support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <AlertCircle size={16} className="text-yellow-400" />
                    <span>Windows 10+</span>
                  </div>
                </div>

                <button disabled className="group/btn relative w-full py-5 md:py-6 rounded-2xl bg-gray-800 text-gray-400 font-bold text-lg md:text-xl overflow-hidden cursor-not-allowed">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Package size={24} />
                    Coming Q2 2025
                  </span>
                </button>

                <div className="mt-4 text-center text-sm text-gray-500 font-mono">
                  Pre-Alpha Build
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* QUICK LINKS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-32 md:mb-64"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Github, label: "Source Code", href: "#", color: "purple" },
              { icon: FileText, label: "Changelog", href: "/changelog", color: "blue" },
              { icon: MessageCircle, label: "Community", href: "/community", color: "green" },
              { icon: Shield, label: "Privacy", href: "/features/privacy", color: "red" }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="group relative p-[1px] rounded-2xl overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-${link.color}-500/30 transition-all text-center`}>
                  <link.icon className={`mx-auto mb-3 text-${link.color}-400`} size={28} />
                  <div className="text-sm font-semibold">{link.label}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* SYSTEM REQUIREMENTS - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-32 md:mb-64"
        >
          <div className="rounded-3xl border border-white/10 bg-black/40 md:backdrop-blur-md overflow-hidden">
            <div className="p-6 md:p-8 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
              <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Terminal size={28} className="text-purple-400" />
                System Requirements
              </h3>
              <p className="text-sm text-gray-400 mt-2">Minimum specifications for optimal performance</p>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Cpu size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold mb-1">Processor</div>
                    <div className="text-sm text-gray-400">Snapdragon 600+ / Intel Core i3</div>
                    <div className="text-xs text-gray-500 mt-1">64-bit recommended</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                    <Zap size={24} className="text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold mb-1">RAM</div>
                    <div className="text-sm text-gray-400">2GB (Android) / 4GB (Windows)</div>
                    <div className="text-xs text-gray-500 mt-1">4GB+ for better multitasking</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <HardDrive size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold mb-1">Storage</div>
                    <div className="text-sm text-gray-400">100MB Free Space</div>
                    <div className="text-xs text-gray-500 mt-1">Plus space for music library</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <Shield size={24} className="text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold mb-1">Operating System</div>
                    <div className="text-sm text-gray-400">Android 8.0+ / Windows 10+</div>
                    <div className="text-xs text-gray-500 mt-1">Latest versions recommended</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* INSTALLATION GUIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Installation Guide</h3>
          <div className="space-y-4">
            {[
              { step: "1", title: "Download the APK", desc: "Click the download button above to get the latest version" },
              { step: "2", title: "Enable Unknown Sources", desc: "Go to Settings → Security → Enable 'Install from Unknown Sources'" },
              { step: "3", title: "Install the App", desc: "Open the downloaded APK file and follow the prompts" },
              { step: "4", title: "Grant Permissions", desc: "Allow storage and audio permissions when prompted" },
              { step: "5", title: "Enjoy!", desc: "Launch Voxtrona and start experiencing premium audio" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center font-bold text-xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg mb-1">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
