const express = require('express');
const router = express.Router();
// 引入
const User = require('../db/model/userModel');
const Mail = require('../utils/mail');

let codes = null; // 存储验证码

/**
 * @api {post} /user/reg 用户注册
 * @apiDescription 用户注册
 * @apiName reg
 * @apiGroup User
 * @apiParam {string} us 用户名
 * @apiParam {string} ps 密码
 * @apiParam {string} code 状态码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "err" : "0",
 *      "msg" : "注册成功"
 *  }
 * @apiSampleRequest http://localhost:3000/user/reg
 * @apiVersion 1.0.0
 */

router.post('/reg', (req, res) => {
    // 获取数据
    let { us, ps, code } = req.body;

    if (!us || !ps || !code) {
        return res.send({ err: -1, msg: "参数错误" });
    } else {
        // 判断验证码是否ok
        // console.log(codes);
        // console.log(code);
        if (codes != code) {
            return res.send({ err: -1, msg: "验证码错误" });
        }
        User.find({ us })
            .then(data => {
                if (data.length === 0) {
                    // 用户名不存在 可以注册
                    return User.insertMany({ us, ps }) // 插入多条数据
                } else {
                    res.send({ err: -3, msg: "用户名已存在" });
                }
            })
            .then((data) => {
                // 返回数据
                if (data) {
                    res.send({ err: 0, msg: "注册成功" });
                }
            })
            .catch((err) => {
                res.send({ err: -2, msg: "注册err" });
            })
    }
});

/**
 * 
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup User
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} us 用户名
 * @apiParam  {String} ps 密码
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "登陆成功"
 * }
 * @apiSampleRequest http://localhost:3000/user/login
 */

// 登录
router.post('/login', (req, res) => {
    let { us, ps } = req.body;
    if (!us || !ps) {
        return res.send({ err: -1, msg: "参数错误" });
    }
    User.find({ us, ps }) // 简写
        .then(data => {
            if (data.length > 0) {
                res.send({ err: 0, msg: "登陆成功" });
            } else {
                res.send({ err: -2, msg: "用户名或密码不正确" });
            }
        })
        .catch(err => {
            return res.send({ err: -1, msg: "内部错误" });
        })
});

/**
 * 
 * @api {post} /user/getMailCode 邮箱验证
 * @apiName getMailCode
 * @apiGroup User
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} mail 邮箱
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "验证码发送成功"
 * }
 * @apiSampleRequest http://localhost:3000/user/getMailCode
 */

// 发送邮箱验证码
router.post('/getMailCode', (req, res) => {
    let { mail } = req.body;
    var charactors = "1234567890";
    let code = '',
        i;
    for (let j = 1; j <= 4; j++) {
        i = parseInt(10 * Math.random());　
        code = code + charactors.charAt(i);
    };
    // 存储
    codes = code;
    Mail.send(mail, code)
        .then(() => {
            res.send({ err: 0, msg: "验证码发送成功" });
        })
        .catch(err => {
            res.send({ err: -1, msg: "验证码发送失败" });
        })
});


module.exports = router;