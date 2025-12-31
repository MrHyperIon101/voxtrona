"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Smartphone, Terminal, Bug, CheckCircle2, ChevronRight } from "lucide-react";

export default function ReportBugPage() {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<{ id: string; createdAt: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget; // Capture reference immediately
        setSubmitting(true);
        setError(null);
        setSuccess(null);

        const fd = new FormData(form);
        const payload = Object.fromEntries(fd.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setSuccess({ id: data.id, createdAt: new Date().toISOString() });
            form.reset(); // Use captured reference
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen pt-24 pb-24 relative overflow-hidden">

            {/* Background Ambient */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-red-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24">

                    {/* Left Column: Form */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-10"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6 backdrop-blur-md">
                                <Bug size={16} />
                                <span className="font-semibold tracking-wider uppercase text-xs">Bug Tracker</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-500">
                                Help Us <br /> Fix It.
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                                Found a glitch in the matrix? Let us know. The more detail you provide, the faster our engineers can squash it.
                            </p>
                        </motion.div>

                        <motion.form
                            onSubmit={onSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-8"
                        >
                            <AnimatePresence>
                                {success && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="text-green-400" size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-green-400 font-bold text-lg">Report Submitted Successfully</h3>
                                            <p className="text-green-400/70">Case ID: <span className="font-mono bg-green-500/10 px-2 py-0.5 rounded">{success.id}</span></p>
                                        </div>
                                    </motion.div>
                                )}
                                {error && (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                            <AlertTriangle className="text-red-400" size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-red-400 font-bold text-lg">Submission Failed</h3>
                                            <p className="text-red-400/70">{error}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Section 1: User Info */}
                            <div className="p-px rounded-3xl bg-linear-to-b from-white/10 to-transparent">
                                <div className="bg-black/40 backdrop-blur-xl rounded-[23px] p-5 md:p-8 border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">1</span>
                                        Submitters Info
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Name</label>
                                            <input
                                                name="name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors hover:bg-white/10"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Contact Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors hover:bg-white/10"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Bug Details */}
                            <div className="p-px rounded-3xl bg-linear-to-b from-white/10 to-transparent">
                                <div className="bg-black/40 backdrop-blur-xl rounded-[23px] p-5 md:p-8 border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">2</span>
                                        Incident Details
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Platform</label>
                                            <div className="relative">
                                                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <select name="platform" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer hover:bg-white/10">
                                                    <option className="bg-gray-900">Android</option>
                                                    <option className="bg-gray-900">Windows</option>
                                                    <option className="bg-gray-900">Web Player</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">App Version</label>
                                            <div className="relative">
                                                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    name="version"
                                                    placeholder="v2.2.2026"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors hover:bg-white/10"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Steps to Reproduce</label>
                                            <textarea
                                                name="steps"
                                                rows={4}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors hover:bg-white/10 resize-none"
                                                placeholder="1. Open Settings&#10;2. Navigate to Audio Spatial Audio&#10;3. Toggle switch..."
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Expected Behavior</label>
                                                <textarea
                                                    name="expected"
                                                    rows={3}
                                                    className="w-full bg-white/5 border border-green-500/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/30 transition-colors hover:bg-white/10 resize-none"
                                                    placeholder="The toggle should switch on..."
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Actual Behavior</label>
                                                <textarea
                                                    name="actual"
                                                    rows={3}
                                                    required
                                                    className="w-full bg-white/5 border border-red-500/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500/30 transition-colors hover:bg-white/10 resize-none"
                                                    placeholder="App crashes immediately..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        {submitting ? "Submitting..." : "Submit Report"}
                                        {!submitting && <ChevronRight size={18} />}
                                    </span>
                                </button>
                            </div>

                        </motion.form>
                    </div>

                    {/* Right Column: Tips */}
                    <div className="hidden lg:block space-y-6 pt-20">
                        <div className="sticky top-32">
                            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Before you submit</h3>

                            <div className="space-y-4">
                                {[
                                    { title: "Check Connections", desc: "Ensure you have an active internet connection." },
                                    { title: "Update App", desc: "Make sure you are on the latest version (v2.2.2026)." },
                                    { title: "Clear Cache", desc: "Try clearing app cache from Settings > Storage." },
                                    { title: "Restart", desc: "A simple restart fixes 80% of glitches." },
                                ].map((tip, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        <h4 className="font-bold text-white mb-1">{tip.title}</h4>
                                        <p className="text-sm text-gray-400">{tip.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function ChevronDown({ className, size }: { className?: string, size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
