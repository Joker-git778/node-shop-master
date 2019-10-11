const express = require('express');
const app = express();

// 局部中间件  对谁写谁有用
app.get('/test1', (req, res, next) => {
    console.log('fun1');
    next();
}, (req, res) => {
    console.log('fun2');
    res.send('test1');
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});