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
  loginUser: async (req, res, next) => {
    const {  email, password } = req.body; 

    try {
      const user = await User.findOne({ email:email });
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
