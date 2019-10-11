const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    // 设置上传后文件路径 uploads文件会自动创建
    destination: function(req, file, cb) {
        cb(null, './static/uploads')
    },
    // 设置文件名
    filename: function(req, file, cb) {
        // 截取后缀
        var exts = (file.originalname).split('.');
        // 防止有多个点
        var fileFormat = exts[exts.length - 1];
        // 给图片加上时间戳防止重名
        // 比如把 abc.jsp 图片切割成数组[abc, jpg], 然后用数组长度-1来获取后缀名
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
});

var upload = multer({ storage });

/**
 * 
 * @api {post} /file/upload 图片上传
 * @apiName upload
 * @apiGroup File
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Object} hehe: img 上传图片
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     err : 0,
 *     path: `/public/uploads/${req.file.filename}`
 * }
 * @apiSampleRequest http://localhost:3000/file/upload
 */

router.post('/upload', upload.single('hehe'), (req, res) => {
    // hehe指图片上传的一个key值
    res.send({ err: 0, path: `/public/uploads/${req.file.filename}` });
    // console.log(req);
});

module.exports = router;