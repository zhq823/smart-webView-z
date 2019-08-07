//1,加载模块
var express = require("express");
//2,模块生成对象
var app = express();
//post 需要引入这个包
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//3,设置静态文件夹
app.use(express.static('public'));
//4,接收并处理get请求   
//参数一：是接收数据信息的路径，要和表单提交的路径（action="/user"）保持一致
//参数二：回调函数，用于处理和响应数据
app.get('/getMe',function(request,response){
	//request:浏览器发送过来的信息，以js对象的结构展示
	//console.log(request)
	//request这个对象中有一个属性query ，这个属性的值就是表单提交的数据，也是以对象的形式展示的
	console.log(request.query)
	//{ userName: 'zhangsan', password: '123' }
	
	//取出表单提交的数据
	var name = request.query.userName;
	var password = request.query.password;
	//根据提交的信息，判断登录结果
	if(name == 'jack' && password == '123456'){
		//response 参数是服务器的响应数据对象
		//send() 方法返回给浏览器的信息
		response.send('登录成功')
	}else{
		response.send('登录失败')
	}
	
})
app.post('/login', function(request, response) {
    console.log(request.body)
    if (request.body.userName === 'jack' && request.body.password === '123456') {
        response.send('登录成功')
    } else {
        response.send('登录失败啊')
    }
})
app.listen(5000, function(){
	console.log("服务器正在运行....")
})
