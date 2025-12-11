'use client'

import { SignUpFormUI } from "@/features/auth/signup";
import { AuthImageSection } from "@/shared/components/auth_images/AuthImage";

export default function SignUpPage() {
  return (
      <div>
        <div className="min-h-screen flex">
          <AuthImageSection />
          <SignUpFormUI />
        </div>
      </div>
  )
}