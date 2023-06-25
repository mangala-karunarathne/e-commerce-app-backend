const express = require("express")
const router = express()
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken.js");

const getUserOrders = require("../controllers/orderController.js")


// user Routes
router.use(verifyIsLoggedIn)
router.get("/", getUserOrders)

//  admin Routes
router.use(verifyIsAdmin)

module.exports = router