"use client";

import { Mail, Lock, User, ArrowRight } from "lucide-react";
import BackButton from "@/shared/components/buttons/BackButton";
import { useSignUpForm } from "../index";
import Link from "next/link";
import { error } from "console";



export function SignUpFormUI() {

  const { form, errors,  handleChange, handleSubmit } = useSignUpForm();

  return (

    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 relative">

      <div className="absolute top-4 left-5">
        <BackButton />
      </div>

      <div className="w-full max-w-[400px] space-y-8">
        
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-heading-color mb-2">Create Account</h1>
          <p className="text-label-color">
            Already have an account?{" "}
            <Link 
            href={'/signin'} 
            className="text-action-color font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div className="flex gap-2">

            <div className="group relative flex-1">
              
              <div className="absolute left-3 top-2 text-gray-400">
                <User className="h-5 w-5" />
              </div>

              <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="First name"
                className={`${errors.firstname ? 'border-red-500' : 'border-input-color'} w-full pl-10 pr-4 py-2 text-sm rounded-xl border`}
              />

              {errors.firstname && (
                <p className="text-red-500 text-sm mt-1 h-5">{errors.firstname || ' ' }</p>
              )}

            </div>

            <div className="group relative flex-1">
              <div className="absolute left-3 top-2 text-gray-400">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Last name"
                className={`${errors.lastname ? 'border-red-500' : 'border-input-color'} w-full pl-10 pr-4 py-2 text-sm rounded-xl border`}
              />

              {errors.lastname && (
                <p className="text-red-500 text-sm mt-1 h-5">{errors.lastname || ' '}</p>
              )}


            </div>
          </div>

          <div className="group relative">
            <div className="absolute left-3 top-2 text-gray-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-input-color bg-gray-50/50"
            />
          </div>

          <div className="group relative">
            <div className="absolute left-3 top-2 text-gray-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className={`${errors.password ? 'border-red-500' : 'border-input-color'} w-full pl-10 pr-4 py-2 text-sm rounded-xl border`}
            />
             {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
          </div>

          <div className="group relative">
            <div className="absolute left-3 top-2 text-gray-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`${errors.confirmPassword ? 'border-red-500' : 'border-input-color'} w-full pl-10 pr-4 py-2 text-sm rounded-xl border`}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-action-color text-white py-2 text-sm cursor-pointer rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-sm shadow-action-color transition-shadow duration-300"
          >
            Create Account <ArrowRight className="w-4 h-4" />
          </button>

        </form>
      </div>
    </div>
  );
}
