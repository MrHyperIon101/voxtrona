"use client";

import React from "react";
import Link from "next/link";
import { Users, Instagram, Github, MessageCircle, Newspaper, Megaphone, Heart, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 relative overflow-hidden">
      
      {/* Background Ambient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 mb-6 backdrop-blur-md"
            >
              <Users size={16} className="text-pink-400" />
              <span className="font-semibold tracking-wider uppercase text-xs">Global Community</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-500"
            >
              Join the <br className="md:hidden" /> Movement.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Voxtrona isn't just an app. It's a community of music lovers, audiophiles, and creators.
              Connect, share, and help shape the future of audio.
            </motion.p>
        </div>

        {/* Social Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            
            {/* Instagram */}
            <motion.a 
              href="https://www.instagram.com/mrhyperion/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group relative p-8 rounded-3xl bg-black/40 border border-white/10 overflow-hidden hover:border-pink-500/50 transition-colors duration-500 flex flex-col justify-between h-[300px]"
            >
               <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-500">
                      <Instagram size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
                  <p className="text-gray-400">Follow for visual updates, sneak peaks, and aesthetic showcases.</p>
               </div>
               <div className="relative z-10 flex items-center text-pink-400 font-semibold mt-4 group-hover:translate-x-2 transition-transform">
                  Follow us <ArrowRight size={16} className="ml-2" />
               </div>
            </motion.a>

             {/* GitHub */}
            <motion.a 
              href="https://github.com/MrHyperIon101/voxtrona"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative p-8 rounded-3xl bg-black/40 border border-white/10 overflow-hidden hover:border-white/50 transition-colors duration-500 flex flex-col justify-between h-[300px]"
            >
               <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                      <Github size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
                  <p className="text-gray-400">Check the source, report bugs, and contribute to the codebase.</p>
               </div>
               <div className="relative z-10 flex items-center text-white font-semibold mt-4 group-hover:translate-x-2 transition-transform">
                  Star Repo <ArrowRight size={16} className="ml-2" />
               </div>
            </motion.a>

             {/* Support / Help */}
            <motion.a 
              href="/support"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group relative p-8 rounded-3xl bg-black/40 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-colors duration-500 flex flex-col justify-between h-[300px]"
            >
               <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                      <MessageCircle size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Help Center</h3>
                  <p className="text-gray-400">Need help? Check our guides, FAQs, and support channels.</p>
               </div>
               <div className="relative z-10 flex items-center text-blue-400 font-semibold mt-4 group-hover:translate-x-2 transition-transform">
                  Get Help <ArrowRight size={16} className="ml-2" />
               </div>
            </motion.a>

        </div>

        {/* Latest Updates Section */}
        <div className="max-w-4xl mx-auto">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="flex items-center gap-4 mb-10"
            >
               <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />
               <div className="flex items-center gap-2 text-gray-400 uppercase tracking-widest text-sm font-medium">
                  <Newspaper size={16} /> Latest Updates
               </div>
               <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
            </motion.div>

            <div className="space-y-6">
                
                {/* Announcement Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative p-px rounded-2xl bg-linear-to-b from-white/10 to-transparent overflow-hidden"
                >
                   <div className="relative p-6 md:p-8 rounded-[15px] bg-black/80 backdrop-blur-xl flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                         <Megaphone size={32} className="text-green-400" />
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-2">
                             <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">RELEASE</span>
                             <span className="text-gray-500 text-sm">Dec 25, 2025</span>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Voxtrona Android Beta v2.1.1020 Released</h3>
                         <p className="text-gray-400">
                             Major stability improvements, new spatial audio engine, and refined UI animations.
                             Available to download now for all supported devices.
                         </p>
                      </div>
                      <Link href="/download" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-colors whitespace-nowrap">
                         Download
                      </Link>
                   </div>
                </motion.div>

                {/* Community Milestone Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group relative p-px rounded-2xl bg-linear-to-b from-white/5 to-transparent overflow-hidden"
                >
                   <div className="relative p-6 md:p-8 rounded-[15px] bg-black/60 backdrop-blur-xl flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                         <Heart size={32} className="text-red-400" />
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-2">
                             <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">MILESTONE</span>
                             <span className="text-gray-500 text-sm">Dec 20, 2025</span>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2">20,000+ Active Users</h3>
                         <p className="text-gray-400">
                             We've reached a huge milestone thanks to you! Our discord and github community is growing faster than ever.
                         </p>
                      </div>
                      <a href="https://github.com/MrHyperIon101/voxtrona" target="_blank" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-colors whitespace-nowrap inline-flex items-center gap-2">
                         Star on GitHub <ExternalLink size={16} />
                      </a>
                   </div>
                </motion.div>

            </div>
        </div>

      </div>
    </div>
  );
}
