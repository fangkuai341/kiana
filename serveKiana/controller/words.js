const db = require("../core/mysql");
const moment = require("moment");
class CartsController {
    //获取所有的单词
    async getWords(request, resposne, next) {
        try {
            let insertParmas = [
                + request.body.page_index * 30
            ]
            let insertSql = `select * from ${request.body.book} limit ? ,30 `
            let resultInset = await db.exec(insertSql, insertParmas);
            let countSql = `select COUNT(*) as count  from ${request.body.book}`
            let count = await db.exec(countSql, []);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查询成功",
                    data: resultInset,
                    count: count[0].count

                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "查询失败",
                    data: resultInset,
                    count: count[0].count
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查询",
                error
            })
        }

    }
    //获取已读单词
    async getAlrRecUserList(request, resposne, next) {
        try {
            let insertParmas = [

                + request.body.page_index * 30,
            ]
            let insertSql = `select * from ${request.body.book} WHERE alreadyReciteUserList LIKE '%${request.body.UserId}%' LIMIT 30 OFFSET ?`
            let resultInset = await db.exec(insertSql, insertParmas);
            let countSql = `select COUNT(*) as count  from ${request.body.book} WHERE alreadyReciteUserList LIKE '%${request.body.UserId}%'`
            let count = await db.exec(countSql, []);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查询成功",
                    data: resultInset,
                    count: count[0].count

                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "查询失败",
                    data: resultInset,
                    count: count[0].count
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查询",
                error
            })
        }

    }
    //获取不用背诵的单词
    async getDonRecUserList(request, resposne, next) {
        try {
            let insertParmas = [

                + request.body.page_index * 30,
            ]
            console.log(`select * from ${request.body.book} WHERE dontReciteUserList LIKE '%${request.body.UserId}%' LIMIT 30 OFFSET ?`)
            let insertSql = `select * from ${request.body.book} WHERE dontReciteUserList LIKE '%${request.body.UserId}%' LIMIT 30 OFFSET ?`
            console.log()
            let resultInset = await db.exec(insertSql, insertParmas);
            let countSql = `select COUNT(*) as count  from ${request.body.book} WHERE dontReciteUserList LIKE '%${request.body.UserId}%'`
            let count = await db.exec(countSql, []);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查询成功",
                    data: resultInset,
                    count: count[0].count

                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "查询失败",
                    data: resultInset,
                    count: count[0].count
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查询",
                error
            })
        }

    }
    //获取未读的单词
    async getUnreadUserList(request, resposne, next) {
        try {
            let insertParmas = [

                + request.body.page_index * 30,
            ]
            let insertSql = `SELECT * FROM ${request.body.book} WHERE (alreadyReciteUserList NOT LIKE '%${request.body.UserId}%' OR alreadyReciteUserList IS NULL) AND (dontReciteUserList NOT LIKE '%${request.body.UserId}%' OR dontReciteUserList IS NULL) LIMIT 30 OFFSET ?`
            let resultInset = await db.exec(insertSql, insertParmas);
            let countSql = `SELECT COUNT(*) as count FROM ${request.body.book} WHERE (alreadyReciteUserList NOT LIKE '%${request.body.UserId}%' OR alreadyReciteUserList IS NULL) AND (dontReciteUserList NOT LIKE '%${request.body.UserId}%' OR dontReciteUserList IS NULL)`
            let count = await db.exec(countSql, []);
            if (resultInset) {
                resposne.json({
                    code: 200,
                    msg: "查询成功",
                    data: resultInset,
                    count: count[0].count

                })
            } else {
                resposne.json({
                    code: -200,
                    msg: "查询失败",
                    data: resultInset,
                    count: count[0].count
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "查询",
                error
            })
        }

    }
}

module.exports = new CartsController();
