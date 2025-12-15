"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, MessageCircle } from "lucide-react";

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
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
