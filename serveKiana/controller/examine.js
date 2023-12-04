const db = require("../core/mysql");
const moment = require("moment");
class CartsController {
    async notExamineIllusent(request, resposne, next) {
        try {
            let insertSql = "SELECT *from exampleSentences"
            let resultInset = await db.exec(insertSql, []);

            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查询成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "查询失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查询失败",
                error
            })
        }
    }
    async notExamineMnemonicAid(request, resposne, next) {
        try {
            let insertSql = "SELECT *from helpMemory"
            let resultInset = await db.exec(insertSql, []);

            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查询成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "查询失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查询失败",
                error
            })
        }
    }
    async ExamineIllusentYes(request, resposne, next) {
        try {
            let insertSql = "SELECT *from helpMemory"
            let resultInset = await db.exec(insertSql, []);

            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查询成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "查询失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查询失败",
                error
            })
        }
    }
}

module.exports = new CartsController();