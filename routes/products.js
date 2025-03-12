import { Router } from "express";
import {
  addProduct,
  countProducts,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.js";
import { localUpload } from "./middlewares/upload.js";

//Create products router
const productsRouter = Router();

//Create products router level middleware
// const productsRouter.use =

//Define routes
productsRouter.post("/products", localUpload.single("image"), addProduct); //("/products", uploadfile(lowest middleware), addProduct(always the last) -- endpoint specific middleware-- handlers RUns from left to right)
productsRouter.get("/products", getProducts);
productsRouter.get("/products", countProducts);
productsRouter.patch("/products/:id", updateProduct);
productsRouter.delete("/products/:id", deleteProduct);

// export router
export default productsRouter;
