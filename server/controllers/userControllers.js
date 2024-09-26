const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJs = require("crypto-js");


module.exports = {
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
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
      const user = User.findById(
        { _id: user_id }
      );

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
