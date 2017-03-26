const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//连接数据库
mongoose.connect('mongodb://localhost:27017/accountBook')

//为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'))
db.once('open', () => console.log('Mongo connection successed') )
//定义登录模式
const loginSchema = new mongoose.Schema({
	userName: String,
	password: String,
	userId: Number,
	budgetCount: {type: Number , default: 3000} 
});
loginSchema.statics = {
	getNextUserId (cb) {
		return this.findOne().sort({_id:-1}).exec(cb)
	}
}
// 定义账单模式
const accountSchema = new mongoose.Schema({
	// isPay: Number,                         // 是否支出
	income: { type:Number,default: 0 },       // 收入
	pay: { type:Number,default: 0 },          // 支出
	createTime:  { type:Date , default: Date.now},
	typeIcon: String,
	typeName: String,
	orderId: Number,
	// userId: Number,
	typeId: Number,
	personId:  mongoose.Schema.Types.ObjectId
})
accountSchema.statics = {
	getNextOrderId (cb) {
		return this.findOne().sort({_id:-1}).exec(cb)
	}
}
const Models = {
	Login: mongoose.model('accountUser',loginSchema),
	Bill: mongoose.model('bill',accountSchema)
}


module.exports = Models;