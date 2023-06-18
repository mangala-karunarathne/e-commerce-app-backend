const express = require("express")
const router = express()
const {getProducts, getProductById, getBestSellers, adminGetProduct, adminDeleteProduct, adminCreateProduct, adminUpdateProduct, adminUpload, adminDeleteProductImage} = require("../controllers/productController")

const {verifyIsLoggedIn} = require("../middleware/verifyAuthToken")

router.get("/category/:categoryName/search/:searchQuery", getProducts)
router.get("/category/:categoryName", getProducts)
router.get("/search/:searchQuery", getProducts)
router.get("/", getProducts)
router.get("/bestsellers", getBestSellers)
router.get("/get-one/:id", getProductById)

// admin routes
router.use(verifyIsLoggedIn)
router.get("/admin", adminGetProduct)
router.delete("/admin/:id", adminDeleteProduct)
router.put("/admin/:id", adminUpdateProduct)
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage)
router.post("/admin/upload", adminUpload)
router.post("/admin", adminCreateProduct)

module.exports = router