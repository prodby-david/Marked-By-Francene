import { Button } from "../ui/button"
import { ChevronLeft } from "lucide-react"

export default function BackButton(){
    return(
        <Button variant="ghost" className="text-sm cursor-pointer">
          <ChevronLeft /> Back to Home
        </Button>
    )
}