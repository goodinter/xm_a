//express_demo.js 文件
// https://www.bilibili.com/video/BV16f4y1U7oT/?p=27&spm_id_from=333.880.my_history.page.click&vd_source=1d8d79dd052d165a3d1bc560b59b5a0a<
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World 你好express');
})
app.get('/article', function (req, res) {
   res.send('Hello World 你好article');
})
 
app.get('/login', function (req, res) {
   res.send('登录');
})
app.get('/register', function (req, res) {
   res.send('注册页面');
})
app.post('/dologin', function (req, res) {
	console.log('执行登录')
   res.send('执行dologin');
})
app.put('/puttest', function (req, res) {
   res.send('put页面');
})
app.delete('/deletetest', function (req, res) {
	console.log('deletetest页面')
   res.send('执行dologin');
})

app.get('/registertt', function (req, res) {
   res.send('注册页面ttt');
})
 
app.get('/admin/user/add', function (req, res) {
   res.send('注册add页面');
})
  
app.get('/admin/user/edit', function (req, res) {
   res.send('注册edit页面');
})
  

 //动态路由
 app.get('/article/:id', function (req, res) {
 	var id=req.params["id"]
   res.send('动态路由'+id);
})
//下面口就执行了，因为上面有了动态路由
 app.get('/admin/user/editqqq', function (req, res) {
   res.send('注册edit页面');
})
 // get 传值http://127.0.0.1:8081/chuan/sss11
 app.get('/chuan', function (req, res) {
 	let query = req.query
 	console.log(query)
   res.send('chuan');
}) 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
// 执行以上代码：

// $ node express_demo.js 
// 应用实例，访问地址为 http://0.0.0.0:8081