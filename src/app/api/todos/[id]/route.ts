import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Segments {
  params: {
    id: string;
  };
}
export async function GET(request: Request, { params }: Segments) {
  const { id } = params;
  const todoId = await prisma.todo.findFirst({ where: { id } });

  if (!todoId) {
    return NextResponse.json(
      { message: `Todo con ID: ${id} no existe` },
      { status: 404 }
    );
  }
  return NextResponse.json(todoId);
}

export async function PUT(request: Request, { params }: Segments) {
  const { id } = params;
  const todoId = await prisma.todo.findFirst({ where: { id } });

  if (!todoId) {
    return NextResponse.json(
      { message: `Todo con ID: ${id} no existe` },
      { status: 404 }
    );
  }

  const body = await request.json();
  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { ...body },
  });
  
  return NextResponse.json(updateTodo);
}
