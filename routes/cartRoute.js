var express = require("express");
var router = express.Router();
const carts = require("../Controller/cartController");

/* GET products listing. */
router.get("/cart", carts.carts);
router.post("cart/add/:Productid", carts.addCart);
// router.put("/update/:cartID", carts.updatedCart);
router.delete("cart/remove/:Productid", carts.deleteCart);

module.exports = router;
