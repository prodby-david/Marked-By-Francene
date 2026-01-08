"use client";

import { Check } from "lucide-react";
import { themes } from "../data/bookingData";

type ThemeStepProps = {
  selectedId: number | null;
  onSelectTheme: (id: number) => void;
  formatPrice: (amount: number) => string;
};

export default function ThemeStep({
  selectedId,
  onSelectTheme,
  formatPrice,
}: ThemeStepProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-sm font-semibold text-heading-color uppercase tracking-wide">
        1. Select Theme
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {themes.map((theme) => (
          <div
            key={theme.id}
            onClick={() => onSelectTheme(theme.id)}
            className={`cursor-pointer relative p-4 rounded-xl border transition-all duration-200 ${
              selectedId === theme.id
                ? "bg-gray-50 border-heading-color ring-1 ring-heading-color"
                : "bg-white border-input-color hover:border-gray-400"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-sm text-heading-color">
                {theme.title}
              </h3>
              {selectedId === theme.id && (
                <Check className="w-4 h-4 text-heading-color" />
              )}
            </div>

            <p className="text-xs text-label-color">
              {theme.duration} • {formatPrice(theme.price)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
