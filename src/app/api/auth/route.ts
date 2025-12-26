import { prisma } from "@/shared/lib/prisma";
import bcrypt from "bcryptjs";
import { rateLimit } from "@/shared/lib/rate-limiter";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  try {
    await rateLimit(`signin:email:${email}`, 5, 60);
    await rateLimit(`signin:ip:${ip}`, 5, 60);
  } catch {
    return NextResponse.json(
      { error: "Too many requests", retryAfter: 60 },
      { status: 429 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    {
      id: user.id,
      email: user.email,
      name: `${user.firstname} ${user.lastname}`,
    },
    { status: 200 },
  );
}
