require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
    // console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection is Success");
  } catch (error) {
    console.error("MongoDB connection is Failled");
    process.exit(1);
  }
};

module.exports = connectDB;
