"use client";

import { Brush } from "lucide-react";

interface MakeupLoaderProps {
  text?: string;
}

export default function MakeupLoader({ text = "Preparing your glam..." }: MakeupLoaderProps) {

  return (
    <div className="flex flex-col items-center justify-center gap-4">

      <div className="relative w-32 h-10 overflow-hidden">
        
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-200/50 to-transparent animate-shimmer" />

        <Brush
          className="absolute left-0 top-7 -translate-y-1/2 text-action-color animate-brush"
          size={28}
        />
      </div>

      <p className="text-sm text-heading-color font-medium">
        {text}
      </p>

    </div>
  );
}
