const connectDB = require("../config/db");
connectDB();

const categoryData = require("./categories");
const Category = require("../models/CategoryModel");

const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    await Category.collection.deleteMany({});
    await Category.insertMany(categoryData);
    console.log("Seeder data proceeded successfully...");
    console.log(categoryData);
    process.exit();
  } catch (error) {
    console.log("Error occured while proceesing seeder data..", error);
    process.exit(1);
  }
};

importData();
