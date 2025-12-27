"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpenText, Shield, Cog, Music2, Download, Headphones,
  Radio, Smartphone, Laptop, Zap, Lock, Cloud, HardDrive,
  Settings, Volume2, Waves, Sparkles, Globe, Users,
  PlayCircle, Search, ChevronRight, Code, Terminal, Database,
  Sliders, Cpu, Gauge, FileAudio, Layers, Box, ArrowRight, Layout, Languages, Clock, Heart, Palette, Moon, Mic
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: BookOpenText,
    subsections: ["What is Voxtrona?", "Supported Platforms"]
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Download,
    subsections: ["Installation", "First Launch"]
  },
  {
    id: "core-playback",
    title: "Core Playback",
    icon: PlayCircle,
    subsections: ["Audio Quality", "Playback Controls", "Gapless & Crossfade"]
  },
  {
    id: "audio-enhancements",
    title: "Audio Enhancements",
    icon: Waves,
    subsections: ["Spatial Audio", "Equalizer & Effects", "Head Tracking"]
  },
  {
    id: "lyrics",
    title: "Lyrics",
    icon: Music2,
    subsections: ["Synced Lyrics", "AI Translation", "Spotify Canvas"]
  },
  {
    id: "library",
    title: "Library & Playlists",
    icon: Database,
    subsections: ["Library Management", "Offline Caching"]
  },
  {
    id: "discovery",
    title: "Home & Discovery",
    icon: Globe,
    subsections: ["Personalized Feed", "Charts & Trends"]
  },
  {
    id: "interface",
    title: "Interface",
    icon: Layout,
    subsections: ["Liquid Glass UI", "Theming & Customization"]
  },
  {
    id: "settings",
    title: "Settings & Accounts",
    icon: Settings,
    subsections: ["Integrations", "Privacy & Data"]
  },
  {
    id: "localization",
    title: "Localization",
    icon: Languages,
    subsections: ["Languages", "Regional Content"]
  }
];

const quickLinks = [
  { label: "Download App", icon: Download, href: "/download" },
  { label: "Report Bug", icon: Code, href: "/report-bug" },
  { label: "Community", icon: Users, href: "/community" },
  { label: "Support", icon: Shield, href: "/support" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Scroll spy - update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for fixed header

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results: any[] = [];
    const queryLower = query.toLowerCase();

    sections.forEach((section) => {
      // Search in section title
      if (section.title.toLowerCase().includes(queryLower)) {
        results.push({
          type: "section",
          title: section.title,
          href: `#${section.id}`,
          icon: section.icon,
        });
      }

      // Search in subsections
      section.subsections?.forEach((subsection) => {
        if (subsection.toLowerCase().includes(queryLower)) {
          results.push({
            type: "subsection",
            title: subsection,
            parent: section.title,
            href: `#${section.id}-${subsection.toLowerCase().replace(/\s+/g, "-")}`,
            icon: section.icon,
          });
        }
      });
    });

    setSearchResults(results);
    setShowResults(results.length > 0);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 mb-6">
            <BookOpenText size={16} />
            <span className="font-semibold tracking-wider uppercase text-xs">Documentation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200">
              Voxtrona Docs
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Everything you need to master the most advanced music player on the planet.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchResults.length > 0 && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              className="w-full py-4 px-14 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:bg-white/10 outline-none transition-all text-lg"
            />
            <kbd className="absolute right-5 top-1/2 -translate-y-1/2 px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg">
              Ctrl K
            </kbd>

            {/* Search Results Dropdown */}
            <AnimatePresence>
              {showResults && searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-full bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl z-50"
                >
                  <div className="p-2 max-h-96 overflow-y-auto">
                    {searchResults.map((result, idx) => (
                      <a
                        key={idx}
                        href={result.href}
                        onClick={() => {
                          setShowResults(false);
                          setActiveSection(result.href.split('#')[1].split('-')[0]);
                        }}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-500/20 transition-colors group"
                      >
                        <result.icon className="text-purple-400 flex-shrink-0" size={18} />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white truncate">{result.title}</div>
                          {result.parent && (
                            <div className="text-xs text-gray-400 truncate">{result.parent}</div>
                          )}
                        </div>
                        <ChevronRight className="text-gray-400 group-hover:text-purple-400 transition-colors" size={16} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {quickLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-purple-500/30 transition-all">
                <link.icon className="text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                <div className="font-bold text-sm">{link.label}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Main Documentation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <aside className="sticky top-24 self-start hidden lg:block h-[calc(100vh-8rem)] overflow-y-auto">
            <nav className="space-y-1">
              {sections.map((section) => (
                <div key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(section.id);
                      if (element) {
                        const offset = 100;
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                          top: elementPosition - offset,
                          behavior: "smooth"
                        });
                      }
                      setActiveSection(section.id);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      activeSection === section.id
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <section.icon size={18} />
                    {section.title}
                  </a>
                  {activeSection === section.id && section.subsections && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="ml-8 mt-1 space-y-1"
                    >
                      {section.subsections.map((sub, idx) => (
                        <a
                          key={idx}
                          href={`#${section.id}-${sub.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(`${section.id}-${sub.toLowerCase().replace(/\s+/g, "-")}`);
                            if (element) {
                              const offset = 100;
                              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                              window.scrollTo({
                                top: elementPosition - offset,
                                behavior: "smooth"
                              });
                            }
                          }}
                          className="block px-3 py-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="space-y-24">
            {/* Introduction */}
            <DocSection id="introduction" icon={BookOpenText} title="Introduction">
              <DocSubsection title="What is Voxtrona?">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Voxtrona is a cutting-edge YouTube Music client for Android, engineered for audiophiles who demand the best.
                  It combines the vast catalog of YouTube with a custom high-fidelity listening engine, offering features like
                  Native Spatial Audio, Synced Lyrics, and an immersive Liquid Glass interface that feels alive.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <FeatureCard icon={Smartphone} title="Native Android" description="Built with Kotlin & Jetpack Compose" />
                  <FeatureCard icon={Waves} title="Hi-Res Audio" description="Custom C++ Audio Engine" />
                  <FeatureCard icon={Lock} title="Privacy Core" description="Zero Telemetry & SponsorBlock" />
                </div>
              </DocSubsection>

              <DocSubsection title="Key Features" id="introduction-key-features">
                <div className="space-y-4">
                  <FeatureItem icon={Music2} title="YouTube Music Integration" description="Stream millions of songs directly from YouTube Music with account sync." />
                  <FeatureItem icon={Headphones} title="Native Spatial Audio" description="Immersive 3D audio via Android Spatializer API with Head Tracking support." />
                  <FeatureItem icon={FileAudio} title="Unified Library" description="Merge local tracks, YouTube playlists, and Spotify collections in one place." />
                  <FeatureItem icon={Palette} title="Liquid Glass Interface" description="Stunning OLED-optimized UI with dynamic blur and mesh gradients." />
                  <FeatureItem icon={Mic} title="Synced Lyrics & AI" description="Real-time lyrics from multiple sources with AI translation capabilities." />
                  <FeatureItem icon={Shield} title="Community Tools" description="Integrated SponsorBlock, ReturnYouTubeDislike, and background playback." />
                </div>
              </DocSubsection>

              <DocSubsection title="Supported Platforms" id="introduction-supported-platforms">
                <div className="grid md:grid-cols-3 gap-4">
                  <PlatformCard icon={Smartphone} title="Android" status="Beta Available" statusColor="green" />
                  <PlatformCard icon={Laptop} title="Windows" status="Coming Q2 2026" statusColor="yellow" />
                  <PlatformCard icon={Laptop} title="macOS" status="Coming Soon" statusColor="yellow" />
                </div>
              </DocSubsection>
            </DocSection>

            {/* Getting Started */}
            <DocSection id="getting-started" icon={Download} title="Getting Started">
              <DocSubsection title="Installation" id="getting-started-installation">
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Smartphone size={20} className="text-green-400" />
                      Beta Available
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Voxtrona is currently available for Android devices (Android 12+ recommended). 
                      Download the latest APK to get started.
                    </p>
                    <a href="https://github.com/MrHyperIon101/voxtrona/releases" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition-colors">
                      <Download size={18} />
                      Download Latest Beta
                    </a>
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="First Launch" id="getting-started-first-launch">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Upon first launch, Voxtrona will guide you through a quick setup process.
                </p>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Lock className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white mb-1">Permissions</div>
                      <div className="text-sm">Grant generic permissions for Notifications and File Access (for local library).</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Users className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white mb-1">Account Login</div>
                      <div className="text-sm">Log in with your Google account for YouTube Music or Spotify account for integration.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Headphones className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white mb-1">Face Scan (Optional)</div>
                      <div className="text-sm">For Spatial Audio users, set up your HRTF profile using the camera wizard.</div>
                    </div>
                  </div>
                </div>
              </DocSubsection>
            </DocSection>

            {/* Core Playback */}
            <DocSection id="core-playback" icon={PlayCircle} title="Core Playback">
              <DocSubsection title="Audio Quality" id="core-playback-audio-quality">
                 <p className="text-gray-300 leading-relaxed mb-4">
                  Voxtrona offers configurable audio quality settings to balance data usage and fidelity.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Low", detail: "96kbps", color: "bg-red-500/10 text-red-400 border-red-500/20" },
                    { label: "Medium", detail: "160kbps", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
                    { label: "High", detail: "320kbps", color: "bg-green-500/10 text-green-400 border-green-500/20" },
                    { label: "Ultra", detail: "FLAC", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" }
                  ].map((q, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${q.color} text-center`}>
                      <div className="font-bold text-lg">{q.detail}</div>
                      <div className="text-xs opacity-70 uppercase tracking-widest">{q.label}</div>
                    </div>
                  ))}
                </div>
              </DocSubsection>

              <DocSubsection title="Playback Controls" id="core-playback-playback-controls">
                <div className="space-y-4">
                   <FeatureItem icon={PlayCircle} title="Background Playback" description="Listen to music while using other apps or with the screen off." />
                   <FeatureItem icon={Box} title="Picture-in-Picture (PiP)" description="Watch music videos in a floating window while multitasking." />
                   <FeatureItem icon={Sliders} title="Speed & Pitch" description="Adjust playback tempo and pitch independently for learning or fun." />
                   <FeatureItem icon={Volume2} title="Normalize Volume" description="Automatically adjust volume to maintain consistent levels across tracks." />
                </div>
              </DocSubsection>
              
               <DocSubsection title="Gapless & Crossfade" id="core-playback-gapless-crossfade">
                 <div className="grid md:grid-cols-2 gap-4">
                    <FeatureCard icon={Layers} title="Gapless Playback" description="Seamless transitions between tracks in an album, perfect for live recordings." />
                    <FeatureCard icon={Waves} title="Smart Crossfade" description="Smoothly fade between tracks with configurable duration for a radio-like experience." />
                 </div>
              </DocSubsection>
            </DocSection>

            {/* Audio Enhancements */}
            <DocSection id="audio-enhancements" icon={Waves} title="Audio Enhancements">
              <DocSubsection title="Spatial Audio" id="audio-enhancements-spatial-audio">
                 <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Headphones className="text-indigo-400" size={20} />
                    Native Spatial Audio (Android 13+)
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Integration with Android's Spatializer API for system-level spatial audio processing.
                    Supports head tracking with compatible headphones (Galaxy Buds Pro, Pixel Buds Pro, etc.).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                     {[
                       { name: "Dirac Live", desc: "High bass & virtualizer" },
                       { name: "Dolby Atmos", desc: "Wide soundstage" },
                       { name: "DTS:X Ultra", desc: "Extreme impact" }
                     ].map((p, i) => (
                        <div key={i} className="bg-black/20 p-3 rounded-lg border border-white/5">
                           <div className="font-bold text-indigo-300 text-sm">{p.name}</div>
                           <div className="text-xs text-gray-500">{p.desc}</div>
                        </div>
                     ))}
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="Equalizer & Effects" id="audio-enhancements-equalizer-effects">
                 <div className="space-y-4">
                    <FeatureItem icon={Sliders} title="Multi-Band EQ" description="5-band equalizer with custom presets." />
                    <FeatureItem icon={Volume2} title="Bass Boost" description="Adjustable bass enhancement (0-1000 strength)." />
                    <FeatureItem icon={Waves} title="Virtualizer" description="Surround sound simulation (0-1000 strength)." />
                 </div>
              </DocSubsection>
            </DocSection>

            {/* Lyrics */}
             <DocSection id="lyrics" icon={Music2} title="Lyrics">
              <DocSubsection title="Synced Lyrics" id="lyrics-synced-lyrics">
                <p className="text-gray-300 mb-4">Real-time time-synced lyrics from multiple providers:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                   {["SimpMusic", "LRCLIB", "YouTube", "Spotify"].map(p => (
                      <span key={p} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">{p}</span>
                   ))}
                </div>
                <FeatureItem icon={Sparkles} title="AI Translation" description="Translate lyrics on-the-fly using Gemini or OpenAI APIs." />
              </DocSubsection>
              
               <DocSubsection title="Spotify Canvas" id="lyrics-spotify-canvas">
                   <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                      <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                         <FileAudio size={24} />
                      </div>
                      <div>
                         <h4 className="font-bold text-white">Animated Backgrounds</h4>
                         <p className="text-sm text-gray-400">
                            Display Spotify Canvas looping videos for supported tracks. Requires Spotify account integration.
                         </p>
                      </div>
                   </div>
              </DocSubsection>
            </DocSection>


            {/* Library & Playlists */}
            <DocSection id="library" icon={Database} title="Library & Playlists">
              <DocSubsection title="Library Management" id="library-library-management">
                <div className="grid md:grid-cols-2 gap-4">
                   <FeatureCard icon={HardDrive} title="Local Playlists" description="Create and manage offline playlists completely on-device." />
                   <FeatureCard icon={Cloud} title="YouTube Sync" description="Access and edit your YouTube Music online playlists." />
                   <FeatureCard icon={Clock} title="History" description="Recently played tracks and listening history." />
                   <FeatureCard icon={Heart} title="Liked Songs" description="Synced favorites collection from YouTube Music." />
                </div>
              </DocSubsection>

              <DocSubsection title="Offline Caching" id="library-offline-caching">
                 <p className="text-gray-300 mb-4">
                    Download songs for offline playback with smart cache management.
                 </p>
                 <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex justify-between text-sm mb-2">
                       <span className="text-gray-400">Cache Size</span>
                       <span className="text-purple-400 font-mono">100MB - Unlimited</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    </div>
                 </div>
              </DocSubsection>
            </DocSection>

            {/* Discovery */}
            <DocSection id="discovery" icon={Globe} title="Home & Discovery">
               <DocSubsection title="Personalized Feed" id="discovery-personalized-feed">
                   <FeatureItem icon={Sparkles} title="Quick Picks" description="Algorithmically generated recommendations based on your listening habits." />
                   <FeatureItem icon={Radio} title="Mood Mixes" description="Curated stations for Focus, Workout, Sleep, Party, and more." />
               </DocSubsection>
               <DocSubsection title="Charts & Trends" id="discovery-charts-trends">
                   <p className="text-gray-300">
                      Explore Top 100 global charts and viral hits from over available 60+ countries.
                   </p>
               </DocSubsection>
            </DocSection>

            {/* Interface */}
             <DocSection id="interface" icon={Layout} title="Interface">
               <DocSubsection title="Liquid Glass UI" id="interface-liquid-glass-ui">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                     <FeatureCard icon={Sparkles} title="Blur Effects" description="Real-time blur on player backgrounds and navigation bars." />
                     <FeatureCard icon={Palette} title="Mesh Gradients" description="Dynamic background gradients generated from album artwork." />
                  </div>
               </DocSubsection>
               <DocSubsection title="Theming" id="interface-theming">
                  <FeatureItem icon={Moon} title="OLED Dark Mode" description="True pitch-black theme (#000000) for AMOLED battery savings." />
                  <FeatureItem icon={Smartphone} title="Mini Player" description="Swipe gestures for quick control (Next/Prev/Dismiss)." />
               </DocSubsection>
            </DocSection>

            {/* Settings */}
             <DocSection id="settings" icon={Settings} title="Settings & Accounts">
               <DocSubsection title="Integrations" id="settings-integrations">
                  <div className="space-y-4">
                     <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                        <h4 className="font-bold text-red-400 mb-1">YouTube Music</h4>
                        <p className="text-sm text-gray-400">Full account login via cookies. Syncs library and recommendations.</p>
                     </div>
                     <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-1">Spotify</h4>
                        <p className="text-sm text-gray-400">Login for Lyrics, Canvas, and metadata access.</p>
                     </div>
                  </div>
               </DocSubsection>
               <DocSubsection title="Privacy & Data" id="settings-privacy-data">
                   <FeatureItem icon={Shield} title="SponsorBlock" description="Automatically skip non-music segments like intros, outros, and promotions." />
                   <FeatureItem icon={Lock} title="Proxy Support" description="Configure HTTP/SOCKS5 proxies for region bypassing." />
                   <FeatureItem icon={HardDrive} title="Backup" description="Export downloads and settings to preserve data across updates." />
               </DocSubsection>
            </DocSection>

             {/* Localization */}
            <DocSection id="localization" icon={Languages} title="Localization">
               <DocSubsection title="Global Support" id="localization-global-support">
                   <div className="flex flex-wrap gap-3">
                      {["English", "日本語", "한국어", "中文", "Español", "Français", "Deutsch", "Italino", "Русский", "Polski", "Português", "Türkçe", "Tiếng Việt", "Indonesian", "Ukrainian", "Arabic", "Hindi"].map(l => (
                         <span key={l} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm">{l}</span>
                      ))}
                      <span className="px-3 py-1 text-gray-500 italic text-sm">+ many more</span>
                   </div>
               </DocSubsection>
            </DocSection>

            {/* Troubleshooting */}
            <DocSection id="troubleshooting" icon={Terminal} title="Troubleshooting">
              <DocSubsection title="Common Issues" id="troubleshooting-common-issues">
                <div className="space-y-4">
                  <AccordionItem
                    title="How do I get started?"
                    content="Voxtrona is currently in development. Check the Download page for updates on when native apps will be available. In the meantime, explore our web interface and join our community."
                  />
                  <AccordionItem
                    title="Which platforms are supported?"
                    content="We're working on native apps for Android, Windows, and macOS. Stay tuned to our community channels for release updates."
                  />
                  <AccordionItem
                    title="Is Voxtrona open source?"
                    content="Parts of Voxtrona use open-source technologies. We're committed to transparency and may open-source more components in the future."
                  />
                  <AccordionItem
                    title="How can I contribute or provide feedback?"
                    content="Join our community channels, report bugs through the bug report page, or contact us directly through the support page. We welcome all feedback!"
                  />
                </div>
              </DocSubsection>

              <DocSubsection title="Performance Tips" id="troubleshooting-performance-tips">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <Zap className="text-yellow-400 mb-2" size={20} />
                    <h4 className="font-bold mb-2 text-sm">Web Performance</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Use a modern browser (Chrome, Firefox, Edge)</li>
                      <li>• Ensure stable internet connection</li>
                      <li>• Clear browser cache if experiencing issues</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <Gauge className="text-blue-400 mb-2" size={20} />
                    <h4 className="font-bold mb-2 text-sm">Best Experience</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Use quality headphones or speakers</li>
                      <li>• Enable hardware acceleration in browser</li>
                      <li>• Keep browser up to date</li>
                    </ul>
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="Support" id="troubleshooting-support">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Need more help? We're here for you.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <a href="/community" className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
                    <Users className="text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-bold mb-1">Community</h4>
                    <p className="text-xs text-gray-400">Join our Discord and Reddit</p>
                  </a>
                  <a href="/report-bug" className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-all group">
                    <Code className="text-red-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-bold mb-1">Report Bug</h4>
                    <p className="text-xs text-gray-400">Found an issue? Let us know</p>
                  </a>
                  <a href="/support" className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all group">
                    <Shield className="text-green-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-bold mb-1">Support</h4>
                    <p className="text-xs text-gray-400">Contact us directly</p>
                  </a>
                </div>
              </DocSubsection>
            </DocSection>
          </main>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
          <div>
            <div className="text-sm text-gray-400 mb-1">Ready to experience the future?</div>
            <div className="font-bold text-xl">Download Voxtrona Today</div>
          </div>
          <a href="/download" className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2">
            Download Now
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function DocSection({ id, icon: Icon, title, children }: any) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
          <Icon className="text-purple-400" size={24} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">{title}</h2>
      </div>
      <div className="space-y-12">
        {children}
      </div>
    </motion.section>
  );
}

function DocSubsection({ title, id, children }: any) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="text-2xl font-bold mb-4 text-gray-100">{title}</h3>
      {children}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
      <Icon className="text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, description }: any) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/20 transition-all">
      <div className="flex-shrink-0 p-2 h-fit rounded-lg bg-purple-500/20">
        <Icon className="text-purple-400" size={20} />
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function PlatformCard({ icon: Icon, title, status, statusColor }: any) {
  const colors = {
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-purple-500/30 transition-all group">
      <Icon className="mx-auto text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
      <h4 className="font-bold mb-2">{title}</h4>
      <span className={`inline-block px-3 py-1 rounded-full text-xs border ${colors[statusColor as keyof typeof colors]}`}>
        {status}
      </span>
    </div>
  );
}

function CodeBlock({ title, language, code }: any) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <span className="text-sm font-mono text-gray-400">{title}</span>
        <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-400">{language}</span>
      </div>
      <pre className="bg-black/40 p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function SettingItem({ title, description, defaultValue }: any) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-bold">{title}</h4>
        <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">Default: {defaultValue}</span>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

function AccordionItem({ title, content }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
      >
        <span className="font-bold">{title}</span>
        <ChevronRight className={`transition-transform ${isOpen ? "rotate-90" : ""}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-sm text-gray-400 bg-black/20">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
