import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Bell, Search, Menu, Command, LogOut } from "lucide-react";
import SidebarNavigation from "@/shared/components/navigation/DashboardNavigation";
import CustomerSupportWidget from "@/shared/components/widgets/CustomerAssistance";
import NotificationDropdown from "@/shared/components/notification/Notification";
import UserMenuDropdown from "@/shared/components/widgets/UserMenuDropdown";




export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;


  if (!userId) return <p>Please log in to see your dashboard.</p>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 bg-white border-r border-input-color">
        
        <div className="h-16 flex items-center px-6 border-b border-input-color">
          <div className="flex items-center gap-2 text-heading-color">
            <div className="p-1 bg-black text-white rounded-md">
                <Command className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-tight text-sm">MarkedByFrancene</span>
          </div>
        </div>

        <div className="flex-1 py-4 overflow-y-auto">
           <SidebarNavigation />
        </div>

        <div className="p-4 border-t border-input-color">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-label-color hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
             <LogOut className="w-4 h-4" />
             Sign Out
          </button>
        </div>

      </aside>

      <div className="lg:pl-64 flex flex-col flex-1 h-full">

        <header className="h-16 flex items-center justify-between gap-4 border-b border-input-color bg-white px-6 sticky top-0 z-30">
          
          <button className="lg:hidden p-2 -ml-2 text-label-color">
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-md hidden md:flex items-center gap-2 text-label-color bg-gray-50 px-3 py-2 rounded-lg border border-input-color focus-within:border-action-color focus-within:ring-1 focus-within:ring-action-color transition-all">
            <Search className="w-4 h-4" />
            <input 
              placeholder="Search appointments..." 
              className="bg-transparent outline-none text-sm w-full text-heading-color placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <NotificationDropdown />
            
            <div className="h-6 w-px bg-input-color mx-1" />

            <UserMenuDropdown 
              name={session.user?.name} 
              email={session.user?.email} 
            />
            
          </div>
        </header>

        <CustomerSupportWidget />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}