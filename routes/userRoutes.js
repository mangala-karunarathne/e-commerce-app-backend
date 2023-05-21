const express = require("express")
const router = express()
const getUsers = require("../controllers/userController.js")

router.get("/", getUsers)

module.exports = router