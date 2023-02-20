// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '123456',
//   database : 'ttsx'
//    // database : 'test'
// });
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });


// =====方法2==========
// https://blog.csdn.net/qq_48384411/article/details/125788791?ops_request_misc=&request_id=&biz_id=102&utm_term=node%20express%20mysql%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-125788791.142^v73^pc_new_rank,201^v4^add_ask,239^v2^insert_chatgpt&spm=1018.2226.3001.4187
const mysql = require('mysql');

// 连接数据库的信息
db={
    host:'localhost',
    user:'root',
    password:'123456',
    database:'ttsx'
}

// 封装数据库连接方法
const connectionDB=(sql,params,cb)=>{
    // return new Promise((resolve,reject)=>{
        // 创建数据库连接
        const connection=mysql.createConnection(db);
        // 连接数据库
        connection.connect((err,conn)=>{
            if(err){
                console.log("数据库连接失败");
                return;
            }
            console.log("数据库连接成功");
            connection.query(sql,params,cb)
        })

    // })
}

module.exports=connectionDB;
console.log('---数据库连接成功')