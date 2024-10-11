const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJs = require("crypto-js");

module.exports = {
  createUser: async (req, res, next) => {
    const { username, email, password, cart, role, totalPrice } = req.body;
    const newUser = new User({
      username,
      email,
      role,
      cart,
      totalPrice,
      password: CryptoJs.AES.encrypt(
        password,
        process.env.SECRET_KEY
      ).toString(),
    });

    try {
      await newUser.save();
      res
        .status(201)
        .json({ status: true, message: "User created successfully" });
    } catch (error) {
      return next(error);
    }
  },
  addToCart: async (req, res, next) => {
    const { quantity, productId, totalPrice } = req.body;
    const { userId } = req.params;

    try {
      const currentUser = await User.findById(userId);

      if (!currentUser) {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }

      // Check if the product already exists in the cart
      const productIndex = currentUser.cart.findIndex(
        (item) => item.productId === productId
      );

      if (productIndex !== -1) {
        // If the product exists, update the quantity and the total price
        currentUser.cart[productIndex].quantity += quantity;
        currentUser.cart[productIndex].totalPrice += totalPrice;
      } else {
        // If the product doesn't exist, add it to the cart
        currentUser.cart.push({ productId, quantity, totalPrice });
      }

      await currentUser.save();
      return res
        .status(200)
        .json({ message: "Product added to cart", cart: currentUser.cart });
    } catch (error) {
      console.error("Error adding to cart:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
  loginUser: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }

      const decryptedPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.SECRET_KEY
      );
      const decryptedString = decryptedPassword.toString(CryptoJs.enc.Utf8);

      if (decryptedString !== req.body.password) {
        return res
          .status(404)
          .json({ status: false, message: "Wrong password" });
      }

      const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "21d",
      });

      const user_id = user._id;

      res.status(200).json({
        status: true,
        id: user_id,
        username: user.username,
        token: userToken,
        cart: user.cart,
        profile: user.profile,
      });
    } catch (error) {
      return next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    const user_id = req.params.id;
    console.log("deleteUser", user_id);

    try {
      await User.findByIdAndDelete({ _id: user_id });

      res
        .status(200)
        .json({ status: true, message: "User deleted successfully" });
    } catch (error) {
      return next(error);
    }
  },
  getUser: (req, res, next) => {
    const user_id = req.params.id;
    console.log("getUser", user_id);

    try {
      const user = User.findById({ _id: user_id });

      if (!user) {
        return restart
          .status(401)
          .json({ status: false, message: "User  does not exist" });
      }

      res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  },
};
