"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto pb-24 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto relative group">

        {/* Animated Border/Glow Container */}
        <div className="absolute -inset-px rounded-[2.5rem] bg-linear-to-r from-transparent via-white/20 to-transparent opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-700" />
        <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-b from-white/10 to-white/2 opacity-100" />

        {/* Main Card Content */}
        <div className="relative rounded-[2.4rem] bg-black/95 md:bg-black/80 backdrop-blur-none md:backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl">

          {/* Dynamic Ambient Glows - Neutral/White to match other cards */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none animate-pulse-slow delay-1000" />

          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="px-6 py-10 md:p-16 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
              <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <Link href="/" className="inline-block group/logo mb-4 -mt-8 md:-mt-10">
                  <Image
                    src="/voxtrona.png"
                    alt="Voxtrona Logo"
                    width={300}
                    height={80}
                    className="h-20 md:h-24 w-auto object-contain object-center md:object-left transition-transform duration-500 group-hover/logo:scale-105"
                  />
                </Link>
                <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed mb-8">
                  The ultimate audiophile music player. <br className="hidden md:block" />
                  Experience music in its purest form.
                </p>
                <div className="flex gap-4">
                  {/* Socials - Expanded */}
                  {[
                    { icon: Instagram, href: "https://instagram.com/mrhyperion" },
                    { icon: Github, href: "https://github.com/MrHyperIon101/voxtrona" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/icon relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                      <social.icon size={20} className="relative z-10 text-gray-400 group-hover/icon:text-white transition-colors duration-300" />
                    </a>
                  ))
                  }
                </div >
              </div >

              <div>
                <h3 className="font-bold mb-6 text-white text-sm tracking-widest uppercase opacity-70">Product</h3>
                <ul className="space-y-4">
                  {['Download', 'Features', 'Spatial Audio', 'Changelog'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-6 text-white text-sm tracking-widest uppercase opacity-70">Community</h3>
                <ul className="space-y-4">
                  <li><Link href="/support" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Help Center</Link></li>
                  <li><Link href="https://github.com/MrHyperIon101/voxtrona" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">GitHub Community</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Contact Us</Link></li>
                </ul>
              </div>
            </div >

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm font-medium">
                © 2025-2028 Voxtrona Music. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs uppercase tracking-widest">
                Designed by Souvik Bagchi
              </p>
            </div>
          </div >
        </div >
      </div >
    </footer >
  );
}
