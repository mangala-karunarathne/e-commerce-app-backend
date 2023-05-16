const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    uni: true,
  },
  description:{
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  count:{
    type: Number,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  rating:{
    type: Number,
  },
  reviewsNumber:{
    type: Number,
  },
  sales:{
    type: Number,
    default:0,
  },
  attrs: [
    [
      {key:{type:String}, value:{type:String}}
      // {key: "color", value:"red"}, {key:"size", value:"1 TB"}
    ]
  ],
  images:[],
  reviews:[]
},{
  timestamps: true,
});
productSchema.index()
const Product = mongoose.model("Product", productSchema)

module.exports = Product