import { validateUser } from "@/features/auth/signin/services/signin.server";
import { rateLimit } from "@/shared/lib/rate-limiter";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { status: 400, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for") ?? "unknown";

    try {
      await rateLimit(`signin:email:${email}`, 5, 60);
      await rateLimit(`signin:ip:${ip}`, 5, 60);
    } catch {
      return NextResponse.json(
        { status: 429, message: "Too many requests, try again in 60 seconds" },
        { status: 429 }
      );
    }

    const user = await validateUser(email, password);
    if (!user) {
      return NextResponse.json(
        { status: 401, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        status: 200,
        message: "Sign-in successful",
        data: {
          id: user.id,
          email: user.email        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Sign-in error:", err);
    return NextResponse.json(
      { status: 500, message: "Internal server error" },
      { status: 500 }
    );
  }
}
