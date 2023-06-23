const express = require("express");
const router = express();
const { getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, writeReview, getUser } = require("../controllers/userController.js");
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken.js");

router.post("/register", registerUser);
router.post("/login", loginUser);

// user logged in routes:
router.use(verifyIsLoggedIn)
router.put("/profile", updateUserProfile);
router.get("/profile/:id", getUserProfile);
router.post("/review/:productId", writeReview);

// admin routes:
router.use(verifyIsAdmin)
router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;
