export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getServerSession } from "@/app/auth/actions/auth-actions";
import prisma from "@/app/lib/prisma";
// import { auth } from "@/auth";
import { TodosGrids } from "@/todos";
import { NewTodoServer } from "@/todos/components/NewTodoServer";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function ServerTodosPage() {
  // const session = await auth();
  const user = await getServerSession();

  if (!user) {
    redirect("/api/auth/signin");
  }

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });
  // console.log("Construido");

  return (
    <>
      <span className="mb-10 text-3xl">Server Actions</span>
      <div className="mx-5 mb-5 w-full px-3">
        <NewTodoServer />
      </div>
      <TodosGrids todos={todos} />
    </>
  );
}
