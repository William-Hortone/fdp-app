const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  images: [
    {
      img: {
        type: String,
      },
    },
  ],
  displayIt: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
