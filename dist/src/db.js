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
exports.deleteTodoItem = exports.deleteTodo = exports.updateTodo = exports.createItem = exports.createTodo = void 0;
//db.ts inside src folder
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// export const createUser = async (
//   username: string,
//   password: string,
//   email: string
// ) => {
//   return await prisma.user.create({
//     data: {
//       username,
//       password,
//       email,
//     },
//   });
// };
const createTodo = (title, description) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.todo.create({
        data: {
            title,
            description,
        },
    });
});
exports.createTodo = createTodo;
const createItem = (title, itemId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.item.create({
        data: {
            title,
            itemId,
        },
    });
});
exports.createItem = createItem;
// export const getAllTodos = async () => {
//   return await prisma.todo.findMany({
//     // where: {
//     //   username: username,
//     // },
//     include: {
//       items: true,
//     },
//   });
// if (!user) {
//   throw new Error(`User with username not found`);
// }
// return user;
// };
const updateTodo = (todoId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.todo.update({
        where: { id: todoId },
        data,
    });
});
exports.updateTodo = updateTodo;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.todo.delete({
        where: { id: id },
    });
});
exports.deleteTodo = deleteTodo;
const deleteTodoItem = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.item.delete({
        where: { todoId: todoId },
    });
});
exports.deleteTodoItem = deleteTodoItem;
exports.default = prisma;
