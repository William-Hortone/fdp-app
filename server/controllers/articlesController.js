const Articles = require("../models/Articles");

module.exports = {
  createArticle: async (req, res, next) => { 
    const { id, name, category, images, quantity, price, displayIt } = req.body;
    try {
      const newArticles = new Articles({
        id,
        name,
        category,
        images,
        price,
        quantity,
        displayIt,
      });
      await newArticles.save();

      res
        .status(201)
        .json({ status: true, message: "Article saved successfully" });
    } catch (error) {
      return next(error);
    }
  },

  getAllArticles: async (req, res, next) => {
    try {
      const articles = await Articles.find({});

      if (!articles) {
        return res
          .status(404)
          .json({ status: false, message: "No articles found" });
      }

      res.status(200).json({ status: true, articles });
    } catch (error) {
      return next(error);
    }
  },
};
