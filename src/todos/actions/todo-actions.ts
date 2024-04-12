"use server";

import { getServerSession } from "@/app/auth/actions/auth-actions";
import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleet = async (seconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const toggleTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  await sleet(3);
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `TODO con ID: ${id} no encontrado`;
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updateTodo;
};

export const addTodo = async (description: string) => {
  const user = await getServerSession();

  try {
    const todo = await prisma.todo.create({
      data: { description, userId: user?.id },
    });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch (error) {
    return { message: "Error creando todo" };
  }
};

export const deleteCompleted = async (): Promise<void> => {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath("/dashboard/server-todos");
};
