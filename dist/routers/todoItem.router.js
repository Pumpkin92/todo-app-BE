"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemController_1 = require("../controllers/itemController");
const express = require("express");
const itemRouter = express.Router();
itemRouter.delete("/:id", itemController_1.removeItem);
itemRouter.post("/:itemId", itemController_1.addItem);
module.exports = itemRouter;
