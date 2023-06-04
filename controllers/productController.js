const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    const pageNum = Number(req.query.pageNum) || 2;
    const totalProducts = await Product.countDocuments({});

    // Sort by name, price etc.
    let sort = {};
    const sortOption = req.query.sort || ""

    if(sortOption){
        let sortOpt = sortOption.split("_")
        console.log(sortOpt);
        sort = { [sortOpt[0]]: Number(sortOpt[1])}
    }

    const products = await Product.find({})
      .skip(recordsPerPage * (pageNum - 1))
      .sort(sort)
      .limit(recordsPerPage);
    res.json({
      products,
      pageNum,
      paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
