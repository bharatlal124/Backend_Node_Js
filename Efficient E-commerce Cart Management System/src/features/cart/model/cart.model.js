// Please don't change the pre-written code
// Import the necessary modules here
// import {cartItem} from "../model/"

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const existingItem = cartItems.find(
    (item) => item.userId === userId && item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += Number(quantity);
  } else {
    const newItem = {
      id: cartItems.length + 1,
      userId: userId,
      productId: productId,
      quantity: Number(quantity),
    };
    cartItems.push(newItem);
  }

  return cartItems.filter((item) => item.userId === userId);
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  const index = cartItems.findIndex(
    (item) => item.userId === userId && item.id === Number(cartItemId)
  );

  if (index !== -1) {
    const deletedCartItem = cartItems.splice(index, 1)[0];
    return deletedCartItem;
  } else {
    return null;
  }
};
