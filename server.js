const express = require("express");
const app = express();
const port = 5000;

app.use((req, res, next) => {
  console.log("First Middleware");
  next();
});

app.get("/", (req, res, next) => {
  console.log("Second Middleware");
  res.send("Hello World!");
  next();
});
app.get("/two", (req, res,next) => {
    console.log("Third Middleware");
    res.send("Hello World  2   !");
    // next();
});

app.use((req, res) => {
  console.log("Fourth Middleware");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
