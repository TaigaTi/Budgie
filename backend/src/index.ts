import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from "./generated/prisma";

const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api", [
  require("./routes/userRoutes").default,
  require("./routes/categoryRoutes").default,
  require("./routes/transactionRoutes").default,
]);

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Budgie API!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});