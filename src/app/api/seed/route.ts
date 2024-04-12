// rag
import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from users

  const user = await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcryptjs.hashSync("123456"),
      roles: ["admin", "cliente", "super-user"],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: "Piedra del poder" },
          { description: "Piedra del tiempo" },
          { description: "Piedra del espacio" },
          { description: "Piedra del realidad" },
        ],
      },
    },
  });

  // await prisma.todo.createMany({
  //   data: [
  //     { description: "Piedra del alma", complete: true },
  //     { description: "Piedra del poder" },
  //     { description: "Piedra del tiempo" },
  //     { description: "Piedra del espacio" },
  //     { description: "Piedra del realidad" },
  //   ],
  // });

  return NextResponse.json({ message: "Seed Execute" });
}
