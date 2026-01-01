"use client";

import { BetaForm } from "@/app/beta/page";
import Modal from "@/components/Modal";
import { Sparkles } from "lucide-react";
import { Suspense } from "react";

export default function BetaModal() {
    return (
        <Modal>
            <div className="p-5 md:p-12">
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-5">
                        <Sparkles size={14} />
                        <span className="text-xs font-bold uppercase tracking-wider">Beta Program</span>
                    </div>
                    <h2 className="text-3xl font-bold">Join the Beta</h2>
                    <p className="text-zinc-400">Complete the form below to apply for early access.</p>
                </div>

                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                    <BetaForm />
                </Suspense>
            </div>
        </Modal>
    );
}
