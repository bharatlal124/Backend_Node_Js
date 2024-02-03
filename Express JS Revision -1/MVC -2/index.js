import express from "express";
import path from "path";
import ejslayouts from "express-ejs-layouts";

import ProductController from "./src/controllers/product.controller.js";
import validationMiddleware from "./src/middlewares/validation.middleware.js";

const server = express();

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejslayouts);

const productController = new ProductController();
server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);

server.get("/update-product/:id", productController.getUpdateProductView);

server.post("/", validationMiddleware, productController.addnewProduct);

server.post("/update-product", productController.postUpdateProduct);

server.post("/delete-product/:id", productController.deleteProduct);

server.use(express.static("src/views"));

server.listen(3200, () => {
  console.log("listening on port 3200");
});
