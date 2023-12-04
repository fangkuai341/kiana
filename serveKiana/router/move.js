const express = require('express')
let router = express.Router();

//未背转已背
router.post("/notbackMoveBack", require("../controller/move").notbackMoveBack);
//未背转不背
router.post("/notbackMoveBuback", require("../controller/move").notbackMoveBuback);
//已背转未背？？（点错了）
router.post("/backMoveNotback", require("../controller/move").backMoveNotback);
//已背转不背(已背转未背---->未背转不背)
//router.post("/backMoveBuback", require("../controller/move").backMoveBuback);
//不背转未背
router.post("/bubackMoveNotback", require("../controller/move").bubackMoveNotback);
//不背转已背
//router.post("/bubackMoveBack", require("../controller/move").bubackMoveBack);
//加入收藏
router.post("/addCollect", require("../controller/move").addCollect);
//查看收藏
router.get("/selectCollect", require("../controller/move").selectCollect);
module.exports = router;