const express = require("express");
const app = express();
const port = 5000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

// Mongodb connection
const connectDB = require("./config/db");
connectDB();

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
