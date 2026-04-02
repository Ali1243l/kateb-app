import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "البريد الإلكتروني", type: "email", placeholder: "example@university.edu" },
        password: { label: "كلمة المرور", type: "password" }
      },
      async authorize(credentials, req) {
        // Logic will connect to Prisma here
        // For visual scaffolding, we allow a dummy login
        if (credentials?.email && credentials?.password) {
          return { id: "1", name: "أحمد محمد", email: credentials.email };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
};
