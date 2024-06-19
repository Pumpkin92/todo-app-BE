import { addTodo, getTodos, removeTodo } from "../controllers/todoController";
const express = require("express");
const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.delete("/:id", removeTodo);
todoRouter.post("/create", addTodo);

module.exports = todoRouter;
