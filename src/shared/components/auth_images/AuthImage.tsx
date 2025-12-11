"use client";

import Image from "next/image";

export function AuthImageSection() {
  return (
    <div className="hidden lg:flex w-1/2 bg-gray-50 relative items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10 " />
      
      <Image 
      src="/images/makeup.jpg" 
      alt="Sign Up Image" 
      fill
      objectFit="cover"
      />

      <div className="relative z-20 text-center px-12">
        <h2 className="text-4xl font-bold text-white mb-4">Join Us Today</h2>
        <p className="text-white/90 text-lg font-light">
          Book your sessions faster and get exclusive offers.
        </p>
      </div>
    </div>
  );
}
