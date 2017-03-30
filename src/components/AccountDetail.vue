<template>
    <div>
        <div class="accountChart">
            <div class="accountTag">
                <div class="item" :class="{active: isPay}" @click="toPay">支出</div>
                <div class="item" :class="{active: !isPay}" @click="toIncome">收入</div>
            </div>
        </div>
        <!-- <div v-if="isPay"> -->
        <!-- 支出 -->
        <account-chart :options="options" :show="isPay" :info="payInfo"  :type='1' @toLastMonth="toLastMonth"></account-chart>
        <!-- </div> -->
        <!-- <div v-else> -->
        <!-- 收入 -->
        <income-chart :options="optionsIncome" :show="!isPay"  :info="incomeInfo"  :type="2" @toLastMonth="toLastMonth"></income-chart>
        <!-- </div> -->
    </div>
</template>
<script>
import utilsDate from '../utils/dateUtils.js'
import accountChart from './AccountChart'
import incomeChart from './AccountChart'
export default {
    data() {
            return {
                isPay: true,
                num: "21",
                payKind: [],
                incomeKind: [],
                paySum: 0,
                incomeSum: 0,
                payInfo: [],
                incomeInfo: [],
                payColorInfo: [],
                incomeColorInfo: [],
                selectMonth: new Date().getMonth() + 1,
                selectYear: new Date().getFullYear(),
                options: {
                    charts: {
                        type: 'pie'
                    },
                    chart: {
                        events: {
                            load: function() {
                                // console.log(this.userOptions)
                                if(this.userOptions.title.text == 0) {
                                    this.setTitle({
                                        text: ""
                                    });
                                } else {
                                    var textElement = "总支出<br/>" + this.userOptions.title.text;
                                    this.setTitle({
                                        text: textElement
                                    });
                                }

                            }
                        }
                    },
                    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                    title: {
                        // floating: true,
                        useHTML: true,
                        // text: "<span style='font-size:0.2rem'>总支出</span><br/><span>{series.name}</span>",
                        text: '0',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: -10,
                        style: {
                            "fontSize": "0.3rem",
                            "textAlign": "center"
                        }
                    },
                    tooltip: {
                         backgroundColor: '#fff',
                         useHTML:true,
                        headerFormat: '{series.name}<br>',
                        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
                    },
                    plotOptions: {
                        pie: {
                            size: 120,
                            innerSize: '70',
                            dataLabels: {
                                enabled: false,
                                format: '<b>{point.name}</b>: {point.percentage:.2f}%',
                            },
                        }
                    },
                    credits: {
                        enabled: false,
                    },
                    series: [{
                        type: 'pie',
                        name: '支出',
                        data: [
                            // ['餐饮', 20],
                            // ['交通', 50],
                            // ['购物', 100],
                        ]
                    }]
                },
                optionsIncome: {
                    charts: {
                        type: 'pie'
                    },
                    chart: {
                        events: {
                            load: function() {
                                // console.log(this.userOptions)
                                if(this.userOptions.title.text == 0) {
                                    this.setTitle({
                                        text: ""
                                    });
                                } else {
                                    var textElement = "总收入<br/>" + this.userOptions.title.text;
                                    this.setTitle({
                                        text: textElement
                                    });
                                }
                            }
                        }
                    },
                    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                    title: {
                        // floating: true,
                        useHTML: true,
                        // text: "<span style='font-size:0.2rem'>总支出</span><br/><span>{series.name}</span>",
                        text: '',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: -10,
                        style: {
                            "fontSize": "0.3rem",
                            "textAlign": "center"
                        }
                    },
                    tooltip: {
                         backgroundColor: '#fff',
                        headerFormat: '{series.name}<br>',
                        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            size: 120,
                            innerSize: '70',
                            dataLabels: {
                                enabled: false,
                                format: '<b>{point.name}</b>: {point.percentage:.2f}%',
                            },
                        }
                    },
                    credits: {
                        enabled: false,
                    },
                    series: [{
                        type: 'pie',
                        name: '收入',
                        data: [
                            // ['餐饮', 20],
                            // ['交通', 50],
                            // ['购物', 100],
                        ]
                    }]
                }
            }
        },
        computed: {
            numb() {
                return this.num + "321"
            }
        },
        methods: {
            toPay() {
                this.isPay = true;
            },
            toIncome() {
                this.isPay = false;

            },

            showPay() {
                let vm = this;
                this.$http.get('/api/account/accountMonth/' + this.$store.state.personId +
                        '/' + this.selectMonth + '/' + this.selectYear)
                    .then((res) => {
                        if (res.body.code === 0) {
                            res.body.msg.forEach((item => {
                                    this.paySum += parseFloat(item.payMonthSum);

                                }))
                            this.paySum = parseFloat(this.paySum).toFixed(2);
                                // 给组件
                            this.payInfo = res.body.msg.filter((info) => {
                                return info.payMonthSum != 0;
                            }).map((info) => {
                                vm.payColorInfo.push(info.typeColor[0]);
                                return {
                                    name: info._id,
                                    money: parseFloat(info.payMonthSum).toFixed(2),
                                    per: Math.round(info.payMonthSum / this.paySum * 10000) / 100.0,
                                    color: info.typeColor[0],

                                }
                            });

                            // console.log(vm.payInfo)

                            // 图表
                            this.payKind = res.body.msg.map((info) => {
                                return [info._id, info.payMonthSum];
                            }).filter((info) => {
                                return info[1] != 0;
                            })
                            this.options.series[0].data = this.payKind;
                            this.options.title.text = this.paySum;
                            this.options.colors = this.payColorInfo;
                            // console.log(vm.payKind)

                        }
                    })
            },
            showIncome() {
                let vm = this;
                this.$http.get('/api/account/accountMonth/' + this.$store.state.personId +
                        '/' + this.selectMonth + '/' + this.selectYear)
                    .then((res) => {
                        if (res.body.code === 0) {
                            res.body.msg.forEach((item => {
                                    this.incomeSum += item.incomeMonthSum;

                                }))
                            this.incomeSum = parseFloat(this.incomeSum).toFixed(2);

                                // 图表
                            this.incomeKind = res.body.msg.map((info) => {
                                return [info._id, info.incomeMonthSum];
                            }).filter((info) => {
                                return info[1] != 0;
                            });
                            // 给组件
                            this.incomeInfo = res.body.msg.filter((info) => {
                                return info.incomeMonthSum != 0;
                            }).map((info) => {
                                vm.incomeColorInfo.push(info.typeColor[0]);
                                return {
                                    name: info._id,
                                    money: parseFloat(info.incomeMonthSum).toFixed(2),
                                    per: Math.round(info.incomeMonthSum / this.incomeSum * 10000) / 100.0,
                                    color: info.typeColor[0],
                                }
                            });
                            this.optionsIncome.series[0].data = this.incomeKind;
                            this.optionsIncome.title.text = this.incomeSum;
                            this.optionsIncome.colors = this.incomeColorInfo;

                            // console.log(vm.incomeKind)

                        }
                    })
            },
            // 上下一个月
            toLastMonth(info) {
                // console.log(info);
                this.selectMonth = info.month;
                this.selectYear = info.year;
                // type为1 支出状态 
                if (info.type == 1) {
                    this.paySum = 0;
                    this.showPay();
                } else { //type 为2 收入状态
                    this.incomeSum = 0;
                    this.showIncome();
                }
            }

        },
        created() {
            this.showPay();
            this.showIncome();
        },
        components: {
            accountChart,
            incomeChart
        }

}
</script>
<style scoped lang="scss">

.accountChart {
    background-color: #fff;
    padding: 0.4rem 0 0rem 0;
    .accountTag {
        display: flex;
        padding: 0rem 0.2rem;
        // margin-bottom: 0.8rem;
        border-bottom: 1px solid #f2f2f2;
        .item {
            font-size: 0.5rem;
            flex: 1;
            padding-bottom: 0.2rem;
            text-align: center;
        }
        .active {
            border-bottom: 2px solid #1AAD19;
        }
    }
    .content {
        text-align: center;
        font-size: 0.35rem;
        span:first-child {
            margin-right: 0.3rem;
        }
        span:last-child {
            margin-left: 0.3rem;
        }
    }
}

.accountPay {
    margin-top: 0.6rem;
    background-color: #fff;
    .content {
        display: flex;
        justify-content: space-around;
        padding: 0.2rem;
            justify-content: flex-start;

        border-top: 1px solid #F2F2F2;
        p {
            flex: 1;
            &:nth-child(2) {
                text-align: center;
            }
            &:nth-child(3) {
                text-align: right;
            }
        }
    }
}
</style>
