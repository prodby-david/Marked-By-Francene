import { Facebook } from "lucide-react";
import Link from "next/link";

export default function OfficialPage() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group hover:border-blue-200 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
          <Facebook className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Official Page</h3>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Check out my latest makeup transformations and portfolio updates.
          </p>
        </div>
      </div>

      <Link 
        href="https://www.facebook.com/MarkedByFrancene" 
        target="_blank" 
        className="block mt-4"
      >
        <button className="w-full py-2 text-sm font-medium text-[#1877F2] bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
          Visit Facebook Page
        </button>
      </Link>
    </div>
  );
}
