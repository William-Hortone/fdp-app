const Articles = require("../models/Articles");

module.exports = {
  createArticle: async (res, req, next) => {
    const { id, name, category, images,quantity, displayIt } = req.body;
    try {
      const newArticles = new Articles({
        id,
        name,
        category,
        images,
        quantity,
        displayIt
      });
      await newArticles.save();

      res
        .status(201)
        .json({ status: true, message: "Article saved successfully" });
    } catch (error) {
      return next(error);
    }
  },

  getAllArticles: async (res, req, next) => {
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
