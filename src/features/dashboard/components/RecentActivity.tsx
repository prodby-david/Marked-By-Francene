import { ArrowRight } from "lucide-react";

interface Activity {
  theme: string;
  dateTime: Date;
}

interface RecentActivityProps {
  recentActivity: Activity[];
}

export default function RecentActivity({ recentActivity }: RecentActivityProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-900">Recent Activity</span>
        <ArrowRight className="w-4 h-4 text-gray-400" />
      </div>

      <div className="divide-y divide-gray-100">
        {recentActivity.length ? recentActivity.map((res, i) => (
          <div key={i} className="px-5 py-3 hover:bg-gray-50 transition-colors flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-900">{res.theme}</p>
              <p className="text-xs text-gray-500">{res.dateTime.toLocaleDateString()}</p>
            </div>
            <div className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
              Paid
            </div>
          </div>
        )) : (
          <p className="px-5 py-3 text-sm text-gray-500">No recent activity.</p>
        )}
      </div>
    </div>
  );
}
