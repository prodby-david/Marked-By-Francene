import { NextResponse } from "next/server";
import { signUpSchema } from "@/features/auth/signup";
import { SignUpServices } from "@/features/auth/signup/services/signup.server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = signUpSchema.parse(body);

    const user = await SignUpServices.createUser(data);

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: err.flatten().fieldErrors
        },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
