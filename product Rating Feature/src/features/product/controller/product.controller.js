// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts, rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const { userId, productId, rating } = req.query;

  if (!userId || isNaN(userId)) {
    return res.json({ success: false, msg: "Invalid user ID" });
  }

  if (!productId || isNaN(productId)) {
    return res.json({ success: false, msg: "Invalid product ID" });
  }

  const parsedRating = parseInt(rating);
  if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
    return res.json({
      success: false,
      msg: "Rating should be between 0 and 5",
    });
  }

  // Call the model function to handle rating
  const updatedProduct = rateProductModel(productId, userId, parsedRating);

  if (!updatedProduct.success) {
    return res.json({ success: false, msg: updatedProduct.msg });
  }

  // Respond with the updated product details
  res.json({
    success: true,
    msg: "Product rated successfully",
    product: updatedProduct.product,
  });
};
