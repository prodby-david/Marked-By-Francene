"use client";


import { ReservationType } from "../types/ReservationType";
import { Mail, User, Palette, Calendar as CalendarIcon, Clock, PhoneCallIcon, MapPin } from "lucide-react";
import { Calendar } from "@/shared/components/ui/calendar";

type FormData = Omit<ReservationType, "id" | "createdAt">;

type ReservationFormUIProps = {
  form: FormData;
  handleChange: (e: any) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  calendarRef: React.RefObject<HTMLDivElement | null>;
};

export function ReservationFormUI({ form, handleChange, handleSubmit, showCalendar, setShowCalendar, calendarRef} : ReservationFormUIProps) {


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-lg shadow-sm shadow-gray-500 p-5 rounded-md"
    >

      <div className="flex flex-col md:flex-row items-center gap-3">
        {/* First Name and Last Name input fields */}
        <div className="w-full">
          <label className="text-sm text-heading-color" htmlFor="FirstName">
            First Name
          </label>

          <div className="flex items-center border border-input-color rounded px-2">
            <User className="h-4 w-4 text-label-color" />
            <div className="mx-2 h-5 w-px bg-input-color" />
            <input
              type="text"
              name="firstname"
              id="FirstName"
              placeholder="First name"
              value={form.firstname}
              onChange={handleChange}
              className="flex-1 py-1.5 outline-none text-sm text-heading-color"
            />
          </div>
        </div>

        <div className="w-full">
          <label 
          className="text-sm text-heading-color" 
          htmlFor="LastName">
            Last Name
          </label>

          <div className="flex items-center border border-input-color rounded px-2">
              <User className="h-4 w-4 text-label-color" />
              <div className="mx-2 h-5 w-px bg-input-color" />
              <input
                type="text"
                name="lastname"
                id="LastName"
                placeholder="Last name"
                value={form.lastname}
                onChange={handleChange}
                className="flex-1 py-1.5 outline-none text-sm text-heading-color"
              />
            </div>
        </div>
      </div>

      {/* Location field */}
      <div>
        <label htmlFor="Location" className="text-sm text-heading-color">Location</label>
        <div className="flex items-center border border-input-color rounded px-2">
          <MapPin className="h-4 w-4 text-label-color"/>
          <div className="mx-2 h-5 w-px bg-input-color" />
          <input type="text"
          name="location"
          id="Location"
          className="flex-1 py-1.5 outline-none text-sm text-heading-color" />
        </div>
      </div>

      {/* Contact Number and Email input fields */}
      <div className="flex flex-col md:flex-row items-center gap-3 w-full">
        <div className="w-full">
          <label htmlFor="ContactNumber" className="text-sm text-heading-color" >Contact Number</label>
          <div>
            <div className="flex items-center border border-input-color rounded-md px-2">
              <PhoneCallIcon className="h-4 w-4 text-label-color" />
              <div className="mx-2 h-5 w-px bg-input-color" />
              <input
                type="tel"
                name="contactNumber"
                id="ContactNumber"
                pattern="^(09|\+639)\d{9}$" 
                maxLength={11}
                placeholder="Contact Number"
                value={form.contactNumber}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, ""); 
                  handleChange({
                    ...e,
                    target: {
                      name: "contactNumber",
                      value: onlyNums
                    }
                  });
                }}
                className="flex-1 py-1.5 outline-none text-sm text-heading-color"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <label 
          className="text-sm text-heading-color"  
          htmlFor="Email">
            Email
          </label>

          <div className="flex items-center border border-input-color rounded-md px-2">
            <Mail className="h-4 w-4 text-label-color" />
            <div className="mx-2 h-5 w-px bg-input-color" />
            <input
              type="email"
              name="email"
              id="Email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="flex-1 py-1.5 outline-none text-sm text-heading-color"
            />
          </div>
        </div>
      </div>

      <div>
        <label 
        className="text-sm text-heading-color" 
        htmlFor="Theme">
          Theme
        </label>

        <div className="flex items-center border border-input-color rounded-md px-2">
          <Palette className="h-4 w-4 text-label-color" />
          <div className="mx-2 h-5 w-px bg-input-color" />
          <select
            name="theme"
            id="Theme"
            value={form.theme}
            onChange={handleChange}
            className={`flex-1 py-1.5 outline-none text-sm ${
              form.theme === "" ? "text-gray-400" : "text-heading-color"
            }`}
          >
            <option value="natural">Natural / No-Makeup Look</option>
            <option value="soft-glam">Soft Glam / Fresh Glow</option>
            <option value="full-glam">Full Glam / Evening</option>
            <option value="bridal-formal">Bridal / Formal Event</option>
            <option value="creative">Creative / Editorial</option>
            <option value="themed">Themed / Costume / SFX</option>
            <option value="specific">Specific Looks</option>
          </select>
        </div>
      </div>

      {/* Date and time input field */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-5">
        <div className="w-full">
          <span className="text-sm text-heading-color">Date</span>
          <div className="relative">
            <div
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center border border-input-color rounded-md px-2 py-1.5 cursor-pointer"
            >
              <CalendarIcon className="h-4 w-4 text-label-color" />
              <div className="mx-2 h-5 w-px bg-input-color" />

              <span className="text-sm text-heading-color">
                {form.date
                  ? new Date(form.date).toLocaleDateString()
                  : "Select Date"}
              </span>
            </div>
          </div>

          {showCalendar && (
            <div 
            ref={calendarRef}
            className="absolute bottom-5 cursor-pointer z-50 mt-2 bg-white border rounded-md shadow-md">
              <Calendar
                mode="single"
                selected={form.date ? new Date(form.date) : undefined}
                onSelect={(date) => {
                  handleChange({
                    target: {
                      name: "date",
                      value: date?.toISOString() ?? "",
                    },
                  });
                  setShowCalendar(false); 
                }}
              />
            </div>
          )}
        </div>

      {/* Time selection field */}
      <div className="w-full">
        <label htmlFor="Time" className="text-sm text-heading-color">Time</label>
        <div className="flex items-center border border-input-color rounded-md px-2">
            <Clock className="h-4 w-4 text-label-color" />
            <div className="mx-2 h-5 w-px bg-input-color" />
            <input
              type="time"
              id="Time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="flex-1 py-1.5 outline-none text-sm text-heading-color"
              required
            />
          </div>
      </div>
    </div>

      {/*Notes field */}
      <div className="flex flex-col">
        <label 
        htmlFor="Notes" 
        className="text-sm text-heading-color">
          Notes
        </label>

        <textarea 
        name="notes" 
        id="Notes" 
        value={form.notes ?? ''}
        onChange={handleChange}
        maxLength={150}
        placeholder="Add notes.." 
        className="flex-1 py-1.5 outline-none text-sm text-heading-color border rounded-md border-input-color px-2 resize-none"
        />
      </div>

      <button
        type="submit"
        className="text-sm bg-action-color text-white py-2 rounded mt-2 cursor-pointer"
      >
        Create Reservation
      </button>
    </form>
  );
}
