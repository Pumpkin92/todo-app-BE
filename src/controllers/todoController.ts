import { Request, Response } from "express";
import { z } from "zod";
import { createTodo, deleteTodo, getAllTodos } from "../models/todoModel";
import { todoSchema } from "../schemas/todoSchema";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const allTodos = await getAllTodos();
    if (allTodos) {
      res.status(200).json({ data: allTodos, message: "All Todos" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const addTodo = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const result = todoSchema.safeParse(req.body);

  if (!result.success) {
    throw new Error("Invalid input data");
  }
  try {
    const newTodo = await createTodo(title, description);
    if (newTodo) {
      console.log("worked");
      res
        .status(200)
        .json({ data: newTodo, message: "New Todo Created Successfully!!!" });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const removeTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleted = await deleteTodo(parseInt(id));
    if (deleted) {
      res.status(200).send("Todo deleted successfully!!!");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
