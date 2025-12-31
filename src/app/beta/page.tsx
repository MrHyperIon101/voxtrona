"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
    Sparkles, Monitor, Tv, Music, Send, CheckCircle2, AlertCircle,
    Loader2, ArrowLeft, Headphones, Volume2, Radio
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function BetaFormContent() {
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

    // Read platform from URL after component mounts to avoid SSR issues
    useEffect(() => {
        const platform = searchParams.get("platform") || "";
        if (platform) {
            setFormData(prev => ({ ...prev, platform }));
        }
    }, [searchParams]);

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [signupId, setSignupId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const toggleFeature = (feature: string) => {
        setFormData(prev => ({
            ...prev,
            interestedFeatures: prev.interestedFeatures.includes(feature)
                ? prev.interestedFeatures.filter(f => f !== feature)
                : [...prev.interestedFeatures, feature]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
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
    };

    const platforms = [
        { id: "windows", label: "Windows", icon: Monitor, color: "blue" },
        { id: "smarttv", label: "Smart TV", icon: Tv, color: "rose" },
    ];

    const audioQualities = [
        { id: "hi-res", label: "Hi-Res (24-bit/192kHz)" },
        { id: "lossless", label: "Lossless (16-bit/44.1kHz)" },
        { id: "high", label: "High (320kbps)" },
    ];

    const featureOptions = [
        "Spatial Audio", "Dolby Atmos", "ASIO/Exclusive Mode", "Visualizers",
        "Lyrics Sync", "Dirac Integration", "Multi-room Audio", "Voice Control"
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-black text-white selection:bg-purple-500/30">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 blur-[200px] rounded-full" />
            </div>

            {/* Floating Music Icons */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[Headphones, Volume2, Radio, Music].map((Icon, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/5"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${10 + i * 15}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    >
                        <Icon size={48 + i * 16} />
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">
                {/* Back Link */}
                <Link
                    href="/download"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Downloads
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                        <Sparkles size={16} className="animate-pulse" />
                        <span className="text-sm font-bold tracking-widest uppercase">Beta Enrollment</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-rose-400">
                            The Audiophile Beta
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        We&apos;re looking for music enthusiasts to help us perfect Voxtrona.
                        Provide your details below to join the waitlist.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative max-w-3xl mx-auto"
                >
                    {/* Card Glow */}
                    <div className="absolute -inset-px bg-gradient-to-b from-purple-500/30 via-blue-500/20 to-transparent rounded-[2.5rem] blur-xl" />

                    <div className="relative bg-black/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl">
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 size={48} className="text-green-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">Registration Received</h2>
                                    <p className="text-gray-400 text-lg mb-8 max-w-sm mx-auto">
                                        Your profile is being reviewed. We&apos;ll be in touch soon via email.
                                    </p>
                                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-gray-500 font-medium">BETA-ID:</span>
                                        <span className="text-purple-400 font-mono text-lg font-bold">{signupId}</span>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-10"
                                >
                                    {/* Section 1: Target Platform */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">1</div>
                                            <h3 className="text-xl font-bold">Target Platform</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {platforms.map((p) => (
                                                <button
                                                    key={p.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, platform: p.id })}
                                                    className={`relative p-6 rounded-2xl border transition-all duration-300 text-left group ${formData.platform === p.id
                                                        ? `bg-${p.color}-500/10 border-${p.color}-500/50 ring-4 ring-${p.color}-500/10`
                                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                                        }`}
                                                >
                                                    <p.icon
                                                        size={32}
                                                        className={`mb-4 transition-colors ${formData.platform === p.id ? `text-${p.color}-400` : "text-gray-500 group-hover:text-gray-300"
                                                            }`}
                                                    />
                                                    <div className="font-bold text-lg">{p.label}</div>
                                                    <div className="text-xs text-gray-500 mt-1">Select for {p.label} development build.</div>
                                                    {formData.platform === p.id && (
                                                        <motion.div
                                                            layoutId="platform-indicator"
                                                            className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-${p.color}-400 shadow-[0_0_12px_rgba(255,255,255,0.5)]`}
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Section 2: Contact & Identity */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold border border-purple-500/30">2</div>
                                            <h3 className="text-xl font-bold">Contact & Identity</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 ml-1">Email Address <span className="text-rose-500">*</span></label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="alex@streaming.com"
                                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Alex Rivers"
                                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 font-medium"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-400 ml-1">Specific Hardware / Device Details</label>
                                            <input
                                                type="text"
                                                value={formData.device}
                                                onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                                                placeholder={formData.platform === "smarttv" ? "e.g., Sony Bravia A95L, LG G4 OLED, Shield TV Pro" : "e.g., Mac Studio, PC with i9-14900K, Surface Pro 9"}
                                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Section 3: Music Profile */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 font-bold border border-green-500/30">3</div>
                                            <h3 className="text-xl font-bold">Music Profile</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 ml-1">Current Primary App/Setup</label>
                                                <input
                                                    type="text"
                                                    value={formData.audioSetup}
                                                    onChange={(e) => setFormData({ ...formData, audioSetup: e.target.value })}
                                                    placeholder="e.g. Tidal HiFi, Roon + Local FLAC"
                                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 ml-1">Audio Gear (IEMs/DACs/HPs)</label>
                                                <input
                                                    type="text"
                                                    value={formData.audioGear}
                                                    onChange={(e) => setFormData({ ...formData, audioGear: e.target.value })}
                                                    placeholder="e.g. Sennheiser HD800S, FiiO K9 Pro"
                                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-semibold text-gray-400 ml-1">Preferred Audio Quality</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                {audioQualities.map((q) => (
                                                    <button
                                                        key={q.id}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, preferredQuality: q.id })}
                                                        className={`p-4 rounded-xl border text-sm font-bold transition-all ${formData.preferredQuality === q.id
                                                            ? "bg-white/10 border-white/30 text-white"
                                                            : "bg-white/5 border-white/5 text-gray-500 hover:border-white/10"
                                                            }`}
                                                    >
                                                        {q.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-semibold text-gray-400 ml-1">Features You&apos;re Excited to Test</label>
                                            <div className="flex flex-wrap gap-2">
                                                {featureOptions.map((f) => (
                                                    <button
                                                        key={f}
                                                        type="button"
                                                        onClick={() => toggleFeature(f)}
                                                        className={`px-4 py-2 rounded-full border text-xs font-bold transition-all ${formData.interestedFeatures.includes(f)
                                                            ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                                                            : "bg-white/5 border-white/5 text-gray-500 hover:border-white/10"
                                                            }`}
                                                    >
                                                        {f}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 4: Final Thoughts */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold border border-orange-500/30">4</div>
                                            <h3 className="text-xl font-bold">Final Thoughts</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-400 ml-1">Why do you want to join the Voxtrona beta?</label>
                                            <textarea
                                                value={formData.reason}
                                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                                placeholder="e.g. I'm a long-time audiophile looking for a premium interface on my Smart TV..."
                                                rows={4}
                                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 font-medium resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Error Message */}
                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex items-center gap-3 p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400"
                                        >
                                            <AlertCircle size={24} />
                                            <div className="text-sm font-bold">{errorMessage}</div>
                                        </motion.div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === "loading" || !formData.platform || !formData.email}
                                            className="w-full relative group"
                                        >
                                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                            <div className="relative w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 disabled:from-gray-800 disabled:to-gray-900 font-black text-xl tracking-wider transition-all duration-300 flex items-center justify-center gap-4 shadow-xl">
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 size={24} className="animate-spin" />
                                                        <span>Processing...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={24} />
                                                        <span>Submit Beta Application</span>
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                        <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-6">
                                            Premium Audio Engineering • Beta Access v2.2
                                        </p>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Bottom Trust/Info Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 px-4"
                >
                    {[
                        { icon: Headphones, label: "Hi-Res Audio", sub: "Up to 192kHz" },
                        { icon: Sparkles, label: "Spatial Tech", sub: "Dolby & Dirac" },
                        { icon: Music, label: "Lossless", sub: "Native Bitstream" },
                        { icon: Radio, label: "Connect", sub: "Cloud Sync" },
                    ].map((f, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
                            <f.icon size={28} className="mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                            <div className="text-sm font-bold">{f.label}</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{f.sub}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default function BetaPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 size={48} className="text-purple-500 animate-spin" />
                    <p className="text-gray-500 font-mono text-sm animate-pulse uppercase tracking-[0.2em]">Initializing Premium Beta...</p>
                </div>
            </div>
        }>
            <BetaFormContent />
        </Suspense>
    );
}
