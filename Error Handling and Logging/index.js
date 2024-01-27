import express from "express";
import userRoutes from "./src/features/user/routes/user.routes.js";
import { invalidRoutesHandlerMiddleware } from "./src/middlewares/invalidRoutes.middleware.js";
import {
  customErrorHandler,
  errorHandlerMiddleware,
} from "./src/middlewares/errorHandler.js";
import { logger } from "./src/middlewares/logger.middleware.js";
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("welcome to CN");
});

app.get("/test-custom-error", (req, res, next) => {
  try {
    throw new customErrorHandler(
      505,
      "testing app level custom error handling middleware"
    );
  } catch (error) {
    next(error);
  }
});

app.get("/test-unhandled-error", (req, res, next) => {
  try {
    throw new Error("Unknown Server Error");
  } catch (error) {
    next(error);
  }
});

app.use(invalidRoutesHandlerMiddleware);

// Middleware to handle errors
app.use(errorHandlerMiddleware);

// Global error handler
app.use((err, req, res, next) => {
  logger.error({
    level: "error",
    timestamp: new Date(),
    requestURL: req.originalUrl,
    errorMessage: err.message,
  });

  res
    .status(500)
    .json({
      success: false,
      msg: "Oops! Something went wrong... Please try again later!",
    });
});

export default app;
