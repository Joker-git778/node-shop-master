const express = require('express');
const app = express();
// express实例化

const bodyParser = require('body-parser');
// app.use 使用中间件（插件）
// 解析表单数据 x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 解析json
app.use(bodyParser.json());

// 登录
app.get('/user/login', (req, res) => {
    // 接收get 参数 query
    console.log(req.query);
    // 打开浏览器 http://localhost:3000/user/login?us=wangyi&ps=456
    console.log('你好');

    let { us, ps } = req.query;
    console.log(typeof us);
    console.log(ps)
        // 处理参数
    if (us === 'wangyi' && ps === '156') {
        res.send({ err: 0, msg: 'login ok' });
    } else {
        res.send({ err: -1, msg: 'use pass no ok' });
    }
});

app.get('/movie/del', (req, res) => {
    res.send('movie');
});


// 注册
app.post('/user/reg', (req, res) => {
    // 接收post 数据 请求体 req.body
    let { us, ps } = req.body;
    console.log(req.body);
    // express 不能直接解析消息体
    // 通过第三方插件解析
    if (us === 123 && ps === 123) {
        res.send({ err: 0, msg: 'ok' });
    } else {
        res.send({ err: -1, msg: 'no ok' });
    }
});

app.listen(3000, () => {
    // 监听3000 端口 开启服务器
    console.log(`server start`);
});

// http://localhost:3000/user/login

/**
 * api 接口构成
 * ip 地址
 * port 端口
 * pathname 路径  语义化
 * method 方法 get post
 * 接收用户传递数据
 * 接收用户传递数据 数据格式由后端定义
 */