// Please don't change the pre-written code
// Import the necessary modules here
import { validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  // Write your code here
  // await Promise.all(req.validationErrors());

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Respond with specific error messages for each validation issue
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }

  // If validation passes, move to the next middleware
  next();
};
