"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-400 mb-12 text-lg">Last updated: January 1, 2026</p>

          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Voxtrona ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This Privacy Policy explains how our application operates and how it handles your information. 
                Our core philosophy is privacy-by-design, ensuring that your data remains yours and stays on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Data Collection and Storage</h2>
              <p>
                We do not collect, store, or transmit any of your personal data to our servers. Voxtrona operates as a 
                local-first application. All application data, including your library, playlists, settings, and preferences, 
                is stored locally on your device. We do not maintain a database of user information, and we have no access 
                to your usage patterns or personal details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Third-Party Services</h2>
              <p className="mb-4">
                Voxtrona integrates with third-party music services to provide content. These integrations operate directly 
                between your device and the respective service providers.
              </p>
              
              <div className="pl-4 border-l-2 border-white/10 space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">YouTube Music</h3>
                  <p>
                    When you sign in to your YouTube Music account through Voxtrona, your authentication credentials are 
                    processed locally on your device. The application communicates directly with YouTube Music APIs to 
                    fetch your library and stream content. We do not intercept, store, or have access to your Google 
                    account credentials or your listening history.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Spotify</h3>
                  <p>
                    Similarly, Spotify integration is handled locally. Authentication tokens are stored securely on your 
                    device and are used solely to communicate with Spotify's servers from your local machine. We do not 
                    collect data regarding your Spotify account or activity.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Local Processing</h2>
              <p>
                All audio processing, including equalization, spatial audio effects, and analysis, is performed locally 
                on your device's hardware. No audio data is uploaded to the cloud for processing. This ensures both 
                low latency and complete privacy of your listening experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us via our support channels or 
                community forums.
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
