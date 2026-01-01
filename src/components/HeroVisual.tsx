"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Disc, Globe, Zap, Cpu, Wifi, Radio } from "lucide-react";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 40 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <div className="perspective-distant w-full flex justify-center py-10" style={{ transformStyle: "preserve-3d" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[500px] aspect-square rounded-[3rem] bg-linear-to-br from-gray-900/40 to-black/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group"
      >
         {/* Dynamic Shine Effect */}
         <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50 mix-blend-overlay"
            style={{
                background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.3) 0%, transparent 60%)`
            }}
         />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full mix-blend-screen" />

        {/* Content Container - Floating in 3D */}
        <div style={{ transform: "translateZ(40px)" }} className="absolute inset-0 p-8 flex flex-col justify-between">
            
            {/* Header HUD */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-white/60 font-mono">System Active</span>
                    </div>
                    <span className="text-sm font-bold text-white/80">CORE_ENGINE_V2</span>
                </div>
                <div className="flex gap-2">
                    <Cpu size={16} className="text-white/40" />
                    <Wifi size={16} className="text-white/40" />
                </div>
            </div>

            {/* Central Holographic Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex items-center justify-center">
                 {/* Rotating Rings */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-56 h-56 rounded-full border border-white/5 border-dashed"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-40 h-40 rounded-full border border-blue-500/20 border-t-blue-400"
                />
                
                {/* Floating Waveform Sphere */}
                <div className="relative w-24 h-24 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    <Activity size={32} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                     <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border border-white/30"
                     />
                </div>
            </div>

            {/* Footer Stats - Parallax Depth */}
            <div style={{ transform: "translateZ(80px)" }} className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                    <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Bitrate</div>
                    <div className="text-2xl font-mono font-bold text-white flex items-end gap-1">
                        24<span className="text-xs text-blue-400 mb-1">bit</span>
                        <span className="text-xs text-gray-500 mb-1">/ 192kHz</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-50"
                        />
                    </div>
                 </div>

                 <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                    <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Latency</div>
                    <div className="text-2xl font-mono font-bold text-white flex items-end gap-1">
                        &lt;1<span className="text-xs text-purple-400 mb-1">ms</span>
                    </div>
                     <div className="flex gap-0.5 mt-3">
                        {[...Array(8)].map((_, i) => (
                             <motion.div 
                                key={i}
                                animate={{ height: [4, 12, 4] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                className="w-1 bg-purple-500/50 rounded-full"
                                style={{ height: 4 }}
                             />
                        ))}
                     </div>
                 </div>
            </div>
        </div>

      </motion.div>
    </div>
  );
}
