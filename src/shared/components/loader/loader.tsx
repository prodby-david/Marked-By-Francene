"use client";

import { Sparkles } from "lucide-react";

interface MakeupLoaderProps {
  text?: string;
  fullScreen?: boolean;
}

export default function MakeupLoader({ 
  text = "Preparing your glam...", 
  fullScreen = false 
}: MakeupLoaderProps) {

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? "min-h-screen w-full bg-gray-50" : "w-full py-12"}`}>

      <div className="relative flex items-center justify-center">
        
        <div className="w-12 h-12 rounded-full border-[3px] border-gray-100 border-t-action-color animate-spin"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
           <Sparkles className="w-4 h-4 text-action-color fill-action-color animate-pulse" />
        </div>
      </div>

      <p className="text-xs font-medium text-label-color animate-pulse uppercase tracking-wide">
        {text}
      </p>

    </div>
  );
}