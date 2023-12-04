const express = require('express')
let router = express.Router();

//登录
router.post("/login", require("../controller/account").login);
//注册
router.post("/reg", require("../controller/account").register);
module.exports = router;