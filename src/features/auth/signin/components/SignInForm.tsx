"use client";

import { Mail, Lock, ArrowRight } from "lucide-react";
import BackButton from "@/shared/components/buttons/BackButton";
import Link from "next/link";


export function SignInFormUI() {
  

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 relative">

      <div className="absolute top-4 left-5">
        <BackButton />
      </div>

      <div className="w-full max-w-[400px] space-y-8">
        
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-heading-color mb-2">Welcome Back</h1>
          <p className="text-label-color">
            Don't have an account?{" "}
            <Link 
            href={'/signup'} 
            className="text-action-color font-medium hover:underline">
                Create one
            </Link>
          </p>
        </div>

        <form className="space-y-4">

          {/* Email Field */}
          <div className="group relative">
            <div className="absolute left-3 top-2 text-gray-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-input-color bg-gray-50/50"
            />
          </div>

          {/* Password Field */}
          <div className="group relative">
            <div className="absolute left-3 top-2 text-gray-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-input-color bg-gray-50/50"
            />
          </div>

          {/* Optional: Forgot Password Link */}
          <div className="text-right">
             <a href="/forgot-password" className="text-sm text-label-color hover:text-action-color transition-colors">
                Forgot Password?
             </a>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-action-color text-white py-2 text-sm cursor-pointer rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-sm shadow-action-color transition-shadow duration-300"
          >
            Sign In <ArrowRight className="w-4 h-4" />
          </button>

        </form>
      </div>
    </div>
  );
}