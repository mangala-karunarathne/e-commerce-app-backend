const Order = require("../models/OrderModel");
const Product = require("../models/OrderModel");
const ObjectId = require("mongodb").ObjectId;

const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: new ObjectId(req.user._id) });
    res.send(orders);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "-password -isAdmin -id -__v -createdAt -updateAt")
      .orFail();
    res.send(order);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserOrders, getOrder };
