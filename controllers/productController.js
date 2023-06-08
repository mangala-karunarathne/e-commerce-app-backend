const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    let query = {};

    let queryCondition = false;

    let priceQueryCondition = {};

    if (req.query.price) {
      queryCondition = true;
      priceQueryCondition = { price: { $lte: Number(req.query.price) } };
    }

    let ratingQueryCondition = {};

    if (req.query.rating) {
      queryCondition = true;
      const ratingArray = req.query.rating.split(",").map(Number);
      ratingQueryCondition = { rating: { $in: ratingArray } };
    }

    let categoryQueryCondition = {};
    const categoryName = req.params.categoryName;
    if (categoryName) {
      queryCondition = true;
      let a = categoryName.replaceAll(",", "/");
      var regEx = new RegExp("^" + a);
      categoryQueryCondition = { category: regEx };
    }

    if (req.query.category) {
      queryCondition = true;
      let a = req.query.category.split(",").map((item) => {
        if (item) return new RegExp("^" + item);
      });

      categoryQueryCondition = {
        category: { $in: a },
      };
    }

    let attrsQueryCondition = [];

    if(req.query.attrs){
      // attrs=RAM-1TB-2TB-4TB,color-blue-red
      // ['RAM-1TB-2TB-4TB','color-blue-red']
      attrsQueryCondition = req.query.attrs.split(",").reduce((acc, item)=> {
        if(item){
          let a = item.split("-")
          let values = [...a]
          values.shift()
          let a1 = {
            attrs: { $elemMatch: {key:a[0], value:{$in: values}}}
          }
          acc.push(a1)
          console.log(acc, {depth: null});
          return acc
        }else return acc
      }, [])
    }

    if (queryCondition) {
      query = {
        $and: [
          priceQueryCondition,
          ratingQueryCondition,
          categoryQueryCondition,
        ],
      };
    }

    // Pagination
    const pageNum = Number(req.query.pageNum) || 2;

    // Sort by name, price etc.
    let sort = {};
    const sortOption = req.query.sort || "";

    if (sortOption) {
      let sortOpt = sortOption.split("_");
      // console.log(sortOpt);
      sort = { [sortOpt[0]]: Number(sortOpt[1]) };
    }

    const totalProducts = await Product.countDocuments(query);
    const products = await Product.find(query)
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
