"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        setMounted(true);
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [onKeyDown]);

    if (!mounted) return null;

    return createPortal(
        <div
            ref={overlay}
            className="fixed inset-0 z-[99999] flex items-end md:items-center justify-center p-0 md:p-8"
            onClick={onClick}
        >
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                aria-hidden="true"
            />

            {/* Modal Content - Slide up from bottom on mobile, scale up on desktop */}
            <motion.div
                ref={wrapper}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl h-[100dvh] md:h-auto md:max-h-[90vh] overflow-y-auto bg-black border-0 md:border border-white/10 rounded-none md:rounded-3xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onDismiss}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <X size={20} />
                </button>

                {children}
            </motion.div>
        </div>,
        document.body
    );
}
