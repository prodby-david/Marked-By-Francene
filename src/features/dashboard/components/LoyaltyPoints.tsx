import { MoreHorizontal } from "lucide-react";

export default function LoyaltyPoints() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-500">Loyalty Points</span>
        <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-900">450</span>
        <span className="text-sm text-gray-400">/ 500</span>
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
        <div className="bg-black h-full w-[90%] rounded-full" />
      </div>
      <p className="text-xs text-gray-500 mt-2">50 points until your next reward.</p>
    </div>
  );
}
