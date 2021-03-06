// 引入express
const express = require('express')
// 引入文件模块
const fs = require('fs')
// 引入编写好的api
const api = require('./api')
// 引入处理路径的模块
const path = require('path') 
// 引入处理post数据的模块
const bodyParse = require('body-parser')


const app = express();


app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: false}))
app.use(api)

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname,'../dist')))

// 因为是单页引用 所有请求都走/dist/index.html

app.get('*',function(req,res){
	const html = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8')
	res.send(html)
})

app.listen(8088)
console.log('success listen....')