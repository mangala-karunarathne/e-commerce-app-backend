const Category = require("../models/CategoryModel");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ name: "asc" }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const newCategory = async (req, res, next) => {
  try {
    const { newCategory } = req.body;
    if (!newCategory) {
      res.status(400).send("Category input is required");
    }

    const categoryExists = await Category.findOne({ name: newCategory });

    if (categoryExists) {
      res.status(400).send("Category already exists");
    } else {
      const categoryCreated = await Category.create({
        name: newCategory,
      });
      res.status(201).send({ categoryCreated: categoryCreated });
    }
    res.send(newCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  // return res.send(req.params.category)
  try {
    if (req.params.category !== "Choose Category") {
      const categoryExists = await Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      await categoryExists.remove();
      res.json({ categoryDeleted: true });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, newCategory, deleteCategory };
