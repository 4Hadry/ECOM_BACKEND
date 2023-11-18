const express = require("express");
const {
  getAllProducts,
  createProducts,
  UpdateProducts,
  deleteProducts,
} = require("../Controller/productController");
const router = express.Router();

router.get("/products", getAllProducts);
router.put("/products/:Productid", UpdateProducts);
router.delete("/products/:Productid", deleteProducts);
router.post("/products/new", createProducts);

module.exports = router;
