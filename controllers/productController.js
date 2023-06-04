const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    const pageNum = Number(req.query.pageNum) || 2;
    // res.json({pageNum})
    const products = await Product.find({})
      .skip(recordsPerPage * (pageNum - 1))
      .sort({ name: 1 })
      .limit(recordsPerPage);
    res.json({ products });
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
