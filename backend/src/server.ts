import cors from "cors";
import { dbConnect } from "./configs/database.config";
import dotenv from "dotenv";
import express from "express";
import foodRouter from "./routers/coffee.router";
import userRouter from "./routers/user.router";

dbConnect();

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/coffee", foodRouter)
app.use("/api/users", userRouter)

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
