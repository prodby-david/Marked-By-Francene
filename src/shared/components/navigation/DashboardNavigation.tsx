"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calendar, Sparkles, Settings, History } from "lucide-react";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Book Appointment", href: "/reserve", icon: Calendar },
  { name: "History", href: "/history", icon: History },
  { name: "Services", href: "/services", icon: Sparkles },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-3 space-y-1">
      <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-4">
        Menu
      </p>
      
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${isActive
                ? "bg-action-color/10 text-action-color" 
                : "text-label-color hover:bg-gray-50 hover:text-label-color" 
              }
            `}
          >
            <item.icon className={`w-4 h-4 ${isActive ? "text-action-color" : "text-gray-400"}`} />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}