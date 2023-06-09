const express = require("express")
const router = express()
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken.js");

const {getUserOrders, getOrder, createOrder, updateOrderToPaid, updateOrderToBeDelivered, getOrders, getOrderForAnalysis} = require("../controllers/orderController.js")


// user Routes
router.use(verifyIsLoggedIn)

router.get("/", getUserOrders)
router.get("/user/:id", getOrder)
router.post("/", createOrder)
router.put("/paid/:id", updateOrderToPaid)

//  admin Routes
router.use(verifyIsAdmin)
router.put("/delivered/:id", updateOrderToBeDelivered)
router.get("/admin", getOrders)
router.get("/analysis/:date", getOrderForAnalysis)

module.exports = router