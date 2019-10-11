# promise

大量的异步操作 如果需要顺序执行 通过回调函数执行  回调地狱

通过promise 解决回调地狱

1. 封装promise对象 函数
```
function test() {
    // 返回promise对象
    return Promise((res, rej) => {
        // 需要的异步处理
        成功时 res
        失败 rej
    })
}
```
2. 根据顺序 形成链式调用
3. 捕获错误