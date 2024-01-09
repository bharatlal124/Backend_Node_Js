// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  productModel = new ProductModel();

  getProducts = (req, res) => {
    // Write your code here
    const fetchedProducts = this.productModel.fetchProducts();
    res.render("product", { products: fetchedProducts });
  };
}
