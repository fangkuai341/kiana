const db = require("../core/mysql");
const moment = require("moment");
class CartsController {
    async getBooks(request, resposne, next) {
        try {

            let insertParmas = [
                +request.body.page_index * 10
            ]
            let insertSql = "select * from bookCatalogue limit ? ,10 "
            console.log(request.body, 'aaa')
            let resultInset = await db.exec(insertSql, insertParmas);
            let countSql = "select COUNT(*) as count  from bookCatalogue"
            let count = await db.exec(countSql);
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
