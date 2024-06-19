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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const itemSchema_1 = require("./schemas/itemSchema");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", apiRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// app.post("/signup", async (req: Request, res: Response) => {
//   try {
//     const { username, email, password } = req.body;
//     const newUser = await createUser(username, email, password);
//     const token = jwt.sign(
//       { username: username, userId: newUser.id },
//       "#1234astra"
//     );
//     res
//       .status(200)
//       .json({ message: "User Created Successfully!!!", token: token });
//   } catch (error) {
//     console.error("Error signing up:", error);
//     res.status(500).json({ message: "Error signing up" });
//   }
// });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// app.post("/login", async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const User = await checkUser(email, password);
//     if (!User) {
//       res.status(401).send("UnAuthorized !!!");
//     }
//     const token = jwt.sign({ email: email, userId: User?.id }, "#1234astra");
//     res.status(200).json({ token: token, message: "Login Succesfully!!!" });
//   } catch (error) {
//     console.error(error);
//     res.send(500).send("Internal Server Error");
//   }
// });
// sent to controller
// app.post("/createTodo", async (req: Request, res: Response) => {
//   const { title, description } = req.body;
//   const result = todoSchema.safeParse(req.body);
//   if (!result.success) {
//     throw new Error("Invalid input data");
//   }
//   try {
//     // const token = req.headers.authorization?.split(" ")[1];
//     // if (token) {
//     //   const decodeToken = jwt.decode(token) as jwt.JwtPayload | null;
//     //   const userId = decodeToken?.userId;
//     const newTodo = await createTodo(title, description);
//     if (newTodo) {
//       console.log("worked");
//       res
//         .status(200)
//         .json({ data: newTodo, message: "New Todo Created Successfully!!!" });
//     } else {
//       res.status(409).send("Bad Request");
//     }
//     // }
//     // else {
//     //   res.status(401).send("Unauthorized: Token not provided");
//     // }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Errorr");
//   }
// });
app.post("/createItem/:itemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { itemId } = req.params;
    const { title } = req.body;
    const result = itemSchema_1.itemSchema.safeParse(title);
    if (!result.success) {
        throw new Error("Invalid input data");
    }
    try {
        const newItem = yield (0, db_1.createItem)(title, parseInt(itemId));
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
}));
// app.patch("/updateTodo/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { title, description } = req.body;
//     await updateTodo(parseInt(id), { title, description });
//     res.status(200).send("Todo Updated Successfully!!!");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// sent to controller
//app.get("/getTodos", async (req: Request, res: Response) => {
//   try {
//     // const token = req.headers.authorization?.split(" ")[1];
//     // if (token) {
//     //   const decodeToken = jwt.decode(token) as jwt.JwtPayload | null;
//     //   const email = decodeToken?.email;
//     const allTodos = await getAllTodos();
//     if (allTodos) {
//       res.status(200).json({ data: allTodos, message: "All Todos" });
//     }
//     // res.status(404).send("No Todos Found !!!");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// sent to controller
// app.delete("/deleteTodo/:id", async (req: Request, res: Response) => {
//   try {
//     // debugger;
//     const { id } = req.params;
//     // const id = parseInt(req.params.id);
//     console.log(id);
//     const deleted = await deleteTodo(parseInt(id));
//     if (deleted) {
//       res.status(200).send("Todo deleted successfully!!!");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });
app.delete("/deleteTodoItem/:todoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // debugger;
        const { todoId } = req.params;
        // const id = parseInt(req.params.id);
        console.log(todoId);
        const deleted = yield (0, db_1.deleteTodoItem)(parseInt(todoId));
        if (deleted) {
            res.status(200).send("Todo deleted successfully!!!");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}));
