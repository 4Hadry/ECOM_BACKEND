const express = require("express");
const {
  getAllProducts,
  createProducts,
  UpdateProducts,
  deleteProducts,
} = require("../Controller/productController");
const router = express.Router();

router.get("/products", getAllProducts);
router.post("/add_products", createProducts);
router.put("/products/:Productid", UpdateProducts);
router.delete("/products/:Productid", deleteProducts);

module.exports = router;
