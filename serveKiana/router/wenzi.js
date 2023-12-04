// const express = require('express')
// const jwt = require('jwt-simple')
// let router = express.Router();
// const multer = require("multer")
// const path = require("path")
// // 需要tonke
// var storage = multer.diskStorage({
//     // 配置文件上传后存储的路径
//     // 配置文件上传后存储的路径和文件名
//     filename: function (req, file, cb) {
//         console.log('file', file);
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })
// var upload = multer({ dest: 'upload' })
// router.post("/updatImg", upload.single('wangeditor-uploaded-image'), require("../controller/wenzi").updatImg);
// router.get("/getCart", require("../controller/wenzi").getCartByUser);
// router.get("/getwenzahngconcetByUser", require("../controller/wenzi").getwenzahngconcetByUser);
// router.get("/getsearchCartByUser", require("../controller/wenzi").getsearchCartByUser);
// router.get('/getnewwenzahngconcetByUser', require("../controller/wenzi").getnewwenzahngconcetByUser)
// router.get('/getrandwenzahngconcetByUser', require("../controller/wenzi").getrandwenzahngconcetByUser)
// router.post("/addWenzhang", require("../controller/wenzi").addWenzhang);
// router.post("/addWenzhangconcet", require("../controller/wenzi").addWenzhangconcet);
// router.post('/addshow', require("../controller/wenzi").addshow)
// module.exports = router;