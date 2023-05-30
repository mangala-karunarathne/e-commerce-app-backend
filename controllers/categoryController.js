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
      const categoryExists = await Category.findOneAndDelete({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      console.log("Category", categoryExists);
      if (categoryExists) {
        res.json({
          categoryDeleted: true,
          message: "Category successfully deleted",
        });
      } else {
        res.json({
          categoryDeleted: false,
          message: "Category not found or already deleted",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

const saveAtr = async (req, res, next) => {
  const { key, val, categoryChoosen } = req.body;

  if (!key || !val || !categoryChoosen) {
    return res.status(400).send("All inputs are required");
  }
  try {
    const category = categoryChoosen.split("/")[0];
    const categoryExists = await Category.findOne({ name: category }).orFail();
    if (categoryExists.attrs.length > 0) {
      // if key exists in the db then add a value to the key
      var keyDoesNotExistsInDatabase = true;

      categoryExists.attrs.map((item, idx) => {
        if (item.key === key) {
          keyDoesNotExistsInDatabase = false
          var copyAttributeValues = [...categoryExists.attrs[idx].value]
        }
      });

      if (keyDoesNotExistsInDatabase) {
        categoryExists.attrs.push({ key: key, value: [val] });
      }
    } else {
      // push to the array
      categoryExists.attrs.push({ key: key, value: [val] });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAtr };
