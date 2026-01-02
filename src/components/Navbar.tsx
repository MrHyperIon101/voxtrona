"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
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
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Dropup Menu */}
      {/* Dropup Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 15, scale: 0.9, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  staggerChildren: 0.05
                }
              }
            }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-black/60 backdrop-blur-3xl rounded-3xl p-3 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-1 gap-1">
              {moreNavItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: -10, filter: "blur(5px)" },
                      visible: { opacity: 1, x: 0, filter: "blur(0px)" }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        "flex items-center p-3 rounded-2xl transition-all duration-300 gap-3 group relative overflow-hidden",
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      {/* Active/Hover Background */}
                      <div className={clsx(
                        "absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 rounded-2xl",
                        isActive ? "opacity-100" : "group-hover:opacity-100"
                      )} />

                      {/* Active Glow for specific item */}
                      {isActive && (
                        <motion.div
                          layoutId="menuActive"
                          className="absolute inset-0 bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-2xl"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      <div className="relative z-10 p-1 bg-white/5 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-medium relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.nav
        layout
        onMouseMove={handleMouseMove}
        className="group relative flex items-center gap-2 p-2 rounded-full bg-gradient-to-b from-white/5 to-black/50 backdrop-blur-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "relative flex items-center justify-center h-12 px-4 rounded-full transition-colors duration-300 z-10",
                isActive ? "text-black" : "text-white/50 hover:text-white"
              )}
            >
              {/* Fluid Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="flex items-center gap-2">
                <Icon size={20} className={clsx("relative z-10 transition-colors", isActive ? "text-white" : "text-white/50 hover:text-white")} />
                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, width: "auto", filter: "blur(0px)" }}
                      exit={{ opacity: 0, width: 0, filter: "blur(10px)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="text-sm font-medium whitespace-nowrap overflow-hidden relative z-10 text-white"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
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
            isMenuOpen ? "text-white bg-white/10" : "text-white/50 hover:text-white"
          )}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center"
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
          </motion.div>
        </button>

      </motion.nav>
    </div>
  );
}
