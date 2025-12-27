"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { 
  Music, 
  Sliders, 
  Mic2, 
  Library, 
  Compass, 
  Palette, 
  Settings, 
  Globe, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "CORE PLAYBACK",
    desc: "The heart of your listening experience. Stream directly from Voxtron with high-fidelity audio options.",
    icon: Music,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
    href: "/features/core-playback",
    details: [
      "Voxtrona Streaming Integration",
      "High-Quality Audio (up to FLAC)",
      "Background Playback & PiP",
      "Smart Crossfade & Gapless",
      "Speed & Pitch Control",
      "Skip Silence & Volume Normalization"
    ]
  },
  {
    title: "AUDIO FX",
    desc: "Sculpt your sound with professional-grade tools. From bass boost to spatial audio, hear every detail.",
    icon: Sliders,
    color: "text-amber-400",
    gradient: "from-amber-500/20 to-transparent",
    href: "/features/audio-fx",
    details: [
      "Multi-band Equalizer & Presets",
      "Bass Boost & Virtualizer",
      "Native Spatial Audio (Android 13+)",
      "Head Tracking Support",
      "Dirac Live & Dolby Atmos Profiles",
      "Face-Scanning HRTF Personalization"
    ]
  },
  {
    title: "LYRICS",
    desc: "Sing along with perfectly synced lyrics. Immersive, translated, and beautiful.",
    icon: Mic2,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-transparent",
    href: "/features/lyrics",
    details: [
      "Real-time Synced Lyrics",
      "Multi-Provider Support (LRCLIB, etc)",
      "AI Lyric Translation (Gemini/OpenAI)",
      "Fullscreen Blur Mode",
      "Spotify Canvas Integration"
    ]
  },
  {
    title: "LIBRARY",
    desc: "Your entire collection, organized. Local tracks, playlists, and synced content in one place.",
    icon: Library,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-transparent",
    href: "/features/library",
    details: [
      "Local & Offline Playlist Management",
      "YouTube & Spotify Playlist Sync",
      "Offline Caching & Downloads",
      "Podcast Support"
    ]
  },
  {
    title: "DISCOVERY",
    desc: "Find your next obsession. Personalized feeds, charts, and mood-based curation.",
    icon: Compass,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
    href: "/features/discovery",
    details: [
      "Personalized Home Feed",
      "Mood & Genre Playlists",
      "Global & Regional Charts",
      "New Releases & Quick Picks"
    ]
  },
  {
    title: "INTERFACE",
    desc: "A stunning Liquid Glass UI that adapts to your music. Premium, fluid, and customizable.",
    icon: Palette,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-transparent",
    href: "/features/interface",
    details: [
      "Liquid Glass Design System",
      "Dynamic Album Art Gradients",
      "Pure Black Dark Theme (OLED)",
      "Translucent Blur Effects",
      "Swipe-Gesture Mini Player"
    ]
  },
  {
    title: "SETTINGS",
    desc: "Make it yours. Deep customization for power users, from privacy to playback.",
    icon: Settings,
    color: "text-slate-400",
    gradient: "from-slate-500/20 to-transparent",
    href: "/features/settings",
    details: [
      "Account Integration (Voxtron/Spotify)",
      "SponsorBlock & Content Filtering",
      "Proxy Support (HTTP/SOCKS)",
      "Auto-Update (GitHub/F-Droid)",
      "Backup & Restore"
    ]
  },
  {
    title: "GLOBAL",
    desc: "Music speaks every language. Localized for the world with translation support.",
    icon: Globe,
    color: "text-rose-400",
    gradient: "from-rose-500/20 to-transparent",
    href: "/features/global",
    details: [
      "Multi-Language Support (26+)",
      "Regional Charts Data",
      "Configurable Translation Target"
    ]
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
            <span className="text-sm font-bold tracking-[0.2em] text-purple-200 uppercase">Feature Set</span>
          </div>
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white to-transparent mix-blend-overlay">
            BEYOND
          </h1>
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white/10">
            LIMITS
          </h1>
        </motion.div>
      </div>

      {/* SCROLL CONTENT */}
      <div className="relative z-20 mt-[50vh] pb-32 px-4">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-32">
          {features.map((feature, i) => (
            <Link
              key={i}
              href={feature.href}
              className="group relative block p-[2px] rounded-2xl md:rounded-[3rem] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-r ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              <div className="absolute inset-0 bg-linear-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full bg-black/80 backdrop-blur-xl rounded-2xl md:rounded-[2.9rem] p-6 md:p-12 overflow-hidden">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
                  
                  {/* Icon & Title Column */}
                  <div className="flex-1 space-y-6 md:space-y-8">
                     <div className={`w-fit p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 ${feature.color}`}>
                      <feature.icon size={isMobile ? 32 : 48} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4">{feature.title}</h2>
                      <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>

                     {/* Desktop Arrow Button - Restored */}
                    <div className="hidden md:block pt-4">
                      <div className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center overflow-hidden group/btn group-hover:border-white transition-colors duration-300">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        <ArrowRight size={32} className="relative z-10 -rotate-45 group-hover:rotate-0 group-hover:text-black transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="flex-1 w-full md:border-l border-white/10 md:pl-12 pt-6 md:pt-0">
                    <ul className="grid gap-3">
                      {feature.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item">
                          <div className={`shrink-0 p-2 rounded-lg bg-white/5 ${feature.color.replace('text-', 'bg-')}/10 border border-white/5`}>
                            <CheckCircle2 size={16} className={`${feature.color}`} />
                          </div>
                          <span className="text-sm md:text-base font-medium text-gray-300 group-hover/item:text-white transition-colors">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                     {/* Mobile Arrow Indicator */}
                    <div className="md:hidden mt-8 flex justify-end">
                      <ArrowRight size={24} className="text-white/40 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
