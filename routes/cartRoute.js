var express = require("express");
var router = express.Router();
const carts = require("../Controller/cartController");

/* GET products listing. */
router.get("/", carts.carts);
router.post("/add", carts.addCart);
router.put("/update/:cartID", carts.updatedCart);
router.delete("/delete/:cartID", carts.deleteCart);
