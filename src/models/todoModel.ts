import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.todo.findMany({
    include: {
      items: true,
    },
  });
};

export const deleteTodo = async (id: number) => {
  return await prisma.todo.delete({
    where: { id: id },
  });
};

export const createTodo = async (title: string, description: string) => {
  return await prisma.todo.create({
    data: {
      title,
      description,
    },
  });
};
