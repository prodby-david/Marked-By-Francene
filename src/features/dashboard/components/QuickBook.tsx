import { Sparkles } from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  price: string;
  duration: string;
}

interface QuickBookProps {
  services: Service[];
}

export default function QuickBook({ services }: QuickBookProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Quick Book</h3>
        <Link href="/services" className="text-xs font-medium text-gray-900 hover:underline">View All</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((svc, i) => (
          <button key={i} className="flex flex-col text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-all group">
            <div className="mb-3 p-2 w-fit rounded-lg bg-gray-50 text-gray-900">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm">{svc.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{svc.duration} • {svc.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
