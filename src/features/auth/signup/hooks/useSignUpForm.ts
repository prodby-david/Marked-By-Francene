import { useState } from "react";
import { SignUpType, useSignUp, signUpSchema } from "../index";
import { ZodError } from "zod";


export function useSignUpForm() {
  const { signUp } = useSignUp();

  const initialForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const [form, setForm] = useState<Omit<SignUpType, "id" | "createdAt">>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setErrors(prev => ({
      ...prev,
      [e.target.name]: ""
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const validatedData = signUpSchema.parse(form);
      setErrors({});
      
      const { confirmPassword, ...data } = validatedData;

      await signUp(data);
      alert("User registered successfully");
      setForm(initialForm);
    } catch (err : any) {
         if (err instanceof ZodError) {
        const formatted: Record<string, string> = {};

        err.issues.forEach((issue) => {
          const field = issue.path[0] as string;
          formatted[field] = issue.message;
        });

        setErrors(formatted);
      } else {
        console.error(err);
      }
    }
  }

  return {
    form,
    errors,
    handleChange,
    handleSubmit
  };
}
