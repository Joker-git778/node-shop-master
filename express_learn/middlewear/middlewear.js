const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('中间件');
    let { token } = req.query;
    if (token) {
        next(); // 是否向下执行
    } else {
        res.send('缺少token');
    }
});

// 默认项  访问根路径可以省略
// app.use((req, res, next) => {

// });

app.get('/test1', (req, res) => {
    console.log('test1');
    // let { token } = req.query;
    // if (token) {
    //     res.send('ok');
    // } else {
    //     res.send('no ok');
    // }
    res.send('test1');
});

app.get('/test2', (req, res) => {
    console.log('test2');
    // let { token } = req.query;
    // if (token) {
    //     res.send('ok');
    // } else {
    //     res.send('no ok');
    // }
    res.send('test2');
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});