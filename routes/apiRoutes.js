const express = require("express")
const app = express()

const productRoutes = require("./productRoutes")
const categoryRoutes = require("./categoryRoutes")
const userRoutes = require("./userRoutes")
const orderRoutes = require("./orderRoutes")

const jwt = require("jsonwebtoken");
// access_token issue
// This api route is called when success login user / admin goes to their role based routes in React(FE) App.js.... At that routes are wrapped by protected routes component and inside there authenticated user role going to check by calling this API. Already it simulated without using this get token API. Here it's going to use cookies intead of token as headers. 
app.post("/get-token", (req, res) => {

    try {
        // const {token} = req.body;
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGIzNmY0Y2ExNTMwNTg2MmZkMjQ4NjkiLCJuYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTI0NDEzOTMsImV4cCI6MTY5MjQ2NjU5M30.NWlTdC-6Wp09ymD8EbY4Mlc_Q89c6tXJhhp4-fCqpFs";
        console.log("Req: ", token );
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
    } catch (err) {
        return res.status(401).send("Unauthorized. Invalid Token");
    }

})

app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)
app.use("/users", userRoutes)
app.use("/orders", orderRoutes)

module.exports = app