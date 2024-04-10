import prisma from "@/app/lib/prisma";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany();
  return (
    <div>
      <h1>Page RestTodo</h1>
      {JSON.stringify(todos)}
    </div>
  );
}
