const express = require('express');
const models = require('./db')
const router = express.Router()

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
    let userId = models.Login.getNextUserId(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            if (data) {
                data.userId = data.userId + 1;
                return data;
            }
        }
    }).then((item) => {
        if (!item) {
            item = { userId: 1 }
        }
        // 新建数据
        let newAccount = new models.Login({
            userName: req.body.userName,
            password: req.body.password,
            userId: item.userId
        }).save((err, data) => { // 保存数据newAccount数据进mongoDB
            if (err) {
                res.send({ code: -1, msg: err.message });
            } else {
                res.send({ code: 0, msg: data.userId });
            }
        });
    })

});

// 查找登录账号
router.get('/api/login/getAccount', (req, res) => {
    //通过模型查找数据库
    models.Login.find((err, data) => {
        if (err) {
            res.send({ code: -1, msg: err.message });
        } else {
            res.send({ code: 0, msg: data });
        }
    });
});

// 验证登录
router.post('/api/login/login', (req, res) => {
    const query = models.Login.findOne({ userName: req.body.userName });

    query.exec((err, data) => {
        if (err) {
            res.send({ code: -1, msg: err.message })
        } else {
            if (!data) {
                res.send({ code: -2, msg: "不存在该账号" })
            } else if (data.password === req.body.password) { //密码正确
                res.send({ code: 0, msg: { userId: data.userId, name: data.userName } })
            } else {
                res.send({ code: -2, msg: "密码错误" })
            }

        }
    })
});

// 新建账单 
router.post('/api/account/addAccount/:userId', (req, res) => {
    models.Bill.getNextOrderId((err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data) {
                data.orderId = data.orderId + 1;
                return data;
            }
        }
    }).then((item) => {
    	// console.log(item)
        if (!item) {
            item = {
                orderId: 1
            }
            let newBill = new models.Bill({
                orderId: item.orderId,
                typeName: req.body.typeName,
                pay: req.body.pay,
                income: req.body.income,
                typeIcon: req.body.typeIcon
            }).save((err, data) => {
                if (err) {
                    res.send({ code: -1, msg: err.message });
                } else {
                    res.send({ code: 0, msg: data });

                }
            })
        }
    })
})
module.exports = router;
