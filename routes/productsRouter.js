import express from "express";
import { allProducts, addProduct } from "../controllers/productController.js";

const productsRouter = express.Router();

productsRouter.get("/", allProducts);
productsRouter.post("/addProduct", addProduct);

export default productsRouter;
