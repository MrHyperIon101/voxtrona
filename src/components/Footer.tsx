"use client";

import React from "react";
import Link from "next/link";
// import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-lg mt-auto pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Voxtrona Music
            </h2>
            <p className="text-gray-400 max-w-sm">
              The ultimate audiophile music player for Android. Experience music the way it was meant to be heard.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/download" className="text-gray-400 hover:text-white transition-colors">Download</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/spatial-audio" className="text-gray-400 hover:text-white transition-colors">Spatial Audio</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="https://github.com/voxtrona" className="text-gray-400 hover:text-white transition-colors">GitHub Issues</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Voxtrona Music. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mrhyperion/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-colors"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              {/* Instagram SVG icon */}
              <svg className="relative z-10 text-gray-400 group-hover:text-black transition-colors duration-300" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
