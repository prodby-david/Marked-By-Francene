"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/shared/components/ui/calendar";

type DatePickerProps = {
  selectedDate: string;
  onSelect: (date: string) => void;
  label: string
};

export default function DatePicker({ label, selectedDate, onSelect }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div>
          <label className="text-sm text-heading-color mr-2">{label}</label>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center border border-input-color rounded-md px-2 py-1.5 cursor-pointer"
      >
        <CalendarIcon className="h-4 w-4 text-label-color" />
        <div className="mx-2 h-5 w-px bg-input-color" />
        <span className="text-sm">{selectedDate ? new Date(selectedDate).toLocaleDateString() : "Select Date"}</span>
      </div>

      {open && (
        <div ref={ref} className="absolute z-50 mt-2 bg-white border rounded-md shadow-md">
          <Calendar
            mode="single"
            selected={selectedDate ? new Date(selectedDate) : undefined}
            onSelect={(date) => {
              onSelect(date?.toISOString().split("T")[0] || "");
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
