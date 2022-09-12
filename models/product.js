const mongoose = require("mongoose");

const productScema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "שם המוצר חייב להירשם "],
  },
  price: {
    type: Number,
    required: [true, "מחיר המוצר חייב להירשם "],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  reting: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      massage: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productScema);
