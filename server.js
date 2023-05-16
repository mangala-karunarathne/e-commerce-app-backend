const express = require("express");
const app = express();
const port = 5000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", async(req, res, next) => {
  const Product = require("./models/ProductModel")
  try {
    const product = new Product
    product.name = "New Product Name 2"
    const productSaved = await product.save()
    console.log(productSaved === product);
    const products = await Product.find()
    console.log(products.length);
    res.send("Product Created " + product._id)
  } catch (error) {
    next(error)
  }
  // res.json({ message: "API running..." });
});


// Mongodb connection
const connectDB = require("./config/db")
connectDB();

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500).json({
      message: error.message,
      stack: error.stack
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
