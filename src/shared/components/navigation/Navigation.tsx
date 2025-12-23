"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service-offered" },
    { name: "Reviews", href: "/reviews" },
    { name: "FAQ's", href: "/faq" },
  ];

  return (
    <nav
      className='fixed top-0 w-full z-50 transition-all duration-300 bg-bg-color border-b border-input-color shadow-sm'
    >
      <div className="max-w-7xl">
        <div className="flex items-center justify-around h-14">
          
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-sm font-bold text-heading-color tracking-tight">
              MarkedByFrancene<span className="text-action-color">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-label-color hover:text-action-color transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-heading-color hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-15 left-0 w-full bg-bg-color border-b border-input-color shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-heading-color hover:bg-gray-50 hover:text-action-color transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}