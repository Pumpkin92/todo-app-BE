import { addItem, removeItem } from "../controllers/itemController";

const express = require("express");
const itemRouter = express.Router();

itemRouter.delete("/:id", removeItem);
itemRouter.post("/:itemId", addItem);

module.exports = itemRouter;
