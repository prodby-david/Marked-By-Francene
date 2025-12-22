"use client";

import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import BackButton from "@/shared/components/buttons/BackButton";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import MakeupLoader from "@/shared/components/loader/loader";
import { useSignUp } from "../index";
import StatusModal from "@/shared/components/modals/modal";



type FormState = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Errors = Record<string, string>;

export default function SignUpForm() {
  const { signUp, loading } = useSignUp();

  const initialForm: FormState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const [modal, setModal] = useState({
    open: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: '',
  })

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});

  function validate(values: FormState): Errors {
    if (!values.firstname.trim()) {
      return { firstname: "First name is required" };
    }

    if (!values.lastname.trim()) {
      return { lastname: "Last name is required" };
    }

    if (!values.email.trim()) {
      return { email: "Email is required" };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return { email: "Invalid email address" };
    }

    if (!values.password) {
      return { password: "Password is required" };
    }

    if (values.password.length < 8) {
      return { password: "Password must be at least 8 characters" };
    }

    if (values.password !== values.confirmPassword) {
      return { confirmPassword: "Passwords do not match" };
    }

    return {};
  }


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm(prev => ({ ...prev, [name]: value }));

    setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { confirmPassword, ...payload } = form;

    try {
      await signUp(payload);

      setModal({
        open: true,
        type: "success",
        title: "Account Created!",
        message: "Press confirm to continue."
      });

      setForm(initialForm);
      setErrors({});
    } catch {
      setModal({
        open: true,
        type: "error",
        title: "Signing up failed",
        message: "Please try again later."
      });
    }
  }


  const border = (key: string) =>
    errors[key] ? "border-red-500" : "border-input-color";

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 relative">
      <div className="absolute top-4 left-5">
        <BackButton />
      </div>

      <div className="w-full max-w-lg space-y-6">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-heading-color mb-2">
            Create Account
          </h1>
          <p className="text-label-color">
            Already have an account?{" "}
            <Link href="/signin" className="text-action-color font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="text-sm">First Name</label>
              <div className={`flex items-center border ${border("firstname")} rounded-md px-2`}>
                <User className="h-4 w-4" />
                <div className="mx-2 h-5 w-px bg-input-color" />
                <input
                  name="firstname"
                  value={form.firstname}
                  placeholder='First name'
                  onChange={handleChange}
                  className="flex-1 py-1.5 text-sm outline-none w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="text-sm">Last Name</label>
              <div className={`flex items-center border ${border("lastname")} rounded-md px-2`}>
                <User className="h-4 w-4" />
                <div className="mx-2 h-5 w-px bg-input-color" />
                <input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder='Last name'
                  className="flex-1 py-1.5 text-sm outline-none w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm">Email</label>
            <div className={`flex items-center border ${border("email")} rounded-md px-2`}>
              <Mail className="h-4 w-4" />
              <div className="mx-2 h-5 w-px bg-input-color" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder='Email'
                className="flex-1 py-1.5 text-sm outline-none w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="text-sm">Password</label>
              <div className={`flex items-center border ${border("password")} rounded-md px-2`}>
                <Lock className="h-4 w-4" />
                <div className="mx-2 h-5 w-px bg-input-color" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder='Password'
                  className="flex-1 py-1.5 text-sm outline-none w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="text-sm">Confirm Password</label>
              <div className={`flex items-center border ${border("confirmPassword")} rounded-md px-2`}>
                <Lock className="h-4 w-4" />
                <div className="mx-2 h-5 w-px bg-input-color" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm password'
                  className="flex-1 py-1.5 text-sm outline-none w-full"
                />
              </div>
            </div>
          </div>

          {hasErrors && (
            <div className="text-center text-xs text-red-600">
              {Object.values(errors)[0]}
            </div>
          )}

          <button className="w-full bg-action-color text-white py-2 rounded-xl font-semibold text-sm cursor-pointer mt-2">
            Sign up
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-3 border rounded-xl py-2 text-sm cursor-pointer transition ease-in-out hover:shadow-sm duration-300"
          >
            <Image src="/images/google-icon.svg" alt="Google" width={18} height={18} />
            Google
          </button>
        </form>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <MakeupLoader text="Creating your account..." />
        </div>
      )}

      <StatusModal
        open={modal.open}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal(prev => ({ ...prev, open: false }))}
      />

    </div>
  );
}
