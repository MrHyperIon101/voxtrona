"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Download, List, LifeBuoy, Headphones, Star, BookOpenText, Users, Bug } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "/features", icon: Star },
  { name: "Docs", href: "/docs", icon: BookOpenText },
  { name: "Community", href: "/community", icon: Users },
  { name: "Report Bug", href: "/report-bug", icon: Bug },
  { name: "Support", href: "/support", icon: LifeBuoy },
  { name: "Download", href: "/download", icon: Download },
  { name: "Changelog", href: "/changelog", icon: List },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "relative flex items-center justify-center p-3 rounded-full transition-colors duration-300",
                isActive ? "text-black" : "text-white/70 hover:text-white hover:bg-white/10"
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
      </motion.nav>
    </div>
  );
}
