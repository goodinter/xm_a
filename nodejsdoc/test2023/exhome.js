const express=require("express");
const ejs =require("ejs");
const app =express()
//配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")

app.get("/",(req,res)=>{
	let title = "你好ejs";
	res.render("index",{
		title:title
	})
})

app.listen(3000,()=>{
 console.log('server in running at http://localhost:3000');
});