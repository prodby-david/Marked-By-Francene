import { CheckCircle2, Calendar, Clock, MapPin } from "lucide-react";

interface ActiveSessionProps {
  nextAppointment: {
    theme: string;
    location: string;
    notes?: string;
    dateTime: Date;
  } | null;
}

export default function ActiveSession({ nextAppointment }: ActiveSessionProps) {
  if (!nextAppointment) {
    return <p className="text-gray-500 text-sm">No upcoming appointments.</p>;
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Session</h3>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-green-600">Upcoming Appointment</span>
              </div>
              <h2 className="text-xl font-bold text-heading-color">{nextAppointment.theme}</h2>
              <p className="text-sm text-gray-500">{nextAppointment.location}</p>
              {nextAppointment.notes && (
                <p className="text-xs text-gray-400 mt-1">{nextAppointment.notes}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                <Calendar className="w-4 h-4 text-gray-400" />
                {nextAppointment.dateTime.toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                <Clock className="w-4 h-4 text-gray-400" />
                {nextAppointment.dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                <MapPin className="w-4 h-4 text-gray-400" />
                {nextAppointment.location}
              </div>
            </div>
          </div>

          <div className="flex md:flex-col items-center justify-center gap-2 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
            <button className="w-full whitespace-nowrap px-4 py-2 text-sm font-medium bg-heading-color text-white rounded-lg transition-colors">
              View details
            </button>
            <button className="w-full py-2 text-sm font-medium text-gray-500 bg-transparent border border-transparent rounded-lg hover:bg-gray-100 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
