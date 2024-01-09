// Import the necessary modules here
import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  productModel = new ProductModel();

  getProducts = (req, res) => {
    //  Write your code here

    const fetchedProducts = this.productModel.fetchProducts();

    // Convert the array of products to the specified format
    const formattedProducts = fetchedProducts.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    }));

    res.json(formattedProducts);
  };
}
