"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Download, List, Headphones, Sparkles, BookOpenText, Users, Bug, ChevronUp, X } from "lucide-react";
import { clsx } from "clsx";

const mainNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "/features", icon: Sparkles },
  { name: "Report Bug", href: "/report-bug", icon: Bug },
  { name: "Download", href: "/download", icon: Download },
];

const moreNavItems = [
  { name: "Docs", href: "/docs", icon: BookOpenText },
  { name: "Community", href: "/community", icon: Users },
  { name: "Changelog", href: "/changelog", icon: List },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">

      {/* Dropup Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {moreNavItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={clsx(
                      "flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 gap-2 border border-transparent",
                      isActive
                        ? "bg-white/10 text-white border-white/10"
                        : "hover:bg-white/5 text-gray-400 hover:text-white"
                    )}
                  >
                    <Icon size={20} />
                    <span className="text-xs font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-1 p-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-lg"
      >
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
                isActive ? "text-black" : "text-gray-400 hover:text-white hover:bg-white/10"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <Icon size={20} />
              </span>
              <span className="sr-only">{item.name}</span>
            </Link>
          );
        })}

        {/* Separator */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* More Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={clsx(
            "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-white/10",
            isMenuOpen ? "text-white bg-white/10" : "text-gray-400"
          )}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronUp size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

      </motion.nav>
    </div>
  );
}
