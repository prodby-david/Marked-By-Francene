"use client";

import { Mail, Lock } from "lucide-react";
import BackButton from "@/shared/components/buttons/BackButton";
import Link from "next/link";
import { useState } from "react";
import { useSignIn } from "../hooks/useSignIn"; 
import { useRouter } from "next/navigation";
import MakeupLoader from "@/shared/components/loader/loader";
import StatusModal from "@/shared/components/modals/modal";
import { signIn } from "next-auth/react";
import Image from "next/image";



export function SignInFormUI() {

  const { login, loading } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [modal, setModal] = useState({
    open: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirectLoading, setRedirectLoading] = useState(false);


  const [fieldError, setFieldError] = useState(""); 
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setRedirectLoading(true);
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setForm(prev => ({
    ...prev,
    [name]: value
  }));

  setFieldError("");
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setFieldError("Please fill in all fields");
      return;
    }

  const success = await login(form.email, form.password);
    if (success) {
      setModal({
        open: true,
        type: "success",
        title: "Welcome back 💄",
        message: "You have successfully signed in.",
      });
        
      setShouldRedirect(true);

    } else { 
      setModal({
        open: true,
        type: "error",
        title: "Sign in failed",
        message: "Invalid email or password.",
      });
    }

    setForm({
      email: "",
      password: ""
    })
    
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 relative">

      <div className="absolute top-3 left-3">
        <BackButton />
      </div>

      <div className="w-full max-w-lg space-y-8">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-heading-color mb-2">Welcome Back</h1>
          <p className="text-label-color">
            Don't have an account?{" "}
            <Link href={"/signup"} className="text-action-color font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="text-sm text-heading-color">Email</label>
            <div className="flex items-center border border-input-color rounded-md px-2">
              <Mail className="h-4 w-4 text-label-color" />
              <div className="mx-2 h-5 w-px bg-input-color" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className="flex-1 py-1.5 outline-none text-sm text-heading-color"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-heading-color">Password</label>
            <div className="flex items-center border border-input-color rounded-md px-2">
              <Lock className="h-4 w-4 text-label-color" />
              <div className="mx-2 h-5 w-px bg-input-color" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="flex-1 py-1.5 outline-none text-sm text-heading-color"
              />
            </div>
          </div>


          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-label-color hover:text-action-color transition-colors">
              Forgot Password?
            </Link>
          </div>

          {fieldError && (
            <p className="text-sm text-red-500 text-center">{fieldError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-action-color text-white py-2 text-sm cursor-pointer rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-sm shadow-action-color transition-shadow duration-300"
          >
            Sign in
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-input-color" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-label-color">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading || redirectLoading}
            className="w-full flex items-center justify-center gap-3 border rounded-xl py-2 text-sm cursor-pointer transition ease-in-out hover:shadow-sm duration-300"
          >
            <Image
              src="/images/google-icon.svg"
              alt="Google"
              width={18}
              height={18}
            />
            Google
          </button>

        </form>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <MakeupLoader text="Preparing your glam..." />
        </div>
      )}

      {redirectLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <MakeupLoader text="Entering your dashboard..." />
        </div>
      )}

      <StatusModal
        open={modal.open}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => {
        setModal((prev) => ({ ...prev, open: false }));
        if (modal.type === "success" && shouldRedirect) {
          setRedirectLoading(true);
          router.push("/dashboard");
        }
      }}
      />

    </div>
  );
}
