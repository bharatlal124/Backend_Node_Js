// Please don't change the pre-written code
// Import the necessary modules here
import { addToCart, removeFromCart } from "../model/cart.model.js";
import jwtAuth from "../../../middlewares/jwtAuth.js";

export const addToCartController = (req, res) => {
  // Write your code here
  try {
    const { productId, quantity } = req.query;

    // Input validation
    if (!productId || !quantity) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid input parameters" });
    }

    const userId = req.userId;

    // Call addToCart model function
    const cartItems = addToCart(userId, productId, quantity);

    return res.status(201).json({ success: true, item: cartItems });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  try {
    const itemId = req.params.itemId;

    // Input validation
    if (!itemId) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid input parameters" });
    }

    const userId = req.userId;

    // Call removeFromCart model function
    const deletedCartItem = removeFromCart(userId, itemId);

    if (deletedCartItem) {
      return res.status(200).json({ success: true, deletedCartItem });
    } else {
      return res
        .status(404)
        .json({ success: false, msg: "Item not found in the cart" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};
