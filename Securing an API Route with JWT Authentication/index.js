import express from "express";
import productRoutes from "./src/features/product/routes/product.routes.js";
import userRoutes from "./src/features/user/routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

// JWT secret key
process.env.JWT_SECRET = "your-secret-key";

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

export default app;
