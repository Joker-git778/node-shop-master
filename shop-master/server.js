const express = require('express');
const db = require('./db/connect');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// 设置代理
// const request = require('request');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, './static')));

// 路由
const userRouter = require('./router/userRouter');
const foodRouter = require('./router/foodRouter');
const fileRouter = require('./router/fileRouter');
app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/file', fileRouter);

// app.get('/cors', (req, res) => {
//     // 发送一个服务器请求
//     console.log('cors.html 的ajax');
//     request('www.baidu.com', (err, response, body) => {
//         console.log(err);
//         console.log(body)
//     });
//     res.send('ok');
// });

app.listen(3000, () => {
    console.log(`Server started on port`);
});