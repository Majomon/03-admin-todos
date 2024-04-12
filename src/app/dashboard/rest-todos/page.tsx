export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getServerSession } from "@/app/auth/actions/auth-actions";
import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrids } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const user = await getServerSession();

  if (!user) {
    redirect("/api/auth/signin");
  }

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });
  
  return (
    <div>
      <div className="mx-5 mb-5 w-full px-3">
        <NewTodo />
      </div>
      <TodosGrids todos={todos} />
    </div>
  );
}
