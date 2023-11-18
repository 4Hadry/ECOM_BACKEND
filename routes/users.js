var express = require("express");
const contro = require("../Controller/userController");
const login = require("../Controller/common/loginAuthentication");
var router = express.Router();

/* GET users listing. */

router.get("/", contro.MyUser);
router.post("/login", login.login);
// router.get("/data", contro.userData);
router.post("/addUser", contro.addUser);
router.put("/updateUser/:Userid", contro.UpdateUser);
router.delete("/delUser/:Userid", contro.delUserr);

module.exports = router;
