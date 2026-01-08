"use client";

import Link from "next/link";
import { ChevronLeft, Download, Filter, MoreHorizontal, Search } from "lucide-react";

// Mock Data
const history = [
  { id: "BK-9012", service: "Bridal Trial", date: "Oct 12, 2024", amount: "₱2,500", status: "Completed" },
  { id: "BK-8832", service: "Event Glam", date: "Sep 24, 2024", amount: "₱1,500", status: "Completed" },
  { id: "BK-7721", service: "Photoshoot", date: "Aug 10, 2024", amount: "₱3,000", status: "Cancelled" },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 mb-2">
              <ChevronLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Booking History</h1>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
           <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input 
                placeholder="Search bookings..." 
                className="w-full pl-9 pr-4 py-2 text-sm outline-none text-gray-900 placeholder:text-gray-400"
              />
           </div>
           <div className="h-6 w-px bg-gray-200 mx-1" />
           <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
             <Filter className="w-4 h-4" /> Filter
           </button>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-3 font-medium">Reservation ID</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-gray-600">{item.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{item.service}</td>
                  <td className="px-6 py-4 text-gray-500">{item.date}</td>
                  <td className="px-6 py-4 text-gray-900">{item.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${item.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' : ''}
                      ${item.status === 'Cancelled' ? 'bg-gray-100 text-gray-600 border border-gray-200' : ''}
                    `}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}