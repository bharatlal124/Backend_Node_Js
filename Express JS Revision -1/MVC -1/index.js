import express from "express";
import path from "path";
import ejslayouts from "express-ejs-layouts";

import ProductController from "./src/controllers/product.controller.js";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejslayouts);

const productController = new ProductController();
server.get("/", productController.getProducts);

server.use(express.static("src/views"));

// server.get("/", (req, res) => {
//   return res.send("welcome to app");
// });

server.listen(3200, () => {
  console.log("listening on port 3200");
});
