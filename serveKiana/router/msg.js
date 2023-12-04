// const express = require('express')
// const jwt = require('jwt-simple')
// let router = express.Router();
// // 需要tonke
// // router拦截
// router.use((request, resposne, next) => {
//     if (request.body.token || request.query.token || request.headers.token) {
//         try {
//             let token = request.body.token || request.query.token || request.headers.token || request.cookies.token

//             let result = jwt.decode(token, require("../config").tokenKey);
//             if (result) {
//                 request.Info = result.info;
//                 next();
//             }
//         } catch (err) {
//             resposne.json({
//                 code: -200,
//                 msg: "token失效,请重新登录"
//             })
//         }
//     } else {
//         resposne.json({
//             code: -200,
//             msg: "请登录"
//         })
//     }
// })
// const upload = require('../middlewares/upload')
// router.post("/setMsg", require("../controller/msg").setMsg);

// module.exports = router;