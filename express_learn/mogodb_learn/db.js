const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });

// 连接数据库
const db = mongoose.connection; // 数据库连接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db ok');
});

// schema对象  操作数据库

// 获取schema对象
// var Schema = mongoose.Schema;

// 创建一个和集合相关的schema 对象  类似于表头
var userSchema = new mongoose.Schema({
    us: { type: String, required: true }, // required 表示必须
    ps: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 }, // default 不传默认值
});

// 将schema对象转换成数据模型
var User = mongoose.model('user', userSchema); // 数据对象和集合关联 ('集合名'， schema对象)

// 操作数据库
// User.insertMany({ us: 'wangyi', ps: '123', age: 16 }) // 插入多条数据
//     .then(data => {
//         console.log(data);
//         console.log('插入成功');
//     })
//     .catch(err => {
//         console.log('插入失败');
//     });

// 修改
User.update({ us: 'wangyi' }, { us: 'wanger' })
    .then(data => {
        console.log(data);
        console.log('修改成功');
    })
    .catch(err => {
        console.log('插入失败');
    });

// 查询
// User.find({ age: 17 })
//     .then(data => {
//         console.log(data);
//         console.log('查询成功');
//     })
//     .catch(err => {
//         console.log('查询失败');
//     })

// 删除
// User.remove()
//     .then(data => {
//         console.log(data);
//         console.log('删除成功');
//     })
//     .catch(err => {
//         console.log('删除失败');
//     })