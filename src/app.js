import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";

// dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoryRoutes);

export default app;