// Please don't change the pre-written code
// Import the necessary modules here

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000, ratings: [] },
  { id: 2, name: "oneplus", price: 50000, ratings: [] },
  { id: 3, name: "samsung", price: 60000, ratings: [] },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here

  const product = products.find((p) => p.id == productId);

  // Check if the product exists
  if (!product) {
    return { success: false, msg: "Product not found" };
  }

  // Check if the user ID is valid
  if (isNaN(userId)) {
    return { success: false, msg: "user not found" };
  }

  // Validate the rating
  if (isNaN(rating) || rating < 0 || rating > 5) {
    return { success: false, msg: "rating should be b/w 0 and 5" };
  }

  // Check if the user has already rated the product
  const existingRating = product.ratings.find((r) => r.userId == userId);

  if (existingRating) {
    // Update the existing rating
    existingRating.rating = rating;
  } else {
    // Add a new rating for the user
    product.ratings.push({ userId, rating });
  }

  return { success: true, msg: "Rating added/updated successfully", product };
};
