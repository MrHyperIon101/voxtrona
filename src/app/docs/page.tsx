"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpenText, Shield, Cog, Music2, Download, Headphones,
  Radio, Smartphone, Laptop, Zap, Lock, Cloud, HardDrive,
  Settings, Volume2, Waves, Sparkles, Globe, Users,
  PlayCircle, Search, ChevronRight, Code, Terminal, Database,
  Sliders, Cpu, Gauge, FileAudio, Layers, Box, ArrowRight
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: BookOpenText,
    subsections: ["What is Voxtrona?", "Key Features", "Supported Platforms"]
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Download,
    subsections: ["Installation", "First Launch", "Quick Setup"]
  },
  {
    id: "audio-engine",
    title: "Audio Engine",
    icon: Music2,
    subsections: ["Bit-Perfect Playback", "Spatial Audio", "Neural EQ", "Codecs & Formats"]
  },
  {
    id: "library",
    title: "Library Management",
    icon: Database,
    subsections: ["Local Library", "Cloud Integration", "Playlists", "Search & Filter"]
  },
  {
    id: "playback",
    title: "Playback Controls",
    icon: PlayCircle,
    subsections: ["Queue Management", "Playback Speed", "Gapless Playback", "Crossfade"]
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    icon: Shield,
    subsections: ["Zero Telemetry", "Data Storage", "Cloud Sync"]
  },
  {
    id: "advanced",
    title: "Advanced Settings",
    icon: Cog,
    subsections: ["Audio Tweaks", "Custom Scripts", "Export/Import", "Developer Mode"]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: Terminal,
    subsections: ["Common Issues", "Performance Tips", "Support"]
  },
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
                  Voxtrona is a modern music player designed for music enthusiasts who value high-quality audio playback and a beautiful user experience.
                  Built with cutting-edge web technologies, Voxtrona aims to provide an immersive listening experience with an emphasis on
                  performance, aesthetics, and user privacy.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <FeatureCard icon={Zap} title="Lightning Fast" description="Optimized for instant response" />
                  <FeatureCard icon={Waves} title="High Quality" description="Premium audio playback" />
                  <FeatureCard icon={Lock} title="Privacy First" description="Your data stays with you" />
                </div>
              </DocSubsection>

              <DocSubsection title="Key Features" id="introduction-key-features">
                <div className="space-y-4">
                  <FeatureItem icon={Music2} title="High-Quality Playback" description="Superior audio quality with modern web audio APIs" />
                  <FeatureItem icon={Headphones} title="Spatial Audio" description="Immersive 3D audio experience" />
                  <FeatureItem icon={FileAudio} title="Multi-Format Support" description="Support for popular audio formats including MP3, FLAC, and more" />
                  <FeatureItem icon={Globe} title="Modern Interface" description="Beautiful, intuitive design built with React and Next.js" />
                  <FeatureItem icon={Shield} title="Privacy Focused" description="No unnecessary tracking or data collection" />
                  <FeatureItem icon={Sparkles} title="Smooth Animations" description="Framer Motion powered UI transitions" />
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
                      Voxtrona for Android is now in Beta! You can download the latest APK directly from our website.
                    </p>
                    <a href="https://github.com/MrHyperIon101/voxtrona/releases/download/Beta/Voxtrona.For.New.Devices.arm64.apk" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition-colors">
                      <Download size={18} />
                      Download Beta v2.1.1020
                    </a>
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="First Launch" id="getting-started-first-launch">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Once Voxtrona launches, you'll experience a clean, modern interface designed for optimal music listening.
                </p>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Globe className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white mb-1">Web Interface</div>
                      <div className="text-sm">Access Voxtrona from any modern browser</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Headphones className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white mb-1">Audio Playback</div>
                      <div className="text-sm">Premium quality audio using Web Audio API</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Sparkles className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white mb-1">Beautiful UI</div>
                      <div className="text-sm">Stunning animations and modern design</div>
                    </div>
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="Quick Setup" id="getting-started-quick-setup">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Voxtrona is designed to work out of the box with sensible defaults. Simply launch the app and start enjoying your music.
                  Customize settings as needed to match your preferences and audio hardware.
                </p>
              </DocSubsection>
            </DocSection>

            {/* Audio Engine */}
            <DocSection id="audio-engine" icon={Music2} title="Audio Engine">
              <DocSubsection title="Bit-Perfect Playback" id="audio-engine-bit-perfect-playback">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Voxtrona is designed to deliver high-quality audio playback using modern web audio technologies.
                  The audio engine prioritizes quality and performance for the best listening experience.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Cpu className="text-blue-400" size={20} />
                    Web Audio API
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Voxtrona leverages the Web Audio API to provide high-quality audio playback directly in your browser.
                    This ensures low latency and efficient processing for a smooth listening experience.
                  </p>
                </div>
              </DocSubsection>

              <DocSubsection title="Spatial Audio" id="audio-engine-spatial-audio">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Experience immersive 3D audio with Voxtrona's spatial audio features (coming soon).
                  Transform your listening experience with advanced audio positioning.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <Layers className="text-purple-400 mb-3" size={24} />
                    <h4 className="font-bold mb-2">3D Audio</h4>
                    <p className="text-sm text-gray-400">Immersive soundstage for enhanced listening experience</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <Gauge className="text-blue-400 mb-3" size={24} />
                    <h4 className="font-bold mb-2">Advanced Processing</h4>
                    <p className="text-sm text-gray-400">Real-time audio processing for optimal quality</p>
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="Neural EQ" id="audio-engine-neural-eq">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Smart equalization features to customize your audio experience (planned feature).
                </p>
              </DocSubsection>

              <DocSubsection title="Codecs & Formats" id="audio-engine-codecs-formats">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Voxtrona aims to support a wide range of audio formats. Format support will expand as the platform develops.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 font-bold text-purple-400">Format</th>
                        <th className="text-left py-3 px-4 font-bold text-purple-400">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4">MP3</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Planned</span></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4">FLAC</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Planned</span></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4">WAV</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Planned</span></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4">AAC</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Planned</span></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4">OGG</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Planned</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </DocSubsection>
            </DocSection>

            {/* Library Management */}
            <DocSection id="library" icon={Database} title="Library Management">
              <DocSubsection title="Local Library" id="library-local-library">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Organize and manage your music collection with Voxtrona's library features (in development).
                </p>
                <div className="space-y-4">
                  <FeatureItem
                    icon={HardDrive}
                    title="Music Organization"
                    description="Keep your music library organized and accessible"
                  />
                  <FeatureItem
                    icon={Search}
                    title="Search"
                    description="Find your favorite tracks quickly"
                  />
                  <FeatureItem
                    icon={Box}
                    title="Metadata"
                    description="View and manage track information"
                  />
                </div>
              </DocSubsection>

              <DocSubsection title="Cloud Integration" id="library-cloud-integration">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Future versions will support integration with popular streaming services.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <Radio className="text-green-400 mb-3" size={24} />
                    <h4 className="font-bold mb-2">Spotify</h4>
                    <p className="text-sm text-gray-400 mb-3">Planned integration</p>
                    <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">Coming Soon</span>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20">
                    <Radio className="text-red-400 mb-3" size={24} />
                    <h4 className="font-bold mb-2">Apple Music</h4>
                    <p className="text-sm text-gray-400 mb-3">Planned integration</p>
                    <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">Coming Soon</span>
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="Playlists" id="library-playlists">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Create and manage playlists to organize your favorite music (coming soon).
                </p>
              </DocSubsection>
            </DocSection>

            {/* Playback Controls */}
            <DocSection id="playback" icon={PlayCircle} title="Playback Controls">
              <DocSubsection title="Queue Management" id="playback-queue-management">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Control your music playback with intuitive controls and queue management (in development).
                </p>
              </DocSubsection>

              <DocSubsection title="Playback Speed" id="playback-playback-speed">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Adjust playback speed to match your preferences (planned feature).
                </p>
              </DocSubsection>

              <DocSubsection title="Gapless Playback" id="playback-gapless-playback">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Seamless transitions between tracks for uninterrupted listening (planned feature).
                </p>
              </DocSubsection>

              <DocSubsection title="Crossfade" id="playback-crossfade">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Smooth transitions between tracks with customizable crossfade (planned feature).
                </p>
              </DocSubsection>
            </DocSection>

            {/* Privacy & Security */}
            <DocSection id="privacy" icon={Shield} title="Privacy & Security">
              <DocSubsection title="Zero Telemetry" id="privacy-zero-telemetry">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-4">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Lock className="text-green-400" size={20} />
                    Your Privacy is Sacred
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Voxtrona has a strict <strong>zero-telemetry policy</strong>. We don't track what you listen to,
                    when you listen, or how you use the app. No analytics, no tracking pixels, no data harvesting.
                    Your music library and listening habits are yours alone.
                  </p>
                </div>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="text-green-400" size={16} />
                    <span>No usage analytics or crash reporting sent to servers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="text-green-400" size={16} />
                    <span>All processing happens locally on your device</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="text-green-400" size={16} />
                    <span>Optional cloud sync is end-to-end encrypted</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="text-green-400" size={16} />
                    <span>Open-source components for transparency</span>
                  </div>
                </div>
              </DocSubsection>

              <DocSubsection title="Data Storage" id="privacy-data-storage">
                <p className="text-gray-300 leading-relaxed mb-4">
                  All your data is stored locally on your device in encrypted SQLite databases. Library metadata,
                  playlists, and settings never leave your device unless you explicitly enable cloud sync.
                </p>
              </DocSubsection>

              <DocSubsection title="Cloud Sync" id="privacy-cloud-sync">
                <p className="text-gray-300 leading-relaxed mb-4">
                  When enabled, cloud sync uses end-to-end encryption (AES-256) with keys derived from your password.
                  Even we can't read your synced data. You can also self-host the sync server using our open-source backend.
                </p>
              </DocSubsection>
            </DocSection>

            {/* Advanced Settings */}
            <DocSection id="advanced" icon={Cog} title="Advanced Settings">
              <DocSubsection title="Audio Tweaks" id="advanced-audio-tweaks">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Advanced audio settings will be available to customize your listening experience (in development).
                </p>
              </DocSubsection>

              <DocSubsection title="Custom Scripts" id="advanced-custom-scripts">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Future versions may include scripting capabilities for advanced automation (planned feature).
                </p>
              </DocSubsection>

              <DocSubsection title="Export/Import" id="advanced-export-import">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Export and import your settings and preferences (planned feature).
                </p>
              </DocSubsection>

              <DocSubsection title="Developer Mode" id="advanced-developer-mode">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Developer tools and debugging features for advanced users (planned feature).
                </p>
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
