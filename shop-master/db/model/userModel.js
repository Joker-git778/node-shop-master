const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    us: { type: String, required: true }, // required 表示必须
    ps: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 }, // default 不传默认值
});

// 将schema对象转换成数据模型
var User = mongoose.model('user', userSchema); // 数据对象和集合关联 ('集合名'， schema对象)
module.exports = User;