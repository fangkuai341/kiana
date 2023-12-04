const db = require("../core/mysql");
class CartsController {
    async setWinnPeople(request, resposne, next) {
        try {
            let insertParmas = [
                request.body.id,
            ]
            let insertSql = "INSERT INTO winningIdTable (`id`)";
            insertSql += " values(?);";
            let resultInset = await db.exec(insertSql, insertParmas);

            if (resultInset && resultInset.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: "保存成功",
                    data: resultInset

                })
            } else {
                resposne.json({
                    code: 200,
                    msg: "保存失败",
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "保存失败",
                error
            })
        }

    }
    async selectWinUser(request, resposne, next) {
        try {
            let insertSql = "SELECT t1.* FROM `user` t1 JOIN winningIdTable t2 ON t1.id = t2.id;"
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
    async setAllWinnPeople(request, resposne, next) {
        try {
            let ids = JSON.parse(request.body.ids)
            let insertParmas = ids
            const leng = insertParmas.length
            let insertSql = "INSERT INTO winningIdTable (`id`) values"
            for (let i = 0; i < leng; i++) {
                insertSql += "(?),"
            }
            insertSql = insertSql.substring(0, insertSql.length - 1)
            let resultInset = await db.exec(insertSql, insertParmas);
            if (resultInset && resultInset.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: "保存成功",
                    data: resultInset

                })
            } else {
                resposne.json({
                    code: 200,
                    msg: "保存失败",
                })
            }
        } catch (error) {
            resposne.json({
                code: -200,
                msg: "保存失败",
                error
            })
        }

    }
}

module.exports = new CartsController();
