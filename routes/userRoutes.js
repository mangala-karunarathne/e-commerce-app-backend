const express = require("express");
const router = express();
const { getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, writeReview, getUser, updateUser, deleteUser } = require("../controllers/userController.js");
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken.js");

router.post("/register", registerUser); // api/users/register
router.post("/login", loginUser); // api/users/login

// user logged in routes:
router.use(verifyIsLoggedIn)
router.put("/profile", updateUserProfile); // api/users/profile
router.get("/profile/:id", getUserProfile); // api/users/profile/:id
router.post("/review/:productId", writeReview); // api/users/review/:productId

// admin routes:
router.use(verifyIsAdmin)
router.get("/", getUsers); // api/users
router.get("/:id", getUser); // api/users/:id
router.put("/:id", updateUser); // api/users/:id
router.delete("/:id", deleteUser); // api/users/:id

module.exports = router;
