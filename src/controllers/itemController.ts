import { Request, Response } from "express";
import { createItem, deleteTodoItem } from "../models/itemModel";

export const addItem = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const { title } = req.body;

  try {
    const newItem = await createItem(title, parseInt(itemId));
    if (newItem) {
      console.log("worked");
      res
        .status(200)
        .json({ data: newItem, message: "New item Created Successfully!!!" });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Errorr");
  }
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    console.log(todoId);
    const deleted = await deleteTodoItem(parseInt(todoId));
    if (deleted) {
      res.status(200).send("Todo deleted successfully!!!");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
