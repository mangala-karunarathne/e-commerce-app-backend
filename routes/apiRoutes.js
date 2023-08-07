const express = require("express")
const app = express()

const productRoutes = require("./productRoutes")
const categoryRoutes = require("./categoryRoutes")
const userRoutes = require("./userRoutes")
const orderRoutes = require("./orderRoutes")

const jwt = require("jsonwebtoken");
// access_token issue
// This api route is called when success login user / admin goes to their role based routes in React(FE) App.js.... At that routes are wrapped by protected routes component and inside there authenticated user role going to check by calling this API. Already it simulated without using this get token API. Here it's going to use cookies intead of token as headers. 
app.get("/get-token", (req, res) => {

    try {
        const authorizationHeader = req.headers.authorization;
        console.log("authorizationHeader :", authorizationHeader);
        if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
            return res.status(401).send("Unauthorized. Token is missing or invalid.");
        }
        
        const accessToken = authorizationHeader.split(" ")[1];
        
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
    } catch (err) {
        return res.status(401).send("Unauthorized. Invalid Token");
    }

    // try {
    //     const accessToken = req.access_token;
    //     console.log("Req: ", accessToken );
    //     const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    //     return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
    // } catch (err) {
    //     return res.status(401).send("Unauthorized. Invalid Token");
    // }

    // try {
    //     const accessToken = req.headers["Authorization"];
    //     console.log("Req: ", accessToken);
    //     if (!accessToken) {
    //         return res.status(401).send("Unauthorized. Access Token not found.");
    //     }
    //     const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    //     return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
    // } catch (err) {
    //     return res.status(401).send("Unauthorized. Invalid Token");
    // }
})

app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)
app.use("/users", userRoutes)
app.use("/orders", orderRoutes)

module.exports = app