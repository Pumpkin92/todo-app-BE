"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const zod_1 = require("zod");
exports.todoSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
