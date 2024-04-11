// signIn -> Para iniciar sesiónn
// signOut -> Para cerrar sesión
// auth -> Para saber si el usuario está autenticado
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
});
