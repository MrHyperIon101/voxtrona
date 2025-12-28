"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioWaveform } from "lucide-react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Store timer ID in ref to ensure it's accessible in cleanup
    const timerRef = { current: null as NodeJS.Timeout | null };

    // Play audio on mount with fade in
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch(e => console.log("Audio play failed (autoplay policy):", e));
      
      // Fade in (faster)
      const fadeIn = setInterval(() => {
        if (audioRef.current && audioRef.current.volume < 0.5) {
          audioRef.current.volume = Math.min(0.5, audioRef.current.volume + 0.1);
        } else {
          clearInterval(fadeIn);
        }
      }, 100);
    }

    // Simulate loading progress (Faster for LCP < 2.5s)
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          
          // Fade out audio quickly before unmounting
          const fadeOut = setInterval(() => {
            if (audioRef.current && audioRef.current.volume > 0) {
              audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1);
            } else {
              clearInterval(fadeOut);
              setIsLoading(false);
              document.body.style.overflow = "auto";
              window.scrollTo(0, 0);
            }
          }, 50);
          
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                scale: 1.2, 
                filter: "blur(20px)",
                transition: { duration: 0.8, ease: "easeInOut" } 
            }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Cheap Static Gradient for Mobile (No Animation/Blur cost) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15)_0%,transparent_70%)] md:hidden" />

            {/* Heavy Animated Glows - Desktop Only */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/40 rounded-full blur-[150px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden md:block absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"
            />

            {/* Main Content Container - Using responsive sizing instead of scale to fix layout issues */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-16 origin-center">
                
                {/* Dolby-Style 2-Phase Spatial Transition */}
                <div className="relative w-[220px] h-[220px] md:w-96 md:h-96 flex items-center justify-center perspective-[1000px] transform-style-3d">
                  
                  {/* Central Head/Listener (Persistent) */}
                  <motion.div 
                    className="relative z-20 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center"
                    animate={{ scale: [0.8, 1], opacity: [0, 1] }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                     {/* Circular Progress Indicator */}
                     <svg className="absolute inset-0 w-full h-full -rotate-90 z-20" viewBox="0 0 128 128">
                       {/* Track */}
                       <circle 
                         cx="64" cy="64" r="60" 
                         fill="none" 
                         stroke="rgba(255,255,255,0.1)" 
                         strokeWidth="4" 
                       />
                       {/* Progress */}
                       <motion.circle 
                         cx="64" cy="64" r="60" 
                         fill="none" 
                         stroke="url(#progress-gradient)" 
                         strokeWidth="4"
                         strokeLinecap="round"
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: progress / 100 }}
                         transition={{ duration: 0.1, ease: "linear" }}
                       />
                       <defs>
                         <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                           <stop offset="0%" stopColor="#3b82f6" />
                           <stop offset="50%" stopColor="#a855f7" />
                           <stop offset="100%" stopColor="#3b82f6" />
                         </linearGradient>
                       </defs>
                     </svg>

                     {/* Head Model Proxy (Logo) */}
                     <div className="relative z-10 p-4 md:p-5 rounded-full bg-linear-to-b from-gray-800 to-black border border-white/10 md:shadow-[0_0_30px_rgba(0,0,0,0.8)] shadow-none">
                       <img src="/vox.svg" alt="Voxtrona Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-90" />
                     </div>
                     {/* Inner Glow - Simpler on mobile */}
                     <div className="absolute inset-0 rounded-full bg-white/5 md:blur-xl blur-md" />
                  </motion.div>

                  {/* PHASE 1: Speakers Projecting Sound (Persistent) */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center transform-style-3d [--radius:100px] md:[--radius:160px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                     {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                       <div 
                         key={`speaker-${i}`}
                         className="absolute top-1/2 left-1/2 w-48 h-1" // Long narrow container for waves
                         style={{ 
                           transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(var(--radius))` // Position radially using CSS var
                         }}
                       >
                          {/* Speaker Emitter Dot */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                          
                          {/* Sound Waves Moving Towards Center */}
                          {[1, 2, 3].map((wave, j) => (
                             <motion.div
                               key={`wave-${i}-${j}`}
                               className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-12 border-l-2 border-white/30 rounded-l-full"
                               initial={{ x: 0, opacity: 0, scale: 0.5 }}
                               animate={{ x: -120, opacity: [0, 1, 0], scale: 1.5 }} // Move inward
                               transition={{ 
                                 duration: 2, 
                                 repeat: Infinity, 
                                 ease: "linear",
                                 delay: j * 0.4 + (i * 0.1) 
                               }}
                             />
                          ))}
                       </div>
                     ))}
                  </motion.div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm font-medium text-gray-400 font-mono"
                  >
                    LOADING AUDIO ENGINE <span className="text-purple-400 ml-2">{progress}%</span>
                  </motion.div>
                </div>

                {/* Background Audio */}
                <audio ref={audioRef} src="/audio/startup.mp3" />

            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
