"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.addItem = void 0;
const itemModel_1 = require("../models/itemModel");
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { itemId } = req.params;
    const { title } = req.body;
    try {
        const newItem = yield (0, itemModel_1.createItem)(title, parseInt(itemId));
        if (newItem) {
            console.log("worked");
            res
                .status(200)
                .json({ data: newItem, message: "New item Created Successfully!!!" });
        }
        else {
            res.status(409).send("Bad Request");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Errorr");
    }
});
exports.addItem = addItem;
const removeItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const { id } = req.params;
        const deleted = yield (0, itemModel_1.deleteTodoItem)(parseInt(id));
        if (deleted) {
            res.status(200).send("Todo deleted successfully!!!");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.removeItem = removeItem;
