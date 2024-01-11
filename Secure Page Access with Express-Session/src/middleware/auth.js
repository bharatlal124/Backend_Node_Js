export const auth = (req, res, next) => {
  // Write your code here
  if (req.session && req.session.user) {
    // If the user is logged in, proceed to the next middleware
    next();
  } else {
    // If the user is not logged in, redirect to the login page
    res.redirect("/login");
  }
};
