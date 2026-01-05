const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.post("/products", controller.createProduct);

module.exports = router;