"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { publicApi } from "@/shared/lib/axios";

export function useSignIn() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {

    setLoading(true);
    setError(null);

    try{

      const res = await publicApi.post('/api/auth', {
        email,
        password,
      })

      if(res.status === 200) {
          await signIn("credentials", {
          email,
          password,
          redirect: false
        })
      }
       return true;
    }

    catch(error: any){
      if (error.response) {
        setError(error.response.data?.error ?? "Sign in failed");
      } else {
        setError("Network error");
      }
      return false;
    } finally {
      setLoading(false);
    }

  }

  return { login, loading, error };
}
