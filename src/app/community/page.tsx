import { Users, MessageSquare, Github, Globe } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80">
          <Users size={16} />
          <span className="font-semibold tracking-wider uppercase text-xs">Community</span>
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tighter">Join the Community</h1>
        <p className="mt-3 text-gray-400">Connect with other users, get help, and contribute.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
            <MessageSquare />
          </div>
          <div className="text-xl font-semibold">Discord</div>
          <div className="text-gray-400 text-sm mt-1">Chat with the team and users in real-time.</div>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
            <Github />
          </div>
          <div className="text-xl font-semibold">GitHub</div>
          <div className="text-gray-400 text-sm mt-1">Report issues, request features, or contribute code.</div>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
            <Globe />
          </div>
          <div className="text-xl font-semibold">Social</div>
          <div className="text-gray-400 text-sm mt-1">Follow updates and share feedback.</div>
        </a>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Latest</h2>
        <div className="mt-4 grid gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-sm text-gray-400">Announcement</div>
            <div className="font-semibold">V2.1.1020 Released for Android</div>
            <div className="text-gray-400 text-sm">Grab it from the Download page and tell us what you think.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
