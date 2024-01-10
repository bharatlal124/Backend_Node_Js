// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

// Write your code here
export const updateUser = (req, res) => {
  // const { name, email, image } = req.body;
  if (req.body) {
    const updatedUser = {
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
    };

    updateUsers(updatedUser);

    res.render("update-form", { user: updatedUser });
  } else {
    // Handle the case where req.body is undefined
    res.status(400).send("Bad Request: Missing request body");
  }
};
