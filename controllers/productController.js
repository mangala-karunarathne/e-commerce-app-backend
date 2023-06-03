const recordsPerPage = require("../config/pagination")
const Product = require("../models/ProductModel")

const getProducts = async(req, res, next) => {
   try {
    const products = await Product.find({}).sort({name: 1}).limit(recordsPerPage)
    res.json({products})
   } catch (error) {
    
   }
    res.send(" Handling Product Routes")
}  

module.exports = getProducts