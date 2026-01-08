"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generateTimeSlots } from "@/shared/lib/timeslots"; 

interface DateTimeStepProps {
  selectedDate: Date;
  selectedTime: string | null;
  onDateChange: (date: Date) => void;
  onTimeSelect: (time: string) => void;
}

export default function DateTimeStep({ 
  selectedDate, 
  selectedTime, 
  onDateChange, 
  onTimeSelect 
}: DateTimeStepProps) {
  const [viewDate, setViewDate] = useState(new Date(selectedDate));

  // Generate slots dynamically
  const slots = generateTimeSlots(7, 19, 30); // 7:00 AM to 7:00 PM, 30-min intervals

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthName = viewDate.toLocaleString("default", { month: "long" });
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isSelected = (day: number) =>
    selectedDate.getDate() === day && 
    selectedDate.getMonth() === month && 
    selectedDate.getFullYear() === year;

  // Helper to check if slot is past
  const isSlotPast = (time: string) => {
    const [hourMin, meridiem] = time.split(" ");
    let [hour, min] = hourMin.split(":").map(Number);
    if (meridiem === "PM" && hour !== 12) hour += 12;
    if (meridiem === "AM" && hour === 12) hour = 0;

    const slotDate = new Date(selectedDate);
    slotDate.setHours(hour, min, 0, 0);

    return slotDate < new Date();
  };

  return (
    <section>
      <h2 className="text-sm font-semibold text-heading-color uppercase tracking-wide mb-4">
        2. Select Date & Time
      </h2>
      <div className="bg-white p-6 rounded-xl border border-input-color flex flex-col md:flex-row gap-8">
        {/* Calendar */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-heading-color text-sm">{monthName} {year}</span>
            <div className="flex gap-2">
              <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded transition-colors">
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </button>
              <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
              <span key={d} className="text-gray-400 text-xs py-2 font-medium">{d}</span>
            ))}
            
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className="py-2" />
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const dateObj = new Date(year, month, day, 12);
              const active = isSelected(day);
              const isPast = dateObj < today;

              return (
                <button 
                  key={day} 
                  disabled={isPast}
                  onClick={() => onDateChange(dateObj)}
                  className={`
                    py-2 text-xs rounded-md transition-all
                    ${active ? "bg-heading-color text-white shadow-sm" : "text-heading-color"}
                    ${isPast ? "opacity-20 cursor-not-allowed" : "active:scale-95 cursor-pointer"}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="w-full md:w-48 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
          <span className="text-xs font-medium text-label-color mb-3 block">
            Available Slots
          </span>
          <div className="max-h-60 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
            {slots.map((time) => {
              const disabled = isSlotPast(time);
              return (
                <button
                  key={time}
                  onClick={() => onTimeSelect(time)}
                  disabled={disabled}
                  className={`
                    w-full py-2 px-3 text-xs rounded-lg border text-center transition-all block
                    ${selectedTime === time ? "bg-heading-color text-white border-heading-color shadow-sm" : "bg-white text-heading-color border-input-color hover:border-gray-400"}
                    ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
                  `}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
