// const express=require("express");
// const ejs =require("ejs");
// const app =express()
// //配置模板引擎
// app.engine("html",ejs.__express)
// app.set("view engine","html")

// app.get("/",(req,res)=>{
// 	let title = "你好ejs";
// 	res.render("index",{
// 		title:title
// 	})
// })

// app.listen(3000,()=>{
//  console.log('server in running at http://localhost:3000');
// });

// ======//配置静态web目录============================
const express=require("express");
const ejs =require("ejs");
const app =express()
//配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")
//配置静态web目录
app.use(express.static("static"))
https://blog.csdn.net/weixin_47863547/article/details/119519504?ops_request_misc=&request_id=&biz_id=102&utm_term=express%E6%A1%86%E6%9E%B6%E4%B8%AD%E7%9A%84html%E5%92%8Cejs&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-119519504.142^v73^pc_new_rank,201^v4^add_ask,239^v2^insert_chatgpt&spm=1018.2226.3001.4187

app.get("/",(req,res)=>{
	let title = "你好ejs";
	res.render("index",{
		title:title
	})
})

app.listen(3000,()=>{
 console.log('server in running at http://localhost:3000');
});