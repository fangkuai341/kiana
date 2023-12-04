const db = require("../core/mysql");
const moment = require("moment");
class CartsController {
    async setuser(request, resposne, next) {
        try {
            let insertParmas = [
                request.body.name,
                request.body.contactInformation,

                moment().format("YYYY-MM-DD HH:mm:ss")
            ]
            let insertSql = "INSERT INTO user (`name`,`contactInformation`,`time`)";
            insertSql += " values(?,?,?);";
            let resultInset = await db.exec(insertSql, insertParmas);
            if (resultInset && resultInset.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: "新建成功",
                    data: resultInset

                })
            } else {
                resposne.json({
                    code: 200,
                    msg: "新建失败",
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "新建失败",
                error
            })
        }

    }

    async getTranslateUser(request, resposne, next) {
        try {
            let insertParmas = [
                +request.body.num,
            ]
            let insertSql = "SELECT t1.*  FROM `user` t1  WHERE t1.id NOT IN (SELECT id FROM winningIdTable) ORDER BY RAND()  LIMIT ?"
            let resultInset = await db.exec(insertSql, insertParmas);
            console.log(resultInset);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查看成功",
                    data: resultInset

                })
            } else {
                resposne.json({
                    code: 200,
                    msg: "查看失败",
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查看失败",
                error
            })
        }

    }
}

module.exports = new CartsController();
