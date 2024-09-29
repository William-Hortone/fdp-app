const router = require("express").Router();
const articlesController = require("../controllers/articlesController");
const verifyTokens = require("../middleware/jwt_token");

router.post("/createArticle", articlesController.createArticle);
router.get("/getAllArticles", articlesController.getAllArticles);

module.exports = router;
