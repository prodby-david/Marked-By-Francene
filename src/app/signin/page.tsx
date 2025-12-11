import { SignInFormUI } from "@/features/auth/signin/components/SignInForm"
import { AuthImageSection } from "@/shared/components/auth_images/AuthImage";


export default function SignInPage(){
    return (
        <div>
            <div className="min-h-screen flex">
                <AuthImageSection />
                <SignInFormUI />
            </div>
        </div>
    )
}