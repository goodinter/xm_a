// https://www.bilibili.com/video/BV16f4y1U7oT?p=10 精华
const http = require('http');
const fs = require('fs');
const common = require('./module/common.js');
const path = require('path');
const url = require('url');
http.createServer(function (req, res) {
        // http://localhost:8081/login.html
        // http://localhost:8081/index.html
// 1,获取地址

let pathname = url.parse(req.url).pathname;
pathname=pathname=='/'?'/index.html':pathname;
// 可以获取后缀名path.extname()
let extname = path.extname(pathname);
// 2,通过fs模块读取文件
if(pathname!='/favicon.ico'){
    fs.readFile('./static'+pathname,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
            res.end('404这个页面布存在');
        }
    })
}
     // let mime = common.getMime(extname);
      let mime = common.getMime(extname)
     // res.writeHead(200, { 'Content-Type': '"+mime+";charset="utf-8"' });
     //        res.end(data);
      res.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
     
      res.end('data');
    }).listen(3000);
    
    console.log('Server running at http://127.0.0.1:3000/');

// let extname = path.extname(extname)
// let mime = common.getMime(extname)
// res.writeHead(200, { 'Content-Type': '"+mime+";charset="utf-8"' });
//             res.end(data);
