import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/category";
import projectRouter from "./routes/project";
import serviceRouter from "./routes/service";
import settingRouter from "./routes/setting";
import aboutRouter from "./routes/about";
import iconRouter from "./routes/icon";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", projectRouter);
app.use("/api", serviceRouter);
app.use("/api", settingRouter);
app.use("/api", aboutRouter);
app.use("/api", iconRouter);

mongoose.connect("mongodb://127.0.0.1:27017/we17303");

export const viteNodeApp = app;
