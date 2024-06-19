import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createItem = async (title: string, itemId: number) => {
  return await prisma.item.create({
    data: {
      title,
      itemId,
    },
  });
};

export const deleteTodoItem = async (todoId: number) => {
  return await prisma.item.delete({
    where: { todoId: todoId },
  });
};
