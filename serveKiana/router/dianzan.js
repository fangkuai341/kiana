// const express = require('express')
// let router = express.Router();
// const jwt = require("jwt-simple");
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


// //是否点赞
// router.post("/isDz", require("../controller/dianzan").getdianzan);
// //点赞
// router.post("/Dz", require("../controller/dianzan").dianzan);
// module.exports = router;