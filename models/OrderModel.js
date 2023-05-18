const mongoose = require("mongoose");

const User = require("./UserModel");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
    orderTotal: {
      itemsCount: { type: Number, required: true },
      cartSubtotal: { type: Number, required: true },
    },
    cartItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { path: {type: String, required: true} },
        quantity: { type: Number, required: true },
        count: { type: Number, required: true },
      }
    ]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", orderSchema);

module.exports = User;
