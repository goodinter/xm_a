
https://blog.csdn.net/h18377528386/article/details/123426092
视频学习
https://www.bilibili.com/video/BV16f4y1U7oT/?p=11&spm_id_from=pageDriver&vd_source=1d8d79dd052d165a3d1bc560b59b5a0a
node服务器搭建
node服务器搭建流程
1，创建一个空文件夹，用来存放项目。

2，在空文件夹中，在cmd命令提示符中输入npm init  初始化一个服务器项目。

设置的属性信息:
    name : 项目名称（小括号中是默认的，文件夹名相同，不能包含大写字母或者汉字）
    version ：项目的版本号（格式 ：a.b.c）
    版本号的命名：最原始的版本号一般用1.0.0，版本升级时会修改版本号。如果有重大更新时， 修改a；当有新的功能添加和修改时，改b；修复漏洞g时，改c
    description：项目的描述信息
    entry point：入口文件（默认是 index.js）
    test command: 测试命令
    git repository： git的本地存储室
    keywords：关键词
    anthor：作者
    license：许可证（默认ISC）
    Is this ok？：是否确定

上述步骤执行完之后会在终端对应的目录下生成一个package.json文件，json文件中有一个依赖项 dependencies
    依赖项是这个项目关联的模块，把模块关联到依赖项中之后，即使把模块删掉，也可以找回。通 过npm install指令重新下载关联的依赖项（模块）

3，安装内置模块 express（快速搭建node服务器的一个框架）

4，新建一个js文件，文件名要于entry point设置的名字一样，默认为index.js

写入：

（1），先引入内置模块 express

var express=reqiure('express');

（2)，调用内置模块函数，返回值为一个对象app

var app=express();

(3)，app对象的use方法（express.static('punlic')

app.use(express.static('public'))

(4)，监听端口号，启动服务器

app.listen(5000,function()

{console,log('服务器已开启，请访问5000端口')}

)

5,新建一个静态目录（文件夹），存放前端网页与一些插件

将需要显示在网站上的网页放入punlic目录下，域名没有参数时，默认为index.html 文件

运行时，先启动服务器，在访问网站

　　

下载项目时，依赖包中的插件一般不会下载，需使用npm i 下载依赖包中的插件，框架等

Administrator@DESKTOP-SV4FSRE MINGW64 /d/nodejsdoc/test2023 (master)
$ npm i nodemon -g

added 32 packages, and audited 33 packages in 22s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Administrator@DESKTOP-SV4FSRE MINGW64 /d/nodejsdoc/test2023 (master)
$ nodemon -v
2.0.20

Administrator@DESKTOP-SV4FSRE MINGW64 /d/nodejsdoc/test2023 (master)
$ nodemon index.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server running at http://127.0.0.1:8080/