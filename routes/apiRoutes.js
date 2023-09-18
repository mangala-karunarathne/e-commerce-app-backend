const express = require("express");
const app = express();

const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");

const jwt = require("jsonwebtoken");
app.get("/logout", (req, res) => {
    const cookieOptions = {
        path: '/',
    };
    // console.log("Before clearing cookie");
    res.clearCookie("access_token",cookieOptions, { expires: new Date(0) });
    // console.log("After clearing cookie");
    return res.send("access token cleared");
});

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
