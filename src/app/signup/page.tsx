'use client'

import { AuthImageSection } from "@/shared/components/auth_images/AuthImage";
import SignUpForm from "@/features/auth/signup/components/SignUpForm";

export default function SignUpPage() {
  return (
      <div>
        <div className="min-h-screen flex">
          <AuthImageSection />
          <SignUpForm />
        </div>
      </div>
  )
}