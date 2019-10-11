const mongoose = require('mongoose');
var foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true }, // 价格 存字符串小数会有问题0.1+0.2
    desc: { type: String, required: true }, // 描述
    typeName: { type: String, required: true }, // 类型
    typeId: { type: Number, required: true },
    img: { type: String, required: true }
});

// 将schema对象转换成数据模型
var Food = mongoose.model('foods', foodSchema); // 数据对象和集合关联 ('集合名'， schema对象)
module.exports = Food;