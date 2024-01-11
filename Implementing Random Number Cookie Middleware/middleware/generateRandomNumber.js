// Please don't change the pre-written code
// Import the necessary modules here

export const generateRandomNumber = (req, res, next) => {
  if (!req.cookies.randomNumber) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    res.cookie("randomNumber", randomNumber, {
      maxAge: 1 * 24 * 60 * 60 * 100,
    });
  }

  // Write your code here to set the randomNumber as a cookie with a 1-day expiration.

  res.cookie("attemptsLeft", 2, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
  next();
};
