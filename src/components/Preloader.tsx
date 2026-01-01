"use client";

// Preloader v2 - Interactive
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [step, setStep] = useState<"prompt" | "ready" | "clawing" | "hidden">("prompt");

  useEffect(() => {
    console.log("Preloader v2 mounted");
    if (step !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [step]);

  const handleYesClick = () => {
    setStep("ready");
    // Wait for "Get Ready" text to show, then trigger claw
    setTimeout(() => {
      setStep("clawing");
      // Allow time for claw animation and strip reveal before unmounting
      setTimeout(() => {
        setStep("hidden");
      }, 1500);
    }, 2000);
  };

  if (step === "hidden") return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto">
      {/* Background Strips - They cover the screen until 'clawing' happens */}
      <div className="absolute inset-0 flex pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-black border-r border-neutral-900/20 last:border-r-0"
            initial={{ y: 0 }}
            animate={
              step === "clawing"
                ? {
                    y: i % 2 === 0 ? "-100%" : "100%",
                    opacity: 0,
                  }
                : { y: 0 }
            }
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: step === "clawing" ? 0.2 + i * 0.05 : 0,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4">
        <AnimatePresence mode="wait">
          {step === "prompt" && (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Are you ready to experience <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  music like never before?
                </span>
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
                className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                ENTER EXPERIENCE
              </motion.button>
            </motion.div>
          )}

          {step === "ready" && (
            <motion.div
              key="ready"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-7xl font-black text-white tracking-widest uppercase italic">
                Then Get Ready
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Claw Animation Overlay */}
      <AnimatePresence>
        {step === "clawing" && (
          <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full absolute inset-0 opacity-80 mix-blend-overlay"
              preserveAspectRatio="none"
            >
              {/* Scratch 1 */}
              <motion.path
                d="M -10,-10 L 110,110"
                stroke="white"
                strokeWidth="2"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {/* Scratch 2 */}
              <motion.path
                d="M 110,-10 L -10,110"
                stroke="white"
                strokeWidth="2"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              />
            </svg>
            
            {/* The "Claw" Marks - More aggressive visual */}
            <svg
              viewBox="0 0 500 500"
              className="w-[150vmax] h-[150vmax] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12"
            >
               <defs>
                <linearGradient id="clawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff0055" />
                  <stop offset="100%" stopColor="#5500ff" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
              </defs>
              
              {/* Claw 1 */}
              <motion.path
                d="M 100,50 Q 250,250 400,450"
                stroke="url(#clawGradient)"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
              {/* Claw 2 */}
              <motion.path
                d="M 150,20 Q 300,220 450,420"
                stroke="url(#clawGradient)"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.4, delay: 0.05, ease: "circOut" }}
              />
              {/* Claw 3 */}
              <motion.path
                d="M 200,0 Q 350,200 500,400"
                stroke="url(#clawGradient)"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.4, delay: 0.1, ease: "circOut" }}
              />
            </svg>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
