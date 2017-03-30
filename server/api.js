const express = require('express');
const models = require('./db')
const router = express.Router()
const mongoose = require('mongoose')
const PersonModel = models.Login;
const BillModel = models.Bill;
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
        let newAccount = new PersonModel({
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
                res.send({ code: 0, msg: { userId: data.userId, name: data.userName, _id: data._id } })
            } else {
                res.send({ code: -2, msg: "密码错误" })
            }

        }
    })
});

// 新建账单 
router.post('/api/account/addAccount/:personId', (req, res) => {
    BillModel.getNextOrderId((err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data) {
                data.orderId = data.orderId + 1;
                return data;
            }
        }
    }).then((item) => {
        if (!item) {
            item = {
                orderId: 1
            }
        }
        let newBill = new models.Bill({
            orderId: item.orderId,
            typeName: req.body.typeName,
            pay: req.body.pay,
            income: req.body.income,
            typeIcon: req.body.typeIcon,
            typeColor: req.body.typeColor,
            createTime: req.body.createTime,
            personId: req.params.personId
        }).save((err, data) => {
            if (err) {
                res.send({ code: -1, msg: err.message });
            } else {
                res.send({ code: 0, msg: data });

            }
        })
    })
});

// 查找账单 当天收入支出的列表( 收入，支出，对应的类型)
router.get('/api/account/account/:personId', (req, res) => {

    // console.log(req.params.personId)
    let personId = mongoose.Types.ObjectId(req.params.personId);
    BillModel.aggregate([
        { $match: { personId: personId } }, {
            $group: {
                _id: "$createTime",
                paySum: { $sum: "$pay" },
                incomeSum: { $sum: "$income" },
                type: {
                    $push: {
                        typeName: "$typeName",
                        typeIcon: "$typeIcon",
                        pay: "$pay",
                        income: "$income"
                    }
                }
            },
        }, {
            $project: {
                createTime: "$_id",
                _id: 0,
                paySum: 1,
                incomeSum: 1,
                typeName: 1,
                type: 1
            }
        }, {
            $sort: { "createTime": -1 }
        }
    ], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send({ code: 0, msg: result });
    })

});
// 月支出收入分布 用于图表
router.get('/api/account/accountMonth/:personId/:month/:year', (req, res) => {
    // console.log(req.params.month)
    // console.log(req.params.year)
    let selectMonth = parseInt(req.params.month);
    let selectYear = parseInt(req.params.year);
    let personId = mongoose.Types.ObjectId(req.params.personId);
    // BillModel.find({
    //         personId: personId,
    //         $where: 'return this.createTime.getMonth() == ' + currentMonth ,
    //         $where: 'return this.createTime.getFullYear() == ' + currentYear,
    //      })
    //     .select('typeName pay income')
    //     .exec((err, data) => {

    //         res.send(data);
    //     })
    BillModel.aggregate([{
            $match: {
                personId: personId,
            }
        }, {
            $project: {
                month: { $month: "$createTime" },
                year: { $year: "$createTime" },
                pay: 1,
                income: 1,
                typeName: 1,
                typeColor: 1
            }
        }, {
            $match: {
                month: selectMonth,
                year: selectYear
            }
        }, {
            $group: {
                _id: '$typeName',
                payMonthSum: { $sum: "$pay" },
                incomeMonthSum: { $sum: "$income" },
                typeColor: { $push: "$typeColor" }

            }
        }, {
            $project: {
                _id: 1,
                payMonthSum: 1,
                incomeMonthSum: 1,
                typeColor: 1
            }
        }, {
            $sort: { 
                     incomeMonthSum: -1 ,
                     payMonthSum: -1, 

                 }
        }


    ], (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({ code: 0, msg: result })

    });
})

// 当月支出收入 
router.get('/api/account/accountCurrentMonth/:personId', (req, res) => {
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let personId = mongoose.Types.ObjectId(req.params.personId);
    BillModel.aggregate([{
            $match: {
                personId: personId,
            }
        }, {
            $project: {
                month: { $month: "$createTime" },
                year: { $year: "$createTime" },
                pay: 1,
                income: 1,
                // typeName: 1
            }
        }, {
            $match: {
                month: currentMonth,
                year: currentYear
            }
        }, {
            $group: {
                _id: '$month',
                payMonthSum: { $sum: "$pay" },
                incomeMonthSum: { $sum: "$income" }
            }
        }

    ], (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        var dataMonth = result[0];
        // 获取预算
        PersonModel.findOne({ _id: personId }).select('budgetCount').exec((err, data) => {
            if (err) {
                res.send(err);
                return;
            }
            dataMonth.budgetCount = data.budgetCount - dataMonth.payMonthSum;
            res.json({ code: 0, msg: dataMonth })
        })
    });
})

// 设置每月预算
router.post('/api/account/updateBudget/:personId', (req, res) => {
    let personId = mongoose.Types.ObjectId(req.params.personId);

    PersonModel.findOneAndUpdate({ _id: personId }, { $set: { "budgetCount": req.body.budget } }).exec((err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({ code: 0 })
    })

});

// 查看预算
router.get('/api/account/getBudget/:personId', (req, res) => {

    PersonModel.findOne({ _id: req.params.personId }).exec((err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({ code: 0, msg: result.budgetCount });
    })
})

module.exports = router;
