// rag
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  /* Cantidad de resultados */
  const take = Number(searchParams.get("take") ?? "10");
  /* Los primeros resultados que me salto */
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(+take)) {
    return NextResponse.json(
      { message: "Take tiene que ser un número" },
      { status: 400 }
    );
  }

  if (isNaN(+skip)) {
    return NextResponse.json(
      { message: "Skip tiene que ser un número" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });
  //   const todos = await prisma.todo.findMany({
  //     // Con el + lo convierto en number
  //     take: +take,
  //     skip: +skip,
  //   });
  return NextResponse.json(todos);
}

const postSchema=yup.object({
  
})

export async function POST(request: Request) {
  const body = await request.json();

  const todo = await prisma.todo.create({ data: body });
  return NextResponse.json(todo);
}
