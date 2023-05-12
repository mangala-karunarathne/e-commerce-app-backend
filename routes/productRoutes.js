const express = require("express")
const router = express()
const getProducts = require("../controllers/productController")

router.get("/", getProducts)

module.exports = router