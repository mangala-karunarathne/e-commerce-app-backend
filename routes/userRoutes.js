const express = require("express");
const router = express();
const { getUsers, registerUser } = require("../controllers/userController.js");

router.get("/", getUsers);

// user logged in routes:

// admin routes:
router.post("/register", registerUser);

module.exports = router;
