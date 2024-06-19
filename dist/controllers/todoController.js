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
exports.removeTodo = exports.addTodo = exports.getTodos = void 0;
const todoModel_1 = require("../models/todoModel");
const todoSchema_1 = require("../schemas/todoSchema");
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield (0, todoModel_1.getAllTodos)();
        if (allTodos) {
            res.status(200).json({ data: allTodos, message: "All Todos" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const result = todoSchema_1.todoSchema.safeParse(req.body);
    if (!result.success) {
        throw new Error("Invalid input data");
    }
    try {
        const newTodo = yield (0, todoModel_1.createTodo)(title, description);
        if (newTodo) {
            console.log("worked");
            res
                .status(200)
                .json({ data: newTodo, message: "New Todo Created Successfully!!!" });
        }
        else {
            res.status(409).send("Bad Request");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.addTodo = addTodo;
const removeTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        const deleted = yield (0, todoModel_1.deleteTodo)(parseInt(id));
        if (deleted) {
            res.status(200).send("Todo deleted successfully!!!");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.removeTodo = removeTodo;
