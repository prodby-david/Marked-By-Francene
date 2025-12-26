import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { googleProvider } from "@/lib/googleProvider";
import { prisma } from "@/shared/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: `${user.firstname} ${user.lastname}`
        };
      }
    }),
    googleProvider
  ],
  session: { strategy: "jwt" },
  jwt: { secret: process.env.NEXT_AUTH_SECRET },
  pages: { signIn: "/signin" },
  secret: process.env.NEXT_AUTH_SECRET
};
