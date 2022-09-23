import productModel from "../models/Product.js";
import helpers from "../helpers/commonHelpers.js";

const allProducts = (req, res) => {
  productModel
    .find()
    .then((data) => {
      res.json(helpers.response(true, data, "Data found  successfully"));
    })
    .catch((err) => {
      res.json(helpers.response(false, [], "No products found"));
    });
};

const addProduct = (req, res) => {
  productModel
    .create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      category: req.body.category,
    })
    .then((success) => {
      res.json(helpers.response(true, [], "Product added successfuly"));
    })
    .catch((err) => {
      res.json(helpers.response(false, [], err.message));
    });
};

export { allProducts, addProduct };
