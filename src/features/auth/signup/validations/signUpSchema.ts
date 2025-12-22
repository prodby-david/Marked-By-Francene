import { z } from "zod";

const passwordSchema = z
  .string()
  .nonempty("Password is required")
  .min(6, "Password must be at least 6 characters")
  .max(20, "Password cannot exceed 20 characters");

const nameSchema = z
  .string()
  .nonempty("Name must not be empty.")
  .max(50, "Name cannot exceed 50 characters")
  .regex(/^[A-Za-z\s'-]+$/, "Name must contain characters only.");

export const signUpSchema = z.object({
  firstname: nameSchema,
  lastname: nameSchema,
  email: z.string().email("Invalid email address"),
  password: passwordSchema
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
