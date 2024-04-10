import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todoId = await prisma.todo.findFirst({ where: { id } });
  return todoId;
};

const deleteTodo = async (id: string) => {
  const deleteTodoId = await prisma.todo.deleteMany({ where: { id } });
  return deleteTodoId;
};

/* GET */
export async function GET(request: Request, { params }: Segments) {
  const todoId = await getTodo(params.id);

  if (!todoId) {
    return NextResponse.json(
      { message: `Todo con ID: ${params.id} no existe` },
      { status: 404 }
    );
  }
  return NextResponse.json(todoId);
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

/* PUT */
export async function PUT(request: Request, { params }: Segments) {
  const todoId = await getTodo(params.id);

  if (!todoId) {
    return NextResponse.json(
      { message: `Todo con ID: ${params.id} no existe` },
      { status: 404 }
    );
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const updateTodo = await prisma.todo.update({
      where: { id: params.id },
      data: { complete, description },
    });

    return NextResponse.json(updateTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

/* DELETE TODO ID*/
export async function DELETE(request: Request, { params }: Segments) {
  const todoId = await deleteTodo(params.id);

  if (!todoId) {
    return NextResponse.json(
      { message: `Todo con ID: ${params.id} no existe` },
      { status: 404 }
    );
  }
  return NextResponse.json(todoId);
}
