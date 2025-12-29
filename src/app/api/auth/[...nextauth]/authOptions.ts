import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { googleProvider } from "@/lib/googleProvider";
import { validateUser } from "@/features/auth/signin/services/signin.server";

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

        return validateUser(credentials.email, credentials.password);

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
