// Please don't change the pre-written code
// Import the necessary modules here
import { getUserCredentials } from "../features/user/model/user.model.js";
import { unauthorized } from "../features/user/model/user.model.js";
// import unautorized from "../utils/response.utils.js";

const basicAuthMiddleware = (req, res, next) => {
  // Write your code here
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return unauthorized(res, "Authorization  header is missing");
  }

  const credentials = Buffer.from(
    authHeader.split(" ")[1],
    "base64"
  ).toString();
  const [username, password] = credentials.split(":");

  const user = getUserCredentials(username, password);

  if (!user) {
    return unauthorized(res, "Invalid credentials");
  }
  req.user = user;
  next();
};

export default basicAuthMiddleware;
