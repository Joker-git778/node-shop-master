// 异步操作
// promise  async/await(es7)  蓝鸟

const fs = require('fs');

function delfile() {
    return new Promise((res, rej) => {
        // 异步操作
        fs.unlink('./hehe.js', err => {
            if (err) {
                // 失败
                rej('失败了');
            } else {
                res('成功');
            }
        })
    })
};
delfile()
    .then(msg => {
        console.log('then' + msg);
    })
    .catch(err => {
        console.log('catch' + err);
    });