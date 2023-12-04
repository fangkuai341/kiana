const db = require('../core/mysql')
const momet = require('moment')
const jwt = require('jwt-simple')

class AccountController {
    //注册
    register = async (req, res, next) => {
        let Sql = " INSERT INTO login(name,pwd,collectWord) VALUES (?,?,'[]');"
        let params = [req.body.name, req.body.pwd]
        try {
            let result = await db.exec(Sql, params)
            console.log(result)
            if (result && result.affectedRows >= 1) {
                res.json({
                    code: 200,
                    msg: '注册成功',

                })
            } else {
                res.json({
                    code: -200,
                    msg: '注册失败'
                })
            }
        } catch (err) {
            res.json({
                code: 500,
                msg: err
            })
        }

    }
    login = async (req, res, next) => {
        let Sql = "SELECT `name`,`id`  FROM login WHERE name=? AND pwd=?;"
        let params = [req.body.name, req.body.pwd]
        try {
            let result = await db.exec(Sql, params)

            if (result && result.length >= 1) {
                res.cookie('token', createToken(result[0]), { path: '/', httpOnly: true });
                res.json({
                    code: 200,
                    msg: '登录成功',
                    data: result,
                    token: createToken(result[0])
                })
            } else {
                res.json({
                    code: -200,
                    msg: '登录失败'
                })
            }
        } catch (err) {
            res.json({
                code: 500,
                msg: err
            })
        }


        function createToken(data) {
            return jwt.encode({
                exp: Date.now() + (1000 * 60 * 60 * 24),
                info: data
            }, require("../config").tokenKey);

        }
    }
}
module.exports = new AccountController();