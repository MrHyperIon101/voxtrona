"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Download, FileText, LifeBuoy, Headphones, Sparkles } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Features', href: '/features', icon: Sparkles },
  { name: 'Spatial Audio', href: '/spatial-audio', icon: Headphones },
  { name: 'Download', href: '/download', icon: Download },
  { name: 'Changelog', href: '/changelog', icon: FileText },
  { name: 'Support', href: '/support', icon: LifeBuoy },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-1 p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "relative flex items-center justify-center px-4 py-2 rounded-full transition-colors duration-200 group",
                isActive ? "text-white" : "text-white/60 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative flex items-center gap-2 text-sm font-medium">
                <Icon size={18} />
                <span className="hidden sm:inline">{item.name}</span>
              </span>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
