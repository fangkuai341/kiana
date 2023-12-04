const db = require("../core/mysql");
const moment = require("moment");
class CartsController {
    async notbackMoveBack(request, resposne, next) {
        try {
            let insertSql = `UPDATE ${request.body.book} set alreadyReciteUserList=CONCAT(IFNULL(alreadyReciteUserList, ''),'${request.body.userId},') WHERE id=${request.body.wordId}`
            let resultInset = await db.exec(insertSql, []);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "未背转已背成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "未背转已背失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "未背转已背失败",
                error
            })
        }
    }
    async notbackMoveBuback(request, resposne, next) {
        try {
            let insertSql = `UPDATE ${request.body.book} set dontReciteUserList=CONCAT(IFNULL(dontReciteUserList, ''),'${request.body.userId},') WHERE id=${request.body.wordId}`
            let resultInset = await db.exec(insertSql, []);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "未背转不背成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "未背转不背失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "未背转不背失败",
                error
            })
        }
    }
    async backMoveNotback(request, resposne, next) {
        try {
            let insertSql = `UPDATE ${request.body.book} SET alreadyReciteUserList = REPLACE(alreadyReciteUserList, '${request.body.userId},', '') WHERE id=${request.body.wordId}`
            let resultInset = await db.exec(insertSql, []);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "已背转未背成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "已背转未背失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "已背转未背失败",
                error
            })
        }
    }
    async bubackMoveNotback(request, resposne, next) {
        try {
            let insertSql = `UPDATE ${request.body.book} SET dontReciteUserList = REPLACE(dontReciteUserList, '${request.body.userId},', '') WHERE id=${request.body.wordId}`
            let resultInset = await db.exec(insertSql, []);

            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "已背转未背成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "已背转未背失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "已背转未背失败",
                error
            })
        }
    }
    async addCollect(request, resposne, next) {
        try {
            let insertSql = `UPDATE login SET collectWord = '${request.body.collectWord}' WHERE id=${request.body.userId}`
            let resultInset = await db.exec(insertSql, []);

            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "加入成功",
                    data: resultInset
                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "加入失败",
                    data: resultInset
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "加入失败",
                error
            })
        }
    }
    async selectCollect(request, resposne, next) {
        try {
            let insertSql = `SELECT collectWord from login WHERE id=${request.query.userId}`
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