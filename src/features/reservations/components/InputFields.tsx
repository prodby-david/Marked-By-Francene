"use client";

import React from "react";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  icon?: React.ReactNode;
  placeholder?: string;
};

export default function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label className="text-sm text-heading-color" htmlFor={name}>
        {label}
      </label>
      <div className="flex items-center border border-input-color rounded px-2">
        {icon && icon}
        {icon && <div className="mx-2 h-5 w-px bg-input-color" />}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 py-1.5 outline-none text-sm text-heading-color"
        />
      </div>
    </div>
  );
}
