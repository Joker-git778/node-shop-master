const fs = require('fs');

// 封装
// 查询文件
function isEixt() {
    return new Promise((res, rej) => {
        fs.stat('./hehe.js', (err, stats) => { // 检测文件是否存在
            if (err) {
                rej('文件不存在');
            } else {
                res('文件存在');
            }
        })
    })
};

// 删除文件
function delFile() {
    return new Promise((res, rej) => {
        fs.unlink('./hehe.js', err => {
            if (err) {
                rej('del is no ok');
            } else {
                res('del is ok');
            }
        })
    })
};

isEixt()
    .then(() => {
        console.log('is exit 成功处理')
        return delFile()
    })
    .then(() => {
        console.log('删除文件成功处理');
        throw new Error('手动终止');
    })
    .then(() => {
        console.log(111);
    })
    .then(() => {
        console.log(2222)
    })
    .catch((err) => {
        console.log(err);
    })