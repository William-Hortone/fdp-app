const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "client",
  },
 
  cart: [
    {
      productId: {
        type: String,
      },
      totalPrice: {
        type: Number,
        default: 0,
      },
      quantity: {
        type: Number,
        default:0,
      },
    },
  ],
  profile: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },


});

module.exports = mongoose.model("User", UserSchema);
