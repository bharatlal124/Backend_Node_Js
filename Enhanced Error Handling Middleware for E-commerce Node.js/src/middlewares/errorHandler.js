// Please don't change the pre-written code

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  const statusCode = err.statusCode || 500;
  const message =
    err.message || "Oops! Something went wrong... Please try again later!";
  res.status(statusCode).json({ success: false, error: message });
};
