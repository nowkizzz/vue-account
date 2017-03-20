const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mondodb://localhost/accountUser')

//为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'))
db.once('open', () => console.log('Mongo connection successed') )

//定义模式
const loginSchema = mongoose.schema({
	userName: String,
	password: String
});

const Models = {
	Login: mongoose.model('Login',loginSchema)
}


model.exports = Models;