import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/shared/lib/prisma";
import Link from "next/link";
import {
  ActiveSession,
  QuickBook,
  RecentActivity,
  LoyaltyPoints,
  OfficialPage,
  ReferEarn,
} from "@/features/dashboard";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const userName = session?.user?.name?.split(" ")[0] || "Client";

  if (!userId) return <p>Please log in to see your dashboard.</p>;

  const reservations = await prisma.reservation.findMany({
    where: { userId },
    orderBy: { dateTime: "asc" },
  });
 
  const normalizedReservations = reservations.map(r => ({
    ...r,
    dateTime: new Date(r.dateTime),
    notes: r.notes ?? undefined, 
  }));

  const now = new Date(); // current UTC time

  const upcomingReservations = normalizedReservations
  .filter(r => r.dateTime.getTime() > now.getTime())
  .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());

   const pastReservations = normalizedReservations
  .filter(r => r.dateTime.getTime() > now.getTime())
  .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());

  const nextAppointment = upcomingReservations.length > 0 ? upcomingReservations[0] : null;

  const recentActivity = [...pastReservations];


  const services = [
    { title: "Bridal Trial", price: "₱2,500", duration: "120 min" },
    { title: "Event Glam", price: "₱1,500", duration: "60 min" },
    { title: "Photoshoot", price: "₱3,000", duration: "180 min" },
  ];

  return (
    <div className="space-y-6 pb-10">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back, {userName}.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/history"
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            View History
          </Link>
          <Link href="/reserve">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
              + New Booking
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-6">
          <ActiveSession nextAppointment={nextAppointment} />
          <QuickBook services={services} />
          <RecentActivity recentActivity={recentActivity} />
        </div>

        <div className="space-y-6">
          <LoyaltyPoints />
          <OfficialPage />
          <ReferEarn />
        </div>

      </div>
      
    </div>
  );
}
