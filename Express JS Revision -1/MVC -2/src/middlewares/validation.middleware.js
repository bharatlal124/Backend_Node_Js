import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
  //1.
  const rules = [
    body("name").notEmpty().withMessage("Name is Required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price should be a positive number"),
    body("imageUrl").isURL().withMessage("Invalid Url"),
  ];

  //2.
  await Promise.all(rules.map((rule) => rule.run(req)));

  //3.
  var validationErrors = validationResult(req);
  console.log(validationErrors);

  //4.

  if (!validationErrors.isEmpty()) {
    return res.render("new-product", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
};

export default validateRequest;
