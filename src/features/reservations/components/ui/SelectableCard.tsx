"use client";

import { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectableCardProps {
  isSelected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  showCheckmark?: boolean;
}

export function SelectableCard({ 
  isSelected, 
  onClick, 
  children, 
  className,
  showCheckmark = true 
}: SelectableCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer relative p-4 rounded-xl border transition-all duration-200",
        isSelected
          ? "bg-blue-50 border-action-color ring-1 ring-action-color"
          : "bg-white border-input-color hover:border-gray-400",
        className
      )}
    >
      {children}
      {isSelected && showCheckmark && (
        <div className="absolute top-3 right-3">
          <Check className="w-4 h-4 text-action-color" />
        </div>
      )}
    </div>
  );
}