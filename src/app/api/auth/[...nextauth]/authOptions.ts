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
  jwt: { secret: process.env.NEXT_AUTH_SECRET },
  pages: { signIn: "/signin" },
  secret: process.env.NEXT_AUTH_SECRET
};
