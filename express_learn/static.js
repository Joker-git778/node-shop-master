const express = require('express');
const path = require('path');
const app = express();

// path路径模块 拼接
// console.log(path.join(__dirname, './static'));
app.use(express.static(path.join(__dirname, './static')));

app.listen(3000, () => {
    console.log(`Server started on port`);
});