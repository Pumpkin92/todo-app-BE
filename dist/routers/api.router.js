"use strict";
const express = require("express");
const apiRouter = express.Router();
const todoRouter = require("./todo.router");
const itemRouter = require("./todoItem.router");
apiRouter.use(express.json());
apiRouter.use("/todos", todoRouter);
apiRouter.use("/item", itemRouter);
module.exports = apiRouter;
