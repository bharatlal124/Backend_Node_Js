import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let product = ProductModel.get();
    console.log(product);

    res.render("products", { products: product });
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }
}
