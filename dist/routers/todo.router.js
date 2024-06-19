"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoController_1 = require("../controllers/todoController");
const express = require("express");
const todoRouter = express.Router();
todoRouter.get("/", todoController_1.getTodos);
todoRouter.delete("/:id", todoController_1.removeTodo);
todoRouter.post("/create", todoController_1.addTodo);
module.exports = todoRouter;
