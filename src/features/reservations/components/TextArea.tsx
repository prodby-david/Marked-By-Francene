"use client";



type TextAreaFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  rows?: number;
};

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextAreaFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-heading-color" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="flex-1 py-1.5 outline-none text-sm text-heading-color border rounded-md border-input-color px-2 resize-none"
      />
    </div>
  );
}
