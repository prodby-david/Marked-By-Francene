"use client";

import { FormEvent } from "react";
import { ReservationFormInput } from "../types/ReservationForm";
import { Palette, Clock, PhoneCallIcon, MapPin } from "lucide-react";
import InputField from "./InputFields";
import SelectField from "./SelectField";
import DatePicker from "./DatePicker";
import TextAreaField from "./TextArea"; 

type ReservationFormUIProps = {
  form: ReservationFormInput;
  handleChange: (e: any) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const themeOptions = [
  { value: "natural", label: "Natural / No-Makeup Look" },
  { value: "soft-glam", label: "Soft Glam / Fresh Glow" },
  { value: "full-glam", label: "Full Glam / Evening" },
  { value: "bridal-formal", label: "Bridal / Formal Event" },
  { value: "creative", label: "Creative / Editorial" },
  { value: "themed", label: "Themed / Costume / SFX" },
  { value: "specific", label: "Specific Looks" },
];

export default function ReservationFormUI({
  form,
  handleChange,
  handleSubmit,
}: ReservationFormUIProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-lg shadow-sm shadow-gray-500 p-5 rounded-md"
    >
      {/* Location */}
      <InputField
        label="Location"
        name="location"
        value={form.location}
        onChange={handleChange}
        icon={<MapPin className="h-4 w-4 text-label-color" />}
        placeholder="Enter Location"
      />

      {/* Contact Number */}
      <InputField
        label="Contact Number"
        name="contactNumber"
        value={form.contactNumber}
        onChange={(e) => {
          const onlyNums = e.target.value.replace(/\D/g, "");
          handleChange({ ...e, target: { name: "contactNumber", value: onlyNums } });
        }}
        icon={<PhoneCallIcon className="h-4 w-4 text-label-color" />}
        placeholder="Enter Contact Number"
        type="tel"
      />

      {/* Theme */}
      <SelectField
        label="Theme"
        name="theme"
        value={form.theme}
        onChange={handleChange}
        options={themeOptions}
        icon={<Palette className="h-4 w-4 text-label-color" />}
      />

      {/* Date */}
      <DatePicker
        label="Date"
        selectedDate={form.date}
        onSelect={(date) => handleChange({ target: { name: "date", value: date } })}
      />

      {/* Time */}
      <InputField
        label="Time"
        name="time"
        value={form.time}
        onChange={handleChange}
        icon={<Clock className="h-4 w-4 text-label-color" />}
        type="time"
      />

      {/* Notes */}
      <TextAreaField
        label="Notes"
        name="notes"
        value={form.notes ?? ""}
        onChange={handleChange}
        placeholder="Add notes..."
      />

      {/* Submit */}
      <button
        type="submit"
        className="text-sm bg-action-color text-white py-2 rounded mt-2 cursor-pointer"
      >
        Create Reservation
      </button>
    </form>
  );
}
