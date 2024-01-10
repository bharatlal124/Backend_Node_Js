// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here

  const { title, description, image } = req.body;
  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("The title field should not be empty.");
  } else if (title.trim().length < 3) {
    errors.push("The title field should contain at least 3 characters.");
  }

  // Validate Description
  if (!description || description.trim().length === 0) {
    errors.push("The description field should not be empty.");
  } else if (description.trim().length < 10) {
    errors.push("The description field should contain at least 10 characters.");
  }

  // Validate Image URL
  if (!isValidUrl(image)) {
    errors.push("The image URL provided should be a valid URL.");
  }

  if (errors.length > 0) {
    res.render("addBlog", { errors, success: false });
  } else {
    res.status(201).render("addBlog", { errors: null, success: true });
  }

  // res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
