const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const verifyTokens = require("../middleware/jwt_token");

router.post("/createUser", userControllers.createUser);
router.put("/addToCart/:userId", userControllers.addToCart);
router.post("/loginUser", userControllers.loginUser);
router.delete("/deleteUser/:id", userControllers.deleteUser);
router.get("/getUser/:userId", userControllers.getUser);

module.exports = router;
