"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        return false;
      }

      return true;
    } catch (err) {
      setError("Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
