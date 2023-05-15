require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection is Succes");
} catch (error) {}
console.log("MongoDB connection is Faild");
process.exit(1);
};

