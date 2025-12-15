"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, Star, Share2, MoreVertical, Shield, 
  Smartphone, Zap, Check, ChevronRight, Info, 
  Layers, Music, Cpu, Battery, Globe, ThumbsUp
} from "lucide-react";

export default function DownloadPage() {
  const [isInstalling, setIsInstalling] = useState(false);
  const [installProgress, setInstallProgress] = useState(0);

  const handleInstall = () => {
    setIsInstalling(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsInstalling(false), 1000);
      }
      setInstallProgress(progress);
    }, 200);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* App Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] shrink-0 mx-auto md:mx-0">
            <Music size={64} className="text-white" />
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">Voxtrona Audio Engine</h1>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-blue-400 font-medium">
              <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs uppercase tracking-wider">Editor's Choice</span>
              <span className="text-gray-400 text-sm">Voxtrona Labs Inc.</span>
              <span className="hidden md:block text-gray-600">•</span>
              <span className="text-gray-400 text-sm">Music & Audio</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <div className="text-center">
                <div className="flex items-center gap-1 font-bold text-lg">
                  4.9 <Star size={14} fill="currentColor" />
                </div>
                <div className="text-xs text-gray-500">2M+ Reviews</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="font-bold text-lg">50M+</div>
                <div className="text-xs text-gray-500">Downloads</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                  E
                </div>
                <div className="text-xs text-gray-500">Everyone</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Install Action Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="sticky top-24 z-50 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-2xl"
        >
          {isInstalling ? (
            <div className="flex-1 h-12 bg-white/5 rounded-xl overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-blue-500"
                style={{ width: `${installProgress}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-sm tracking-wider">
                {installProgress < 100 ? `INSTALLING ${Math.round(installProgress)}%` : "INSTALLED"}
              </div>
            </div>
          ) : (
            <button 
              onClick={handleInstall}
              className="flex-1 h-12 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-bold text-lg tracking-wide transition-colors shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Install
            </button>
          )}
          <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <MoreVertical size={20} />
          </button>
        </motion.div>

        {/* Screenshots Carousel */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
        >
          <div className="flex gap-4 w-max">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-[280px] h-[500px] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                {/* Mock UI Elements */}
                <div className="absolute top-8 left-6 right-6 h-4 rounded-full bg-white/10" />
                <div className="absolute top-16 left-6 w-12 h-12 rounded-full bg-white/10" />
                <div className="absolute top-16 left-24 right-6 h-12 rounded-xl bg-white/5" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-sm font-bold text-blue-400 mb-1">FEATURE PREVIEW</div>
                  <div className="text-xl font-bold">Advanced EQ Control</div>
                </div>

                {/* Abstract Screen Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-40 h-40 rounded-full border-4 border-blue-500/50 animate-pulse" />
                  <div className="absolute w-20 h-20 rounded-full bg-purple-500/50 blur-xl" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">About this app</h2>
            <ChevronRight className="text-gray-500" />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Voxtrona is not just a music player; it's a professional-grade audio rendering engine for Android and Windows. 
            Unlock the full potential of your hardware with our proprietary 64-bit floating-point audio pipeline.
            <br /><br />
            Experience music exactly as the artist intended, with bit-perfect playback, advanced DSP plugins, and 
            our signature Spatial Audio upscaler that breathes new life into stereo tracks.
          </p>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["#1 Top Grossing", "Editors Choice", "Pro Audio", "Lossless"].map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Data Safety */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-4"
        >
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Shield size={20} className="text-green-400" />
            Data Safety
          </h2>
          <p className="text-sm text-gray-400">
            Safety starts with understanding how developers collect and share your data. 
            Voxtrona is committed to zero-knowledge privacy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="mt-1"><Shield size={16} className="text-gray-500" /></div>
              <div className="text-sm text-gray-300">No data shared with third parties</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1"><Check size={16} className="text-gray-500" /></div>
              <div className="text-sm text-gray-300">Data is encrypted in transit</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1"><Info size={16} className="text-gray-500" /></div>
              <div className="text-sm text-gray-300">You can request data deletion</div>
            </div>
          </div>
        </motion.div>

        {/* Ratings & Reviews */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Ratings & reviews</h2>
            <ChevronRight className="text-gray-500" />
          </div>
          
          <div className="flex gap-8 items-center">
            <div className="text-center">
              <div className="text-6xl font-black">4.9</div>
              <div className="flex gap-1 text-blue-400 justify-center my-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <div className="text-xs text-gray-500">2,450,201</div>
            </div>
            
            <div className="flex-1 space-y-2">
              {[
                { label: "5", val: "90%" },
                { label: "4", val: "8%" },
                { label: "3", val: "1%" },
                { label: "2", val: "0.5%" },
                { label: "1", val: "0.5%" },
              ].map((bar, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-bold w-2">{bar.label}</span>
                  <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: bar.val }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Review Card */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400">
                  JD
                </div>
                <span className="font-medium">John Doe</span>
              </div>
              <div className="flex gap-1 text-blue-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-sm text-gray-300">
              "Absolutely mind-blowing. The spatial audio upscaling makes my standard FLAC library sound like a live concert. 
              Worth every penny for the pro version."
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
              <span>Was this helpful?</span>
              <button className="flex items-center gap-1 hover:text-white"><ThumbsUp size={12} /> Yes</button>
              <button className="hover:text-white">No</button>
            </div>
          </div>
        </motion.div>

        {/* What's New */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">What's New</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10">
            <div className="text-sm font-mono text-blue-400 mb-2">Version 2.4.0 • Updated Dec 15, 2025</div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                New "Neural Spatial" engine for improved soundstage separation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Added support for 32-bit/768kHz playback on supported DACs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Reduced background battery usage by 15%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Fixed WASAPI exclusive mode jitter on Windows 11
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tech Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
          {[
            { icon: Layers, label: "Version", val: "2.4.0" },
            { icon: Download, label: "Size", val: "45 MB" },
            { icon: Smartphone, label: "Android", val: "10.0+" },
            { icon: Globe, label: "Language", val: "English" },
          ].map((spec, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <spec.icon size={20} className="mx-auto mb-2 text-gray-400" />
              <div className="text-xs text-gray-500 mb-1">{spec.label}</div>
              <div className="font-bold">{spec.val}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
