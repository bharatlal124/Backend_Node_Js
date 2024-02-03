import path from "path";
import ProductModel from "../models/product.model.js";

class ProductController {
  getProducts(req, res) {
    let product = ProductModel.getAll();
    // console.log(product);
    res.render("index", { products: product });
  }

  getAddForm(req, res) {
    return res.render("new-product", { errorMessage: null });
  }

  addnewProduct(req, res) {
    //validate data
    // console.log(req.body);
    ProductModel.add(req.body);
    let products = ProductModel.getAll();
    // return res.send();
    return res.render("index", { products: products });
  }

  getUpdateProductView(req, res, next) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);

    if (productFound) {
      res.render("update-product", {
        product: productFound,
        errorMessage: null,
      });
    } else {
      res.status(401).send("Product not found");
    }
  }

  postUpdateProduct(req, res, next) {
    ProductModel.update(req.body);
    let products = ProductModel.getAll();
    // return res.send();
    return res.render("index", { products: products });
  }

  deleteProduct(req, res) {
    const id = req.params.id;

    const productFound = ProductModel.getById(id);
    if (!productFound) {
      return res.status(401).send("Product not Found");
    }

    ProductModel.delete(id);
    var products = ProductModel.getAll();
    res.render("index", { products });
  }
}

export default ProductController;
