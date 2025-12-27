"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioWaveform, Zap, Globe, Headphones, Disc } from "lucide-react";

const words = [
  "INITIALIZING SPATIAL ENGINE",
  "MAPPING 7.1.4 CHANNELS",
  "CALIBRATING HRTF PROFILE",
  "SYNCHRONIZING AUDIO OBJECTS",
  "ENTERING VOXTRONA REALITY"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const totalDuration = 2500;
    const intervalTime = totalDuration / 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    const wordTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 500);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }, 3000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(wordTimer);
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                scale: 2, 
                filter: "blur(20px)",
                transition: { duration: 0.8, ease: "easeInOut" } 
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black perspective-[1000px]"
        >
            {/* Deep Space Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
            
            {/* Floating Audio Particles (Simulating Audio Objects) */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                        y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.3
                    }}
                    className="absolute w-2 h-2 rounded-full bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.8)] filter blur-[1px]"
                />
            ))}

            <div className="relative z-10 flex flex-col items-center justify-center">
                
                {/* 3D Spatial Core Visualization */}
                <div className="relative w-64 h-64 flex items-center justify-center mb-16 perspective-[1000px] transform-style-3d">
                    
                    {/* Inner Core (Listener) */}
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-20 w-16 h-16 rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.8)] flex items-center justify-center"
                    >
                         <Headphones size={24} className="text-black fill-black" />
                    </motion.div>

                    {/* Ring 1 - Fast Rotation */}
                    <motion.div 
                        animate={{ rotateX: 60, rotateZ: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute w-32 h-32 rounded-full border-2 border-blue-500/30 border-t-white/80 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    />

                    {/* Ring 2 - Reverse Rotation */}
                    <motion.div 
                        animate={{ rotateY: 60, rotateZ: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute w-48 h-48 rounded-full border border-purple-500/30 border-b-purple-400/80 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    />

                    {/* Ring 3 - Slow Orbital */}
                    <motion.div 
                        animate={{ rotateX: -45, rotateY: 45, rotateZ: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute w-64 h-64 rounded-full border border-white/5 border-l-white/40"
                    />
                    
                    {/* Expanding Wave Pulse */}
                     <motion.div 
                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border border-white/20"
                    />
                </div>

                {/* Text Scrambler */}
                <div className="h-8 mb-6 overflow-hidden flex flex-col items-center justify-center w-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                            className="text-sm md:text-base font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-white to-purple-400 tracking-[0.3em] font-mono"
                        >
                            {words[index]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Liquid Loading Bar */}
                <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                        className="absolute inset-y-0 left-0 bg-linear-to-r from-blue-500 via-white to-purple-500"
                        style={{ width: `${progress}%` }}
                    />
                    <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent w-full opacity-50"
                    />
                </div>
                
                <div className="mt-2 font-mono text-xs text-white/30 flex justify-between w-64">
                    <span>CH_L: ACTIVE</span>
                    <span>{progress}%</span>
                    <span>CH_R: ACTIVE</span>
                </div>

            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
