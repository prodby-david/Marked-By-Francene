import { Share2, Copy } from "lucide-react";

export default function ReferEarn() {
  return (
    <div className="bg-linear-to-br from-gray-900 to-black text-white rounded-xl p-6 shadow-sm relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2 text-white/80">
          <Share2 className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Refer & Earn</span>
        </div>

        <h3 className="text-lg font-bold">Give ₱500, Get ₱500</h3>
        <p className="text-xs text-gray-400 mt-1 mb-4">
          Send a discount to a friend and earn 100 loyalty points when they book.
        </p>

        <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-lg border border-white/10">
          <code className="flex-1 text-xs font-mono text-center text-white tracking-widest">
            FRANCENE-2025
          </code>
          <button className="p-1.5 bg-white text-black rounded hover:bg-gray-200 transition-colors">
            <Copy className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
