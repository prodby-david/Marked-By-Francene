"use client";

import React from "react";

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: any) => void;
  icon?: React.ReactNode;
};

export default function SelectField({
  label,
  name,
  value,
  options,
  onChange,
  icon,
}: SelectFieldProps) {
  return (
    <div>
      <label className="text-sm text-heading-color" htmlFor={name}>
        {label}
      </label>
      <div className="flex items-center border border-input-color rounded-md px-2">
        {icon && icon}
        {icon && <div className="mx-2 h-5 w-px bg-input-color" />}
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={`flex-1 py-1.5 outline-none text-sm ${
            value === "" ? "text-gray-400" : "text-heading-color"
          }`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
