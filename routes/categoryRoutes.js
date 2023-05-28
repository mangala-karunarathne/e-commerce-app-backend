const express = require("express")
const router = express() 
const {getCategories, newCategory, deleteCategory} = require("../controllers/categoryController")

router.get("/", getCategories)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)

module.exports = router