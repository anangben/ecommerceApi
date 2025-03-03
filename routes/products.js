import { Router } from "express";
import {
  addProduct,
  countProducts,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.js";

//Create products router
const productsRouter = Router();

//Define routes
productsRouter.post("/products", addProduct);
productsRouter.get("/products", getProducts);
productsRouter.get("/products", countProducts);
productsRouter.patch("/products/:id", updateProduct);
productsRouter.delete("/products/:id", deleteProduct);

// export router
export default productsRouter;
