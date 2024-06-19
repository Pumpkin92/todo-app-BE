"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemSchema = void 0;
const zod_1 = require("zod");
const todoSchema_1 = require("./todoSchema");
exports.itemSchema = zod_1.z.object({
    todoId: zod_1.z.number().int().optional(),
    itemId: zod_1.z.number().int().optional(),
    title: zod_1.z.string(),
    completed: zod_1.z.number().int(),
    created: zod_1.z.number().int(),
    todos: todoSchema_1.todoSchema,
});
