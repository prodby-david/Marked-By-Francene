import { z } from "zod";

const passwordSchema = z
  .string()        
  .nonempty('Password is required') 
  .min(6, "Password must be at least 6 characters") 
  .max(20, "Password cannot exceed 20 characters")  

const nameSchema = z
  .string()
  .nonempty('Name must not be empty.')
  .max(50, "Name cannot exceed 50 characters")
  .regex(/^[A-Za-z\s'-]+$/, "Name cannot contain numbers or special characters"); 
  

export const signUpSchema = z.object({
  firstname: nameSchema,
  lastname: nameSchema,
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
  confirmPassword: z.string().nonempty("Confirm password is required"),
}).superRefine((data, ctx) => {
    if (data.confirmPassword && data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Passwords do not match",
        code: "custom",
      });
    }
  });


export type SignUpSchema = z.infer<typeof signUpSchema>;
