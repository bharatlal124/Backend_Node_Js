// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // Write your code here
  const token = req.cookies.jwtToken;

  if (!token) {
    return res.status(401).json({ success: false, msg: "Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ success: false, msg: "Token expired" });
      } else {
        return res.status(401).json({ success: false, msg: "Invalid token" });
      }
    }

    // If token is valid, attach the decoded payload to the request
    req.user = decoded;
    next();
  });
};

export default jwtAuth;
