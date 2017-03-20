const express = require('express');
const models = require('./db')
const router = express.Router()



router.get('/api/login/getAccount',(req,res) => {
	//通过模型查找数据库
	models.Login.find((err,data) => {
		if(err) {
			res.send(err);
		} else {
			res.send(data)
		}
	});
});

module.exports = router;

