const express = require("express")
const router = express() 
const {getCategories, newCategory, deleteCategory, saveAtr} = require("../controllers/categoryController")

router.get("/", getCategories)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attr", saveAtr)

module.exports = router