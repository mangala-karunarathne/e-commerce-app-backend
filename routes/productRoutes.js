const express = require("express")
const router = express()
const {getProducts, getProductById, getBestSellers, adminGetProduct, adminDeleteProduct} = require("../controllers/productController")

router.get("/category/:categoryName/search/:searchQuery", getProducts)
router.get("/category/:categoryName", getProducts)
router.get("/search/:searchQuery", getProducts)
router.get("/", getProducts)
router.get("/bestsellers", getBestSellers)
router.get("/get-one/:id", getProductById)

// admin routes
router.get("/admin", adminGetProduct)
router.delete("/admin/:id", adminDeleteProduct)


module.exports = router