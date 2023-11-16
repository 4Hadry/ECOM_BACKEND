const express = require("express");
const productController = require("../Controller/productController");
const router = express.Router();

router.get("/products", productController);

module.exports = router;
