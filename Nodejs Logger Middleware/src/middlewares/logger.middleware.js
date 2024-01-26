// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs";

// Write your code here

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  if (req.originalUrl.startsWith("/api/user")) {
    const timestamp = new Date().toString();
    const reqUrl = `req URL: ${req.originalUrl}`;
    const reqBody = req.body ? `reqBody: ${JSON.stringify(req.body)}` : "";

    const logEntry = `${timestamp}\n${reqUrl}\n${reqBody}\n\n`;

    // Append log entry to 'log.txt'
    fs.appendFile("log.txt", logEntry, (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      }
    });
  }

  next();
};
export default loggerMiddleware;
