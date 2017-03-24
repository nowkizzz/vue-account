<template>
    <div>
        <div class="accountChart">
            <div class="accountTag">
                <div class="item" :class="{active: isPay}" @click="toPay">支出</div>
                <div class="item" :class="{active: !isPay}" @click="toIncome">收入</div>
            </div>
            <div class="content">
                <span @click="lastMonth">  &lt;  </span>
                <span>{{beginMonth}}</span>
                <span>至 </span>
                <span>{{endMonth}}</span>
                <span @click="nextMonth">  &gt; </span>
            </div>
        </div>
        <highcharts :options="options" style="height:4rem" ref="highcharts"></highcharts>

        <div class="accountPay">
			<div class="content">
				<p>
					<i class="iconfont icon icon-canju"></i>
					<span>交通</span>
				</p>
				<p>
					<span>66%</span>
				</p>
				<p>
					<span>1000</span>
				</p>
			</div>

		</div>
    </div>
</template>
<script>
import utilsDate from '../utils/dateUtils.js'

export default {
    data() {
            return {
                isPay: true,
                num : "21",
                beginMonth: utilsDate.fullStartOfMonth,
                endMonth: utilsDate.fullEndOfMonth,
                options: {
                    charts: {
                        type: 'pie'
                    },
                    chart: {
                    	events: {
                			load: function () { 
                				console.log(this.userOptions)
                				var textElement = "总支出<br/>" + this.userOptions.series[0].name; 
                				this.setTitle({text: textElement}); 
                	}
                    	}
                    },
                    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655','#FFF263', '#6AF9C4'],
                    title: {
                    	// floating: true,
                    	useHTML:true,
                        // text: "<span style='font-size:0.2rem'>总支出</span><br/><span>{series.name}</span>",
                        text: '总支出<br/>{colors[0]}',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: -10,
                        style: {
                        	"fontSize":"0.3rem",
                        	"textAlign": "center"
                        }
                    },
			        tooltip: {
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
                        name: this.num,
                        data: [
                            ['餐饮', 20],
                            ['交通', 50],
                            ['购物', 100],
                        ]
                    }]
                }
            }
        },
        computed: {
        	numb () {
        		return this.num+"321"
        	}
        },
        methods: {
            toPay() {
                this.isPay = true;
            },
            toIncome () {
                this.isPay = false;
            },
            lastMonth () {
            	this.beginMonth = utilsDate.lastMonth(this.beginMonth).beginMonth;
            	this.endMonth = utilsDate.lastMonth(this.endMonth).endMonth;
            },
            nextMonth () {
            	this.beginMonth = utilsDate.nexMonth(this.beginMonth).beginMonth;
            	this.endMonth = utilsDate.nexMonth(this.endMonth).endMonth;
            }

        },
        created () {
        		this.options.series[0].name = this.numb;
        }

}
</script>
<style scoped lang="scss">
.accountChart {
    background-color: #fff;
    padding: 0.4rem 0 0.5rem 0;
    .accountTag {
        display: flex;
        padding: 0rem 0.2rem;
        margin-bottom: 0.8rem;
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
    }
}
.accountPay {
	margin-top: 0.6rem;
	background-color: #fff;
	.content {
		display: flex;
		justify-content: space-around;
		padding: 0.2rem;
		border-top: 1px solid #F2F2F2;
		p{
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
