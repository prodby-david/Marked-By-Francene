import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import { Bell, Search, Menu, Command } from "lucide-react";
import Link from "next/link";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
  
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 bg-white border-r border-gray-200">
        
         <div className="h-16 flex items-center px-6 border-b border-gray-100">

          <div className="flex items-center gap-2 text-gray-900">
            <div className="p-1 bg-black text-white rounded-md">
                <Command className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-tight text-sm">MarkedByFrancene</span>
          </div>

        </div>

        <div>
          <Link href={'/'}>Dashboard</Link>
        </div>

      </aside>

      <div className="lg:pl-64 flex flex-col flex-1 h-full">

        <header className="h-16 flex items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 sticky top-0 z-30">

          <button className="lg:hidden p-2 -ml-2 text-gray-500">
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-md hidden md:flex items-center gap-2 text-gray-400 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition-all">
            <Search className="w-4 h-4" />
            <input 
              placeholder="Search..." 
              className="bg-transparent outline-none text-sm w-full text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">
            
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="h-6 w-px bg-gray-200 mx-1" />

            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-gray-900 leading-none">{session.user?.name}</p>
              </div>

              <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs border border-gray-200">
                {session.user?.name?.charAt(0) || "U"}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}