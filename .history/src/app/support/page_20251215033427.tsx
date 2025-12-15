"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageSquare, Book, Bug, Mail, ChevronDown, Send } from "lucide-react";

const faqs = [
  {
    question: "How do I enable Spatial Audio?",
    answer: "Go to Settings > Audio > Spatial Engine. Toggle the switch to On. You can then calibrate the soundstage using the visualizer."
  },
  {
    question: "Does it support FLAC files?",
    answer: "Yes, we support FLAC, ALAC, WAV, and DSD up to 32-bit/384kHz. Our engine ensures bit-perfect playback."
  },
  {
    question: "Can I sync my Spotify playlists?",
    answer: "Absolutely. Connect your Spotify account in the Library tab, and your playlists will appear alongside your local files."
  },
  {
    question: "Is my data private?",
    answer: "We have a zero-telemetry policy. All metadata processing happens locally on your device. We do not track your listening habits."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 px-4 pb-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
            COMMAND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              CENTER
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search knowledge base..." 
              className="w-full py-4 px-6 pl-14 rounded-2xl bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all text-lg"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { icon: Book, label: "Documentation", color: "text-blue-400" },
            { icon: MessageSquare, label: "Community", color: "text-green-400" },
            { icon: Bug, label: "Report Bug", color: "text-red-400" },
            { icon: Mail, label: "Contact Us", color: "text-purple-400" }
          ].map((action, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center gap-4"
            >
              <action.icon size={32} className={action.color} />
              <span className="font-bold">{action.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Frequently Asked</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.question}</span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Direct Line</h2>
            <form className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-4 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 outline-none transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                <Send size={20} />
                Transmit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

