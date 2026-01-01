"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
    Sparkles, Monitor, Tv, Send, CheckCircle2, AlertCircle,
    Loader2, ArrowLeft, Shield, Zap, Music2, Waves, LucideIcon
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

// Memoized platform card to prevent re-renders
const PlatformCard = React.memo(({
    platform,
    isSelected,
    onSelect
}: {
    platform: { id: string; label: string; icon: LucideIcon; desc: string };
    isSelected: boolean;
    onSelect: () => void;
}) => {
    const Icon = platform.icon;
    return (
        <button
            type="button"
            onClick={onSelect}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-200 text-left group ${isSelected
                ? "bg-gradient-to-br from-purple-500/15 to-blue-500/10 border-purple-500/60 shadow-lg shadow-purple-500/10"
                : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50"
                }`}
        >
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl transition-colors ${isSelected ? "bg-purple-500/20" : "bg-zinc-800"
                    }`}>
                    <Icon size={24} className={isSelected ? "text-purple-400" : "text-zinc-400"} />
                </div>
                <div className="flex-1">
                    <div className="font-bold text-lg text-white">{platform.label}</div>
                    <div className="text-sm text-zinc-500 mt-1">{platform.desc}</div>
                </div>
                {isSelected && (
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_4px_rgba(168,85,247,0.4)]" />
                )}
            </div>
        </button>
    );
});
PlatformCard.displayName = "PlatformCard";

// Memoized quality option
const QualityOption = React.memo(({
    quality,
    isSelected,
    onSelect
}: {
    quality: { id: string; label: string; bitrate: string };
    isSelected: boolean;
    onSelect: () => void;
}) => (
    <button
        type="button"
        onClick={onSelect}
        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${isSelected
            ? "bg-purple-500/10 border-purple-500/50 text-white"
            : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600"
            }`}
    >
        <div className="font-semibold text-sm">{quality.label}</div>
        <div className="text-xs text-zinc-500 mt-1">{quality.bitrate}</div>
    </button>
));
QualityOption.displayName = "QualityOption";

// Memoized feature chip
const FeatureChip = React.memo(({
    feature,
    isSelected,
    onToggle
}: {
    feature: string;
    isSelected: boolean;
    onToggle: () => void;
}) => (
    <button
        type="button"
        onClick={onToggle}
        className={`px-4 py-2.5 rounded-full border transition-all duration-200 text-sm font-medium ${isSelected
            ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
            : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
            }`}
    >
        {feature}
    </button>
));
FeatureChip.displayName = "FeatureChip";

// Input component for consistency
const FormInput = React.memo(({
    label,
    required,
    ...props
}: {
    label: string;
    required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="flex flex-col gap-5 md:gap-6">
        <label className="text-sm font-medium text-zinc-400 block">
            {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <input
            {...props}
            className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-zinc-700 text-white"
        />
    </div>
));
FormInput.displayName = "FormInput";

export function BetaForm() {
    const searchParams = useSearchParams();

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        platform: "",
        device: "",
        reason: "",
        audioSetup: "",
        audioGear: "",
        preferredQuality: "lossless",
        interestedFeatures: [] as string[],
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [signupId, setSignupId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Read platform from URL after component mounts
    useEffect(() => {
        const platform = searchParams.get("platform") || "";
        if (platform) {
            setFormData(prev => ({ ...prev, platform }));
        }
    }, [searchParams]);

    const handleFieldChange = useCallback((field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }, []);

    const toggleFeature = useCallback((feature: string) => {
        setFormData(prev => ({
            ...prev,
            interestedFeatures: prev.interestedFeatures.includes(feature)
                ? prev.interestedFeatures.filter(f => f !== feature)
                : [...prev.interestedFeatures, feature]
        }));
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/beta-signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setSignupId(data.id);
                setStatus("success");
            } else {
                setErrorMessage(data.error || "Something went wrong");
                setStatus("error");
            }
        } catch {
            setErrorMessage("Network error. Please try again.");
            setStatus("error");
        }
    }, [formData]);

    const platforms = useMemo(() => [
        { id: "windows", label: "Windows", icon: Monitor, desc: "Desktop experience with ASIO support" },
        { id: "smarttv", label: "Smart TV", icon: Tv, desc: "Living room experience on big screens" },
    ], []);

    const audioQualities = useMemo(() => [
        { id: "hi-res", label: "Hi-Res Audio", bitrate: "24-bit / 192kHz" },
        { id: "lossless", label: "Lossless", bitrate: "16-bit / 44.1kHz" },
        { id: "high", label: "High Quality", bitrate: "320 kbps" },
    ], []);

    const featureOptions = useMemo(() => [
        "Spatial Audio", "Dolby Atmos", "ASIO/Exclusive Mode", "Visualizers",
        "Lyrics Sync", "Dirac Integration", "Multi-room Audio", "Voice Control"
    ], []);

    const isFormValid = formData.platform && formData.email;

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto text-center py-12"
            >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold mb-3">You&apos;re on the List</h2>
                <p className="text-zinc-400 mb-8">
                    We&apos;ll review your application and reach out via email with next steps.
                </p>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 text-sm font-medium">Beta ID</span>
                    <span className="text-purple-400 font-mono font-bold">{signupId}</span>
                </div>
                <div className="mt-8">
                    <Link
                        href="/download"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Downloads
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                {/* Section 1: Platform */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</div>
                        <h3 className="text-lg font-semibold">Choose Platform</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {platforms.map((p) => (
                            <PlatformCard
                                key={p.id}
                                platform={p}
                                isSelected={formData.platform === p.id}
                                onSelect={() => handleFieldChange("platform", p.id)}
                            />
                        ))}
                    </div>
                </section>

                {/* Section 2: Contact */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</div>
                        <h3 className="text-lg font-semibold">Your Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormInput
                            label="Email Address"
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleFieldChange("email", e.target.value)}
                            placeholder="you@example.com"
                        />
                        <FormInput
                            label="Full Name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleFieldChange("name", e.target.value)}
                            placeholder="Alex Rivers"
                        />
                    </div>
                    <FormInput
                        label="Device / Hardware"
                        type="text"
                        value={formData.device}
                        onChange={(e) => handleFieldChange("device", e.target.value)}
                        placeholder={formData.platform === "smarttv" ? "e.g., LG C4 OLED, Sony A95L" : "e.g., Windows 11 PC, AMD Ryzen 9"}
                    />
                </section>

                {/* Section 3: Audio Profile */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</div>
                        <h3 className="text-lg font-semibold">Audio Profile</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormInput
                            label="Current Setup"
                            type="text"
                            value={formData.audioSetup}
                            onChange={(e) => handleFieldChange("audioSetup", e.target.value)}
                            placeholder="e.g., Tidal HiFi, Roon + FLAC"
                        />
                        <FormInput
                            label="Audio Gear"
                            type="text"
                            value={formData.audioGear}
                            onChange={(e) => handleFieldChange("audioGear", e.target.value)}
                            placeholder="e.g., HD800S, FiiO K9 Pro"
                        />
                    </div>

                    <div className="flex flex-col gap-6 pt-2">
                        <label className="text-sm font-medium text-zinc-400 block">Preferred Quality</label>
                        <div className="grid grid-cols-3 gap-3">
                            {audioQualities.map((q) => (
                                <QualityOption
                                    key={q.id}
                                    quality={q}
                                    isSelected={formData.preferredQuality === q.id}
                                    onSelect={() => handleFieldChange("preferredQuality", q.id)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 pt-2">
                        <label className="text-sm font-medium text-zinc-400 block">Interested Features</label>
                        <div className="flex flex-wrap gap-3">
                            {featureOptions.map((f) => (
                                <FeatureChip
                                    key={f}
                                    feature={f}
                                    isSelected={formData.interestedFeatures.includes(f)}
                                    onToggle={() => toggleFeature(f)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Reason */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">4</div>
                        <h3 className="text-lg font-semibold">Why Join?</h3>
                    </div>
                    <div className="flex flex-col gap-6">
                        <label className="text-sm font-medium text-zinc-400 block">Tell us about yourself</label>
                        <textarea
                            value={formData.reason}
                            onChange={(e) => handleFieldChange("reason", e.target.value)}
                            placeholder="What draws you to Voxtrona? What would you like to test?"
                            rows={3}
                            className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-zinc-700 text-white resize-none"
                        />
                    </div>
                </section>

                {/* Error */}
                {status === "error" && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                        <AlertCircle size={20} />
                        <span className="text-sm font-medium">{errorMessage}</span>
                    </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={status === "loading" || !isFormValid}
                        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 ${isFormValid
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/20"
                            : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                            }`}
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                <span>Submitting...</span>
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                <span>Submit Application</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}

export default function BetaPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Subtle gradient background - LOADED INSTANTLY */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
                {/* Back Link - LOADED INSTANTLY */}
                <Link
                    href="/download"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-10 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Downloads
                </Link>

                {/* Header - LOADED INSTANTLY */}
                <div className="mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-5">
                        <Sparkles size={14} />
                        <span className="text-xs font-bold uppercase tracking-wider">Beta Program</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                        Join the Beta
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-xl">
                        Help us shape the future of Voxtrona. Early access to new features and direct feedback channels.
                    </p>
                </div>

                {/* Suspensed Form Logic Only */}
                <Suspense fallback={
                    // Minimal fallback to avoid layout shift but no full-page loader
                    <div className="opacity-0 min-h-[500px]">
                        Loading form...
                    </div>
                }>
                    <BetaForm />
                </Suspense>

                {/* Trust badges */}
                <div className="mt-16 grid grid-cols-4 gap-3">
                    {[
                        { icon: Waves, label: "Hi-Res" },
                        { icon: Sparkles, label: "Spatial" },
                        { icon: Zap, label: "Fast" },
                        { icon: Shield, label: "Secure" },
                    ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col items-center text-center">
                            <item.icon size={20} className="mb-2 text-zinc-500" />
                            <span className="text-xs text-zinc-600 font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-zinc-700 mt-8">
                    Beta Program v2.2 • Premium Audio Experience
                </p>
            </div>
        </div>
    );
}
