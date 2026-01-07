import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { googleProvider } from "@/lib/googleProvider";
import { validateUser } from "@/features/auth/signin/services/signin.server";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/shared/lib/prisma";



export const authOptions: AuthOptions = {
  
  adapter: PrismaAdapter(prisma),

  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await validateUser(
          credentials.email,
          credentials.password
        );

        if (!user) {
          return null;
        }

        if (!user.password) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? null,
        };
      }

    }),
    googleProvider
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {

      if (user) {
        token.id = user.id;  
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  jwt: { secret: process.env.NEXT_AUTH_SECRET },
  pages: { signIn: "/signin" },
  secret: process.env.NEXT_AUTH_SECRET
};
