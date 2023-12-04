const db = require("../core/mysql");
class CartsController {
    async selectPlayerUser(request, resposne, next) {
        try {
            let insertSql = "select* from playerUser"
            let resultInset = await db.exec(insertSql);
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
    async vote(request, resposne, next) {
        try {

            let ids = JSON.parse(request.body.ids)
            let insertParmas
            if (ids.length === 1) {
                insertParmas = [
                    ids[0],
                    ids[0]
                ]
            } else {
                insertParmas = ids
            }
            let insertSql = "UPDATE playerUser SET  socre= socre + 1 WHERE id IN (?,?);"
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
    async getWinPlayerUser(request, resposne, next) {
        try {
            let insertSql = "SELECT *FROM playerUser ORDER BY socre DESC LIMIT 3;"
            let resultInset = await db.exec(insertSql);
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
