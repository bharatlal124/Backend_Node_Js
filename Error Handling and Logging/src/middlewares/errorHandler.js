// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";
import { logger } from "./logger.middleware.js";

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  // Log the error using Winston
  logger.error({
    level: "error",
    timestamp: new Date(),
    requestURL: req.originalUrl,
    errorMessage: err.message,
  });

  // Handle custom error
  if (err instanceof customErrorHandler) {
    res.status(err.statusCode).json({ success: false, msg: err.message });
  } else {
    next(err);
  }
};
