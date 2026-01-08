"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, CheckCircle2, Clock, Calendar, X } from "lucide-react";

// Mock Data
const notifications = [
  {
    id: 1,
    title: "Appointment Confirmed",
    description: "Your session for Oct 24 is now confirmed.",
    time: "2 mins ago",
    type: "success", 
    isRead: false,
  },
  {
    id: 2,
    title: "Payment Received",
    description: "We received your 50% downpayment.",
    time: "1 hour ago",
    type: "info",
    isRead: false,
  },
  {
    id: 3,
    title: "Upcoming Reminder",
    description: "Don't forget your Bridal Trial tomorrow!",
    time: "1 day ago",
    type: "alert",
    isRead: true,
  },
];

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="" ref={dropdownRef}>
      
      {/* TRIGGER BUTTON (Relative wrapper not needed for fixed positioning, but good for desktop) */}
      <div className="relative">
        <button 
          onClick={handleOpen}
          className={`
            p-2 rounded-lg transition-colors relative outline-none
            ${isOpen ? "bg-gray-100 text-gray-900" : "text-[#5F6368] hover:bg-gray-100"}
          `}
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#E11D48] rounded-full ring-2 ring-white"></span>
          )}
        </button>
      </div>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <>
          {/* Mobile Backdrop (Optional: helps focus on mobile) */}
          <div className="fixed inset-0 bg-black/5 z-40 sm:hidden" aria-hidden="true" />

          <div className={`
            z-50 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200
            
            /* MOBILE STYLES: Fixed position, spanning the screen width with margins */
            fixed top-[70px] left-4 right-4 
            
            /* DESKTOP STYLES: Absolute position, anchored to the bell */
            sm:absolute sm:top-full sm:right-0 sm:left-auto sm:w-96 sm:mt-2
          `}>
            
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-semibold text-sm text-[#202124]">Notifications</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => setUnreadCount(0)}
                  className="text-xs text-[#1A73E8] hover:text-[#1557B0] font-medium"
                >
                  Mark all as read
                </button>
                {/* Close button for Mobile UX */}
                <button onClick={() => setIsOpen(false)} className="sm:hidden text-gray-400">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="max-h-[60vh] sm:max-h-[400px] overflow-y-auto">
              {notifications.length > 0 ? (
                <div className="divide-y divide-gray-50">
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`p-4 hover:bg-gray-50 transition-colors flex gap-3 ${!notif.isRead ? "bg-blue-50/30" : ""}`}
                    >
                      {/* Icon */}
                      <div className="shrink-0 mt-0.5">
                        {notif.type === 'success' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                        {notif.type === 'info' && <Clock className="w-5 h-5 text-[#1A73E8]" />}
                        {notif.type === 'alert' && <Calendar className="w-5 h-5 text-orange-500" />}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-start">
                          <p className={`text-sm font-medium ${!notif.isRead ? "text-[#202124]" : "text-[#5F6368]"}`}>
                            {notif.title}
                          </p>
                          {!notif.isRead && <span className="w-1.5 h-1.5 bg-[#1A73E8] rounded-full shrink-0 mt-1.5" />}
                        </div>
                        <p className="text-xs text-[#5F6368] leading-relaxed">
                          {notif.description}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium pt-1">
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500 text-sm">
                  No new notifications.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-gray-100 bg-gray-50/50 text-center">
              <button className="text-xs font-medium text-[#5F6368] hover:text-[#202124] py-1 px-3 rounded hover:bg-gray-200/50 transition-colors">
                View All Activity
              </button>
            </div>

          </div>
        </>
      )}
    </div>
  );
}