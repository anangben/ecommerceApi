import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";

//Make database connection

await mongoose.connect(process.env.MONGO_URI);

// Create an express app
const app = express();

//Use global middlewares always above the use route
app.use(express.json());
// Use route
app.use(productsRouter);

// Listen for incoming request
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
