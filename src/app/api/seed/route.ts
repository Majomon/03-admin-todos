// rag
import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del poder" },
      { description: "Piedra del tiempo" },
      { description: "Piedra del espacio" },
      { description: "Piedra del realidad" },
    ],
  });

  //   const todo = await prisma.todo.create({
  //     data: { description: "Piedra del alma", complete: true },
  //   });

  //   console.log(todo);

  return NextResponse.json({ message: "Seed Execute" });
}
