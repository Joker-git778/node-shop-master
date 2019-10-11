const express = require('express');
const router = express.Router();
const foodModel = require('../db/model/foodModel');

/**
 * 
 * @api {post} /food/add 食品添加
 * @apiName add
 * @apiGroup Food
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} name 食品名字
 * @apiParam  {String} price 价格
 * @apiParam  {String} desc 描述
 * @apiParam  {String} typeName 类型
 * @apiParam  {Number} typeId 类型id
 * @apiParam  {String} img 图片
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "添加成功"
 * }
 * @apiSampleRequest http://localhost:3000/food/add
 */

// 添加
router.post('/add', (req, res) => {
    // let data = {
    //     name: '拍黄瓜',
    //     price: '99', // 价格 存字符串 小数会有问题0.1+0.2
    //     desc: '好吃', // 描述
    //     typeName: '凉菜', // 类型
    //     typeId: 1,
    //     img: '/public/img/109.jpg'
    // };
    let { name, price, desc, typeName, typeId, img } = req.body;
    foodModel.insertMany({ name, price, desc, typeName, typeId, img })
        .then(data => {
            res.send({ err: 0, msg: "添加成功" });
        })
        .catch(err => {
            console.log(err)
            res.send({ err: -1, msg: "添加失败" });
        })
});

/**
 * 
 * @api {post} /food/getInfoByType 食品查询
 * @apiName getInfoByType
 * @apiGroup Food
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} typeId 类型id
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "查询成功",
 *     list: data
 * }
 * @apiSampleRequest http://localhost:3000/food/getInfoByType
 */

// 查询
router.post('/getInfoByType', (req, res) => {
    let { typeId } = req.body;
    foodModel.find({ typeId })
        .then(data => {
            res.send({ err: 0, msg: "查询成功", list: data });
        })
        .catch(err => {
            console.log(err)
            res.send({ err: -1, msg: "查询失败" });
        })
});

/**
 * 
 * @api {post} /food/getInfoBykw 食品关键字查询
 * @apiName getInfoBykw
 * @apiGroup Food
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} kw 关键字
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "查询成功",
 *     list: data
 * }
 * @apiSampleRequest http://localhost:3000/food/getInfoBykw
 */

// 关键字查询
router.post('/getInfoBykw', (req, res) => {
    let { kw } = req.body;
    let reg = new RegExp(kw); // 创建一个正则表达式 匹配关键字
    // foodModel.find({ name: { $regex: reg } }) // 匹配名字
    console.log(kw)
    foodModel.find({ $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] }) // 匹配多个 名字以及描述
        .then(data => {
            res.send({ err: 0, msg: "查询成功", list: data });
        })
        .catch(err => {
            console.log(err)
            res.send({ err: -1, msg: "查询失败" });
        })
});

/**
 * 
 * @api {post} /food/del 食品删除
 * @apiName del
 * @apiGroup Food
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} _id 食品id
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "删除成功"
 * }
 * @apiSampleRequest http://localhost:3000/food/del
 */

// 删除
router.post('/del', (req, res) => {
    let { _id } = req.body;
    foodModel.findByIdAndRemove({ _id })
        .then(data => {
            res.send({ err: 0, msg: "删除成功" });
        })
        .catch(err => {
            console.log(err)
            res.send({ err: -1, msg: "删除失败" });
        })
});

/**
 * 
 * @api {post} /food/update 食品修改
 * @apiName update
 * @apiGroup Food
 * @apiVersion  1.0.0
 * 
 * @apiParam  {String} name 食品名字
 * @apiParam  {String} price 价格
 * @apiParam  {String} desc 描述
 * @apiParam  {String} typeName 类型
 * @apiParam  {Number} typeId 类型id
 * @apiParam  {String} img 图片
 * @apiParam  {Number} _id 食品id
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "修改成功"
 * }
 * @apiSampleRequest http://localhost:3000/food/update
 */

// 修改
router.post('/update', (req, res) => {
    let { name, price, desc, typeName, typeId, img, _id } = req.body;
    foodModel.updateOne({ _id }, { name, price, desc, typeName, typeId, img }) // 查找到哪一个更改
        .then(data => {
            res.send({ err: 0, msg: "修改成功" });
        })
        .catch(err => {
            console.log(err)
            res.send({ err: -1, msg: "修改失败" });
        })
});

/**
 * 
 * @api {post} /food/getInfoByPage 分页查询
 * @apiName getInfoByPage
 * @apiGroup Food
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} pageSize 显示几条数据
 * @apiParam  {Number} page 第几页
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     msg : "查询成功",
 *     info : {
 *          list: data, 
 *          count: count, 
 *          allpage: allpage
 *     }
 * }
 * @apiSampleRequest http://localhost:3000/food/getInfoByPage
 */

// 分页查询api
router.post('/getInfoByPage', (req, res) => {
    // 显示几条数据
    let pageSize = req.body.pageSize || 5; // 看一下有没有pageSize 没有默认是5
    // 第几页
    let page = req.body.page || 1;
    // 总页数
    let count = 0;
    foodModel.find()
        .then(list => {
            count = list.length; // 获取总的数据条数
            // 分页
            // limit() 读取几条数据
            // skip() 跳过几条数据 默认是0
            return foodModel.find().limit(Number(pageSize)).skip(Number((page - 1) * pageSize))
        })
        .then(data => {
            console.log(data);
            // 获取总页数
            let allpage = Math.ceil(count / pageSize); // 向上取整
            res.send({ err: 0, msg: '查询成功', info: { list: data, count: count, allpage: allpage } });
        })
        .catch(err => {
            console.log(err)
            res.send({ err: -1, msg: "查询失败" });
        })
});

module.exports = router;