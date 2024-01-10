// Please don't change the pre-written code

export const renderBlogForm = (req, res) => {
  // Write your code here
  res.render("createBlog", { title: "Create Blog", body: req.body });
};
