const express = require("express")
const router = express()
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken.js");

const {getUserOrders, getOrder} = require("../controllers/orderController.js")


// user Routes
router.use(verifyIsLoggedIn)
router.get("/", getUserOrders)
router.get("/user/:id", getOrder)

//  admin Routes
router.use(verifyIsAdmin)

module.exports = router