const connectDB = require("../config/db");
connectDB();

const categoryData = require("./categories");
const productData = require("./products");
const reviewData = require("./reviews");

const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel");
const Review = require("../models/ReviewModel");

const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    // await Product.collection.dropIndexes();

    await Category.collection.deleteMany({});
    await Product.collection.deleteMany({});
    await Review.collection.deleteMany({});

    await Category.insertMany(categoryData);
    // await Review.insertMany(reviewData);
    const reviews = await Review.insertMany(reviewData);
    const sampleProducts = productData.map((product) => {
      reviews.map((review) => {
        product.reviews.push(review._id)
      });
      return {...product}
    });
    await Product.insertMany(sampleProducts);

    console.log("Seeder data proceeded successfully...");

    process.exit();
  } catch (error) {
    console.log("Error occured while proceesing seeder data..", error);
    process.exit(1);
  }
};

importData();
