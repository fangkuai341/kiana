const express = require('express')
let router = express.Router();

//获取未审核的例句
router.get("/notExamineIllusent", require("../controller/examine").notExamineIllusent);
//获取未审核的助记
router.get("/notExamineMnemonicAid", require("../controller/examine").notExamineMnemonicAid);
//审核例句通过
router.post("/ExamineIllusentYes", require("../controller/examine").ExamineIllusentYes);
module.exports = router;