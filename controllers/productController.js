import productModel from "../models/Product.js";
import helpers from "../helpers/commonHelpers.js";
import config from "../config/config.js";

const { response } = helpers;

const allProducts = (req, res) => {
  productModel
    .find({ status: config.ACTIVE })
    .sort({ createdAt: "desc" })
    .then((data) => {
      res.json(response(true, data, "Data found  successfully"));
    })
    .catch((err) => {
      res.json(response(false, [], "No products found"));
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
      res.json(response(true, [], "Product added successfuly"));
    })
    .catch((err) => {
      res.json(response(false, [], err.message));
    });
};

const productDetails = (req, res) => {
  productModel
    .find({ _id: req.params.id })
    .then((product) => {
      res.status(200).json(response(true, product, "Success"));
    })
    .catch((err) => {
      res.status(404).json(response(false, [], "Failure"));
    });
};

const deleteProduct = (req, res) => {
  productModel
    .findByIdAndUpdate(req.params.id, { status: config.DELETED })
    .then((success) => {
      res.status(200).json(response(true, [], "Success"));
    })
    .catch((err) => {
      res.status(500).json(response(false, [], "Something went wrong!"));
    });
};

const updateProduct = (req, res) => {
  productModel
    .findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
    })
    .then((succcess) => {
      res.status(200).json(response(true, [], "Success"));
    })
    .catch((err) => {
      res.status(500).json(response(false, [], "Something went wrong!"));
    });
};

export {
  allProducts,
  addProduct,
  productDetails,
  deleteProduct,
  updateProduct,
};
