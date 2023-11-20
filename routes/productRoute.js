const express = require("express");
const {
  getAllProducts,
  createProducts,
  UpdateProducts,
  deleteProducts,
  getSingleProduct,
} = require("../Controller/productController");
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/product/:Productid", getSingleProduct);
router.post("/add_products", createProducts);
router.put("/products/:Productid", UpdateProducts);
router.delete("/products/:Productid", deleteProducts);
module.exports = router;
