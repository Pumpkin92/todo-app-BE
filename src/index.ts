import express, { Request, Response } from "express";

import cors from "cors";

const apiRouter = require("./routers/api.router");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
