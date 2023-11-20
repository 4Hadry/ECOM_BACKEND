var express = require("express");
var router = express.Router();
const auth = require("../Controller/common/loginAuthentication");

/* GET products listing. */
router.post("/auth/register", auth.login);
router.post("/auth/login", categories.addCategory);

module.exports = router;
