export const dynamic="force-dynamic"
export const revalidate = 0

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrids } from "@/todos";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany();
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrids todos={todos} />
    </div>
  );
}
