const express = require('express')
let router = express.Router();

//设置用户
router.post("/setuser", require("../controller/setuser").setuser);
//获取随机用户
router.post("/getTranslateUser", require("../controller/setuser").getTranslateUser);
//保存中奖的人
router.post("/saveWinUser", require("../controller/setWinnPeople").setWinnPeople);
//保存所有中奖的人
router.post("/saveAllWinUser", require("../controller/setWinnPeople").setAllWinnPeople);
//查看中奖的人
router.post("/selectWinUser", require("../controller/setWinnPeople").selectWinUser);
//获取所有的配音用户
router.post("/selectPlayerUser", require("../controller/selectPlayerUser").selectPlayerUser);
//投票
router.post("/vote", require("../controller/selectPlayerUser").vote);
//查看配音获奖的人
router.get("/getWinPlayerUser", require("../controller/selectPlayerUser").getWinPlayerUser);
module.exports = router;