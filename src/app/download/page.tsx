"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Smartphone, Monitor, Shield, Terminal, Cpu, HardDrive, Zap } from "lucide-react";

export default function DownloadPage() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

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

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const cardsY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[200svh] md:min-h-[250vh]">
      
      {/* Background Ambience (removed page-local fixed layers to avoid scroll interference on mobile) */}

      {/* HERO SECTION - Vertically centered on all viewports */}
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
          {/* Android Card */}
          <div className="group relative p-[2px] rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#22c55e_360deg)] md:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full bg-black/80 md:backdrop-blur-xl rounded-[2.9rem] p-8 md:p-12 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 blur-[40px] md:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-green-500/20 transition-colors duration-500" />
              
              <div className="absolute top-12 right-12 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 rotate-12 group-hover:rotate-0">
                <Smartphone className="w-[150px] h-[150px] md:w-[240px] md:h-[240px]" />
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Smartphone size={40} className="text-green-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Android</h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12">
                  The complete mobile experience. <br />
                  Material You support included.
                </p>
                
                <a href="https://drive.google.com/file/d/1iaP445F5YzdtCoB3lc_ZvLryJ4r_T72G/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block group/btn relative w-full py-6 rounded-2xl bg-white text-black font-bold text-xl overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_80px_rgba(34,197,94,0.6)] transition-shadow duration-500">
                  <div className="absolute inset-0 bg-green-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-white transition-colors duration-300">
                    <Download size={24} className="group-hover/btn:animate-bounce" />
                    Download APK
                  </span>
                </a>
                <div className="mt-4 text-center text-sm text-gray-500 font-mono">
                  v2.1.1020
                </div>
              </div>
            </div>
          </div>

          {/* Windows Card */}
          <div className="group relative p-[2px] rounded-[3rem] overflow-hidden opacity-50 grayscale">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full bg-black/80 md:backdrop-blur-xl rounded-[2.9rem] p-8 md:p-12 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 blur-[40px] md:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 transition-colors duration-500" />
              
              <div className="absolute top-12 right-12 opacity-5 rotate-12">
                <Monitor className="w-[150px] h-[150px] md:w-[240px] md:h-[240px]" />
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8">
                  <Monitor size={40} className="text-blue-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Windows</h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12">
                  Desktop power unleashed. <br />
                  High-res audio support.
                </p>
                
                <button disabled className="group/btn relative w-full py-6 rounded-2xl bg-gray-800 text-gray-400 font-bold text-xl overflow-hidden cursor-not-allowed">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Coming Soon
                  </span>
                </button>
                <div className="mt-4 text-center text-sm text-gray-500 font-mono">
                  In Development
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* SYSTEM REQUIREMENTS */}
        <div className="max-w-4xl mx-auto mb-32 md:mb-64">
          <div className="rounded-3xl border border-white/10 bg-black/40 md:backdrop-blur-md overflow-hidden">
            <div className="p-6 md:p-8 border-b border-white/10 bg-white/5">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Terminal size={24} className="text-purple-400" />
                System Requirements
              </h3>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-400">
                  <Cpu size={24} />
                  <div>
                    <div className="text-white font-bold">Processor</div>
                    <div className="text-sm">Snapdragon 600+ / Intel Core i3</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <Zap size={24} />
                  <div>
                    <div className="text-white font-bold">RAM</div>
                    <div className="text-sm">2GB (Android) / 4GB (Windows)</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-400">
                  <HardDrive size={24} />
                  <div>
                    <div className="text-white font-bold">Storage</div>
                    <div className="text-sm">100MB Free Space</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <Shield size={24} />
                  <div>
                    <div className="text-white font-bold">OS</div>
                    <div className="text-sm">Android 8.0+ / Windows 10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
