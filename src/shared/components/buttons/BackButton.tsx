import { Button } from "../ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function BackButton(){
    return(
        <Button variant="ghost" className="text-sm cursor-pointer">
          <Link href={'/'} className="flex items-center">
            <ChevronLeft className="mr-1"/> Back to Home
          </Link>
        </Button>
    )
}