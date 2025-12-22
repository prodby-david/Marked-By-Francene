import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/shared/lib/prisma";
import bcrypt from "bcryptjs";
import { googleProvider } from "@/lib/googleProvider";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required.')
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        const isValidUser = user ? await bcrypt.compare(credentials.password, user.password) : false;

        if (!user || !isValidUser) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id,
          name: `${user.firstname} ${user.lastname}`,
          email: user.email,
        };
      },
    }),
    googleProvider,
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXT_AUTH_SECRET,
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
