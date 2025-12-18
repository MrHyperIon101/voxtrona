"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Mail, Smartphone, Terminal, Bug, CheckCircle2 } from "lucide-react";

export default function ReportBugPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ id: string; createdAt: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/bug-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to submit");
      setSuccess({ id: json.id, createdAt: json.createdAt });
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300">
          <Bug size={16} />
          <span className="font-semibold tracking-wider uppercase text-xs">Report a Bug</span>
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tighter">Help Us Fix It</h1>
        <p className="mt-3 text-gray-400">Describe what went wrong. The more detail you share, the faster we can fix it.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 bg-black/50 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
        {success && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-200">
            <CheckCircle2 className="mt-0.5" />
            <div>
              <div className="font-semibold">Thanks! Your report was submitted.</div>
              <div className="text-sm opacity-80">ID: {success.id}</div>
            </div>
          </div>
        )}
        {error && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200">
            <AlertTriangle className="mt-0.5" />
            <div>
              <div className="font-semibold">Submission failed</div>
              <div className="text-sm opacity-80">{error}</div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-300">Name</span>
            <input name="name" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
          </label>
          <label className="block">
            <span className="text-sm text-gray-300">Email</span>
            <input type="email" name="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
          </label>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-sm text-gray-300 flex items-center gap-2"><Smartphone size={14}/> Platform</span>
            <input name="platform" placeholder="Android / Windows / Browser" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm text-gray-300 flex items-center gap-2"><Terminal size={14}/> Version</span>
            <input name="version" placeholder="2.1.1020" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
          </label>
          <label className="block md:col-span-1 col-span-3">
            <span className="text-sm text-gray-300 flex items-center gap-2"><Mail size={14}/> Contact (optional)</span>
            <input name="contact" placeholder="@discord or phone" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-gray-300">Steps to Reproduce</span>
          <textarea name="steps" rows={4} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" placeholder="1) Open app  2) Tap Play  3) Crash" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-300">Expected Behavior</span>
          <textarea name="expected" rows={3} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-300">Actual Behavior</span>
          <textarea name="actual" rows={3} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" required />
        </label>

        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ y: -1, scale: 1.01 }}
          whileTap={{ y: 0, scale: 0.99 }}
          className="w-full md:w-auto rounded-full bg-white text-black font-semibold px-6 py-3 disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Submit Bug Report"}
        </motion.button>
      </form>
    </div>
  );
}
