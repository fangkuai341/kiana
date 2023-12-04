const express = require('express')
let router = express.Router();
const jwt = require("jwt-simple");
router.use((request, resposne, next) => {
    if (request.body.token || request.query.token || request.headers.token || request.cookies.token) {
        try {
            let token = request.body.token || request.query.token || request.headers.token || request.cookies.token

            let result = jwt.decode(token, require("../config").tokenKey);
            if (result) {
                request.Info = result.info;
                next();
            }
        } catch (err) {
            resposne.json({
                code: -200,
                msg: "token失效,请重新登录"
            })
        }
    } else {
        resposne.json({
            code: -200,
            msg: "请登录"
        })
    }
})
//获取某本书的全部单词
router.post("/getWords", require("../controller/words").getWords);
//获取某本书的已读单词
router.post("/getAlrRecUserList", require("../controller/words").getAlrRecUserList);
//获取某本书的不用背诵全部单词
router.post("/getDonRecUserList", require("../controller/words").getDonRecUserList);
//获取某本书的未读单词
router.post("/getUnreadUserList", require("../controller/words").getUnreadUserList);
module.exports = router;