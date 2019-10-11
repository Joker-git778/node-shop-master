const fs = require('fs');

// 同步读取文件  在关键位置捕获错误信息
// fs.readdirSync(path[, options])
// path 路径
// options 参数

// let dirs = fs.readdirSync('./');
// console.log(dirs);

// 同步错误捕获
// try {
//     // 可能出错的代码
//     let dirs = fs.readdirSync('../node');
//     console.log(dirs);
// } catch (error) {
//     console.log('出错了');
//     console.error(error);
// }

// 异步读取
fs.readdir('../xxx', (err, data) => {
    // console.log(err); // null 默认
    // console.log(data);
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(2222); // 先出现 因为异步

// 错误的回调优先 
// 在回调函数中第一个参数表示错误对象 默认为null 如果出现错误 err就是错误对象

/**
 * 错误处理 同步 try catch 异步 错误的回调优先
 * 文件夹操作
 * c (creat) u (upload) r (read) d (del)
 */