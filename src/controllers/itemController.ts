import { Request, Response } from "express";
import { createItem, deleteTodoItem } from "../models/itemModel";

export const addItem = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const { title } = req.body;
  try {
    const newItem = await createItem(title, parseInt(itemId));
    if (newItem) {
      res
        .status(200)
        .json({ data: newItem, message: "New item Created Successfully!!!" });
    } else {
      res.status(409).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Errorr");
  }
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await deleteTodoItem(parseInt(id));
    if (deleted) {
      res.status(200).send("Todo deleted successfully!!!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
