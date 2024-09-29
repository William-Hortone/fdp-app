const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
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
});

module.exports = mongoose.model("Article", ArticleSchema);
