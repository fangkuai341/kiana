// const db = require("../core/mysql");
// const fs = require("fs");
// const moment = require("moment");
// class CartsController {
//   //添加文章
//   async addWenzhang(request, resposne, next) {
//     try {
//       let insertParmas = [
//         request.body.title,
//         request.body.introduction,
//         request.body.biaoqian,
//         +request.body.isgood,
//         request.body.img,
//         +request.body.isGhost,
//         moment().format("YYYY-MM-DD HH:mm:ss"),
//       ];
//       let insertSql =
//         "INSERT INTO wenzhang (`title`,`introduction`,`biaoqian`,`isgood`,`img`,`isGhost`,`time`)";
//       insertSql += " values(?,?,?,?,?,?,?);";
//       let resultInset = await db.exec(insertSql, insertParmas);
//       if (resultInset && resultInset.affectedRows >= 1) {
//         console.log(resultInset);
//         resposne.json({
//           code: 200,
//           msg: "插入成功",
//           data: resultInset.insertId,
//         });
//       } else {
//         resposne.json({
//           code: 200,
//           msg: "插入失败",
//         });
//       }
//     } catch (error) {
//       resposne.json({
//         code: -200,
//         msg: "插入失败",
//         error,
//       });
//     }
//   }
//   //添加文章内容
//   async addWenzhangconcet(request, resposne, next) {
//     try {
//       let insertParmas = [request.body.id, request.body.content];
//       let insertSql = "INSERT INTO wenzicontent (`id`,`content`)";
//       insertSql += " values(?,?);";
//       let resultInset = await db.exec(insertSql, insertParmas);
//       if (resultInset && resultInset.affectedRows >= 1) {
//         console.log(resultInset);
//         resposne.json({
//           code: 200,
//           msg: "插入成功",
//           data: resultInset,
//         });
//       } else {
//         resposne.json({
//           code: 200,
//           msg: "插入失败",
//         });
//       }
//     } catch (error) {
//       resposne.json({
//         code: -200,
//         msg: "插入失败",
//         error,
//       });
//     }
//   }
//   // 获取全部文章信息
//   async getCartByUser(request, resposne, next) {
//     //1.得到当前的用户id
//     let sql = "select * from wenzhang";
//     try {
//       let result = await db.exec(sql);
//       resposne.json({
//         code: 200,
//         msg: "查询成功",
//         data: result,
//       });
//     } catch (error) {
//       resposne.json({
//         code: -200,
//         msg: "查询失败",
//       });
//     }
//   }
//   //获取文章内容
//   async getwenzahngconcetByUser(request, resposne, next) {
//     //1.得到当前的用户id
//     let sql =
//       "select * from wenzhang left outer join wenzicontent on wenzhang.id=wenzicontent.id where wenzhang.id=?";
//     let parmas = [request.query.wenzhangId];
//     try {
//       let result = await db.exec(sql, parmas);
//       resposne.json({
//         code: 200,
//         msg: "查询成功",
//         data: result,
//       });
//     } catch (error) {
//       resposne.json({
//         code: -200,
//         msg: "查询失败",
//       });
//     }
//   }
//   //搜素文章
//   async getsearchCartByUser(request, resposne, next) {
//     //1.得到当前的用户id
//     let sql =
//       "select * from wenzhang WHERE CONCAT(title,introduction,biaoqian)like ? ";
//     let cs = `%${request.query.serchCon}%`;
//     let parmas = [cs];
//     try {
//       let result = await db.exec(sql, parmas);
//       resposne.json({
//         code: 200,
//         msg: "查询成功",
//         data: result,
//       });
//     } catch (error) {
//       resposne.json({
//         code: -200,
//         msg: "查询失败",
//         data: error,
//       });
//     }
//   }
//   //上传图片
//   async updatImg(request, resposne, next) {
//     fs.renameSync(request.file.path, `upload/${request.file.originalname}`);
//     resposne.send({
//       errno: 0,
//       msg: "上传成功",
//       data: [
//         {
//           url: `http://106.55.233.23/${request.file.originalname}`, // 图片 src ，必须
//           file: request.file,
//         },
//       ],
//     });
//   }
//   //获取最新文章
//   async getnewwenzahngconcetByUser(request, resposne, next) {
//     let sql =
//       "SELECT id FROM wenzhang where time=(select max(time) from wenzhang)";
//     try {
//       let result = await db.exec(sql);
//       resposne.json({
//         code: 200,
//         msg: "查询成功",
//         data: result[0].id,
//       });
//     } catch (error) {
//       resposne.json({
//         code: -200,
//         msg: "查询失败",
//       });
//     }
//   }
//   //获取随机文章
//   async getrandwenzahngconcetByUser(request, resposne, next) {
//     let sql = "SELECT id FROM wenzhang ORDER BY RAND() LIMIT 1";
//     try {
//       let result = await db.exec(sql);
//       resposne.json({
//         code: 200,
//         msg: "查询成功",
//         data: result[0].id,
//       });
//     } catch (error) {
//       resposne.json({
//         code: -200,
//         msg: "查询失败",
//       });
//     }
//   }
//   //查看增加
//   async addshow(req, res, next) {
//     let sqltwo = "update wenzhang set `show` = `show` + 1 where id= ?";
//     let paramsTwo = [+req.body.wenzhangid];
//     try {
//       let result = await db.exec(sqltwo, paramsTwo);
//       if (result) {
//         res.json({
//           code: 200,
//           msg: "修改成功",
//           data: result,
//         });
//       } else {
//         res.json({
//           code: 200,
//           msg: "修改成功",
//         });
//       }
//     } catch (err) {
//       res.json({
//         code: 500,
//         msg: err,
//       });
//     }
//     function createToken(data) {
//       return jwt.encode(
//         {
//           exp: Date.now() + 1000 * 60 * 60 * 24,
//           info: data,
//         },
//         require("../config").tokenKey
//       );
//     }
//   }
// }

// module.exports = new CartsController();
