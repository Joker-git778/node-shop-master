## express

### 通过express 框架 书写api

#### 什么是api
    ajax 2007.8
    前后端分离 ajax请求数据

    接口
    登录接口逻辑分析
    1. 接受用户传递数据
    2. 处理数据
    3. 返回数据

### express基本使用

1. 安装 express

```
npm i express --save
```
模块引用（第三方）的引用 从当前目录的node_modules 以此向上寻找

### 服务器相关
   1. 查看本地端口 window: ip config mac: if config 
   
   服务器： 1. 服务器就是一台电脑 2. 服务器软件(apach tomcat iis nginx node) 3. 服务器ip和端口号
   局域网： 服务器通过网线(无线)连接 每一台电脑都有一个ip
   外网：
   ip: 确认服务器主机位置
   port： 确认服务器里某一程序

### postman 接口测试
    post 使用方式
    form json

### api接口书写
+ 接收数据
  - get req.query
  - post req.body 需要body-parser 插件解析 
    + 注意数据格式 json x-www-form-urencode fromdata

### 中间件 middlewear
+ 内置中间件 static
+ 自定义中间件 （全局、局部）
+ 第三方中间件 (body-parser) (拦截器)

中间件使用一定要在合适的地方使用

### 静态资源目录 static
    指定一个目录，目录可以被访问 Apache (www)

### 非关系型数据库（文档） mongodb

#### 安装
1. 下载
2. 安装 
    + 最后一个对号不要选
    + 缺少数据库文件 c:data/db
    + 不是内部命令 设置环境变量

#### 指令
    mongodb 数据库名
    mongod 命令行启动mongodb数据库
    mongo 命令行操作数据库指令
    mongoose node 操作数据库的插件