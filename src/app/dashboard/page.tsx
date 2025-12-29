import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, MoreHorizontal, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default async function UserDashboard() {

  const session = await getServerSession(authOptions);
  const userName = session?.user?.name?.split(" ")[0] || "Client";

  const nextAppointment = {
    date: "Oct 24, 2025",
    time: "10:00 AM",
    service: "Soft Glam & Hairstyling",
    artist: "Sarah J.",
    location: "Quezon City Studio",
    status: "Confirmed"
  };

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
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                View History
            </button>
            <Link href="/book">
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
                    + New Booking
                </button>
            </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          
          <div className="space-y-3">
             <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Session</h3>
             
             <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
                    
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                                    <CheckCircle2 className="w-3 h-3" /> {nextAppointment.status}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">{nextAppointment.service}</h2>
                            <p className="text-sm text-gray-500">with {nextAppointment.artist}</p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                             <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                                <Calendar className="w-4 h-4 text-gray-400" /> 
                                {nextAppointment.date}
                             </div>
                             <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                                <Clock className="w-4 h-4 text-gray-400" /> 
                                {nextAppointment.time}
                             </div>
                             <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                                <MapPin className="w-4 h-4 text-gray-400" /> 
                                {nextAppointment.location}
                             </div>
                        </div>
                    </div>

                    <div className="flex md:flex-col items-center justify-center gap-2 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                         <button className="w-full whitespace-nowrap px-4 py-2 text-sm font-medium text-white bg-action-color rounded-lg transition-colors text-right">
                             Reschedule
                         </button>
                         <button className="w-full whitespace-nowrap px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg transition-colors text-center">
                             Cancel
                         </button>
                    </div>
                </div>
             </div>
          </div>

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

        </div>

        <div className="space-y-6">
          
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

          {/* History Widget (List Style) */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                 <span className="text-sm font-semibold text-gray-900">Recent Activity</span>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
             </div>
             <div className="divide-y divide-gray-100">
                {[1, 2].map((_, i) => (
                    <div key={i} className="px-5 py-3 hover:bg-gray-50 transition-colors flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-900">Graduation Look</p>
                            <p className="text-xs text-gray-500">Sept 12</p>
                        </div>
                        <div className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            Paid
                        </div>
                    </div>
                ))}
             </div>
             <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                 <button className="text-xs font-medium text-gray-600 hover:text-gray-900">View Invoices</button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}