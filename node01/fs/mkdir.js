const fs = require('fs');

// 创建
// fs.mkdir('./test', (err) => {
//     console.log(err);
//     console.log(data);
// });

// 更改
// fs.rename('./test', './test01', (err) => {
//     if (err) {
//         console.log('失败');
//     } else {
//         console.log('ok');
//     }
// })

// 删除  只能删除空文件夹
fs.rmdir('./test01', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('删除');
    }
})