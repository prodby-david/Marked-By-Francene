import Link from "next/link"

export default function NavigationLogo(){
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <span className="text-sm font-bold text-heading-color tracking-tight">
              MarkedByFrancene<span className="text-action-color">.</span>
            </span>
        </Link>
    )
}