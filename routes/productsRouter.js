import express from "express";
import {
  allProducts,
  addProduct,
  productDetails,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

const productsRouter = express.Router();

productsRouter.get("/", allProducts);
productsRouter.post("/addProduct", addProduct);
productsRouter.get("/productDetails/:id", productDetails);
productsRouter.get("/deleteProduct/:id", deleteProduct);
productsRouter.post("/updateProduct/:id", updateProduct);

export default productsRouter;
