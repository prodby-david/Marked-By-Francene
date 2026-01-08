"use client";

import { useState, useRef, useEffect } from "react";
import { LogOut, User, Settings, ChevronDown, CreditCard } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface UserMenuProps {
  name?: string | null;
  email?: string | null;
}

export default function UserMenuDropdown({ name, email }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      
      {/* TRIGGER BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-3 p-1.5 pr-2 rounded-lg transition-all border border-transparent
          ${isOpen ? "bg-gray-100 border-gray-200" : "hover:bg-gray-50 hover:border-gray-200"}
        `}
      >
        {/* Avatar */}
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[#5F6368] font-bold text-xs border border-[#DADCE0] shadow-sm">
          {name?.charAt(0) || "U"}
        </div>
        
        {/* Name (Desktop only) */}
        <div className="text-right hidden md:block">
          <p className="text-sm font-semibold text-[#202124] leading-none">{name}</p>
        </div>

        {/* Chevron Icon */}
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
          
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <p className="text-sm font-semibold text-[#202124]">{name}</p>
            <p className="text-xs text-[#5F6368] truncate" title={email || ""}>
              {email}
            </p>
          </div>

          {/* Menu Items */}
          <div className="p-1.5 space-y-0.5">
            <Link href="/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-[#5F6368] hover:text-[#202124] hover:bg-gray-50 rounded-lg transition-colors">
              <User className="w-4 h-4" />
              My Profile
            </Link>
            <Link href="/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-[#5F6368] hover:text-[#202124] hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </Link>
            <Link href="/billing" className="flex items-center gap-2 px-3 py-2 text-sm text-[#5F6368] hover:text-[#202124] hover:bg-gray-50 rounded-lg transition-colors">
              <CreditCard className="w-4 h-4" />
              Billing
            </Link>
          </div>

          {/* Sign Out Divider */}
          <div className="h-px bg-gray-100 mx-2 my-1" />

          {/* Logout Button */}
          <div className="p-1.5">
            <button 
              onClick={() => signOut()}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>

        </div>
      )}
    </div>
  );
}