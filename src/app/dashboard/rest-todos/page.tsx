import prisma from "@/app/lib/prisma";
import { TodosGrids } from "@/todos";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany();
  return (
    <div>
      {/* TODO: Formulario para agregar  */}
      <TodosGrids todos={todos} />
    </div>
  );
}
