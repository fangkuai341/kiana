// const db = require("../core/mysql");
// const moment = require("moment");
// class CartsController {
//     async setMsg(request, resposne, next) {
//         try {
//             let insertParmas = [
//                 request.body.id,
//                 request.body.name,
//                 request.body.liuyancontent,

//                 moment().format("YYYY-MM-DD HH:mm:ss")
//             ]
//             let insertSql = "INSERT INTO liuyan (`id`,`name`,`liuyancontent`,`time`)";
//             insertSql += " values(?,?,?,?);";
//             let resultInset = await db.exec(insertSql, insertParmas);
//             if (resultInset && resultInset.affectedRows >= 1) {
//                 resposne.json({
//                     code: 200,
//                     msg: "插入成功",
//                     data: resultInset

//                 })
//             } else {
//                 resposne.json({
//                     code: 200,
//                     msg: "插入失败",
//                 })
//             }
//         } catch (error) {
//             resposne.json({
//                 code: -200,
//                 msg: "插入失败",
//                 error
//             })
//         }

//     }
//     async getMsg(request, resposne, next) {
//         //1.得到当前的用户id
//         let sql = "select * from liuyan";
//         try {
//             let result = await db.exec(sql);
//             resposne.json({
//                 code: 200,
//                 msg: "查询成功",
//                 data: result
//             })

//         } catch (error) {
//             resposne.json({
//                 code: -200,
//                 msg: "查询失败"
//             })
//         }

//     }
//     async myans(request, resposne, next) {
//         try {
//             let insertParmas = [
//                 request.body.myans,
//                 request.body.uID,
//             ]
//             let insertSql = "UPDATE liuyan set myans=? WHERE uID=?;";
//             let resultInset = await db.exec(insertSql, insertParmas);
//             if (resultInset && resultInset.affectedRows >= 1) {
//                 resposne.json({
//                     code: 200,
//                     msg: "插入成功",
//                     data: resultInset
//                 })
//             } else {
//                 resposne.json({
//                     code: 200,
//                     msg: "插入失败",
//                 })
//             }
//         } catch (error) {
//             resposne.json({
//                 code: -200,
//                 msg: "插入失败",
//                 error
//             })
//         }

//     }
// }

// module.exports = new CartsController();
