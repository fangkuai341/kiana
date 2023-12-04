const express = require('express')
let router = express.Router();

//获取全部图书（懒加载）
router.post("/getBooks", require("../controller/books").getBooks);

module.exports = router;