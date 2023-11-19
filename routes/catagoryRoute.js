var express = require("express");
var router = express.Router();
const categories = require("../Controller/categoryController");

/* GET products listing. */
router.get("/", categories.categories);
router.post("/add", categories.addCategory);
router.put("/update/:catID", categories.updatedCategory);
router.delete("/delete/:catID", categories.deleteCategory);

module.exports = router;
