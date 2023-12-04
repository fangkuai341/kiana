// const db = require('../core/mysql')
// const momet = require('moment')
// const jwt = require('jwt-simple')

// class AccountController {

//     getdianzan = async (req, res, next) => {
//         let Sql = " select Upwemzis from login where id=?;"
//         let params = [req.body.id]
//         try {
//             let result = await db.exec(Sql, params)
//             console.log(result)
//             if (result) {
//                 res.json({
//                     code: 200,
//                     msg: '查询成功',
//                     data: result,

//                 })
//             } else {
//                 res.json({
//                     code: 200,
//                     msg: '注册失败'
//                 })
//             }
//         } catch (err) {
//             res.json({
//                 code: 500,
//                 msg: err
//             })
//         }

//     }
//     dianzan = async (req, res, next) => {

//         let Sql = "UPDATE login SET Upwemzis=? WHERE id=?;"
//         let params = [req.body.Upwemzis, +req.body.userid]
//         let sqltwo = 'update wenzhang set givethumbs=? where id = ?;'
//         let paramsTwo = [+req.body.giveupnum, +req.body.wenzhangid]
//         try {
//             let result = await db.exec(Sql, params)
//             let resultTwo = await db.exec(sqltwo, paramsTwo)
//             if (result && resultTwo) {
//                 res.json({
//                     code: 200,
//                     msg: '修改成功',
//                     data: [result, resultTwo],
//                 })
//             } else {
//                 res.json({
//                     code: 200,
//                     msg: '修改成功'
//                 })
//             }
//         } catch (err) {
//             res.json({
//                 code: 500,
//                 msg: err
//             })
//         }


//         function createToken(data) {
//             return jwt.encode({
//                 exp: Date.now() + (1000 * 60 * 60 * 24),
//                 info: data
//             }, require("../config").tokenKey);

//         }
//     }
// }
// module.exports = new AccountController();