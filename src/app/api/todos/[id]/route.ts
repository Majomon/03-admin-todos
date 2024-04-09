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
