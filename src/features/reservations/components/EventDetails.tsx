"use client";

import { MapPin, Phone, FileText } from "lucide-react";

export default function EventDetailsStep({ values, onChange }: any) {
  return (
    <section>
      <h2 className="text-sm font-semibold text-heading-color uppercase tracking-wide mb-4">3. Event Details</h2>
      <div className="bg-white p-6 rounded-xl border border-input-color space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-heading-color flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-label-color" /> Location / Venue
            </label>
            <input 
              type="text"
              value={values.location}
              onChange={(e) => onChange("location", e.target.value)}
              placeholder="e.g. Shangri-La Fort, Room 402"
              className="w-full text-sm px-3 py-2 rounded-lg border border-input-color focus:border-heading-color focus:ring-1 focus:ring-heading-color outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-heading-color flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-label-color" /> Contact Number
            </label>
            <input 
              type="tel"
              value={values.contactNumber}
              onChange={(e) => onChange("contactNumber", e.target.value)}
              placeholder="e.g. 0917 123 4567"
              className="w-full text-sm px-3 py-2 rounded-lg border border-input-color focus:border-heading-color focus:ring-1 focus:ring-heading-color outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-heading-color flex items-center gap-1.5">
            <FileText className="w-3 h-3 text-label-color" /> Special Requests / Notes
          </label>
          <textarea 
            rows={3}
            value={values.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            placeholder="Any allergies, specific looks, or instructions..."
            className="w-full text-sm px-3 py-2 rounded-lg border border-input-color focus:border-heading-color focus:ring-1 focus:ring-heading-color outline-none transition-all placeholder:text-gray-400 resize-none"
          />
        </div>
      </div>
    </section>
  );
}