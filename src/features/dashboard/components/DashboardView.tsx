import ActiveSession from "./ActiveSession";
import RecentActivity from "./RecentActivity";
import Link from "next/link";

interface Props {
  userName: string;
  nextAppointment: any;
  recentActivity: any[];
}

export default function DashboardView({
  userName,
  nextAppointment,
  recentActivity,
}: Props) {
  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-center border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-sm text-gray-500">
            Welcome back, {userName}.
          </p>
        </div>
        <Link href="/reserve">
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            + New Booking
          </button>
        </Link>
      </div>

      <ActiveSession nextAppointment={nextAppointment} />
      <RecentActivity recentActivity={recentActivity} />
    </div>
  );
}
