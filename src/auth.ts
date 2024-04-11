// signIn -> Para iniciar sesiónn
// signOut -> Para cerrar sesión
// auth -> Para saber si el usuario está autenticado
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "./app/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Si esta en false se autentifica pero restrinjo el acceso (denegado)
      // return false
      return true;
    },
    async jwt({ token, user, account, profile }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email ?? "no-email" },
      });

      if (dbUser?.isActive === false) {
        throw Error("Usuario no está activo");
      }

      token.roles = dbUser?.roles ?? ["no-roles"];
      token.id = dbUser?.id ?? "no-uuid";

      return token;
    },
    async session({ session, token, user }) {
      if (session && session.user) {
        session.user.roles = token.roles as string[];
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});
