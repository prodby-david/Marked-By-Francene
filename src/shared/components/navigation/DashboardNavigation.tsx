import NavigationLogo from "../logo/NavigationLogo"
import Link from "next/link"
import SignOutButton from "../buttons/SignOut"


export default function DashboardNavigation(){

    return (
         <nav className="w-[320px] min-h-screen bg-white/80 shadow-sm text-action-color flex flex-col items-center justify-around">

            <NavigationLogo />

            <div className="flex flex-col items-center">
                <Link href={'/dashboard'}>Home</Link>
                <Link href={'/profile'}>Profile</Link>
                <Link href={'/settings'}>Settings</Link>
            </div>

            <SignOutButton />



         </nav>
    )

}