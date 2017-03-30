<template>
    <div v-if="show" class="chartContainer">
        <div class="content">
            <span @click="lastMonth">&lt;</span>
            <span>{{beginMonth}}</span>
            <span>至 </span>
            <span>{{endMonth}}</span>
            <span @click="nextMonth">&gt;</span>
        </div>
        <highcharts :options="options" style="height:4rem" ref="highcharts"></highcharts>

        <p v-if="info.length == 0" class="blankNotice"> 空空如也</p>

        <div class="accountPay">
            <div class="content" v-for="x in info">
                <p>
                    <i class="colorBlock" :style="{background:x.color}"></i>
                    <span>{{x.name}}</span>
                </p>
                <p>
                    <span>{{ x.per }}%</span>
                </p>
                <p>
                    <span>{{x.money }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import utilsDate from '../utils/dateUtils.js'

export default {
    props: ['options','show','info', 'type'],
    data() {
        return {
            beginMonth: utilsDate.fullStartOfMonth,
            endMonth: utilsDate.fullEndOfMonth,
        }
    },
    methods: {
        lastMonth() {
            this.beginMonth = utilsDate.lastMonth(this.beginMonth).beginMonth;
            this.endMonth = utilsDate.lastMonth(this.endMonth).endMonth;
            let obj = {
            	year: this.beginMonth.substring(0,4),
            	month: parseInt(this.beginMonth.substring(5,7) ),
            	type: this.type
            }
            this.$emit('toLastMonth',obj);  
        },
        nextMonth() {
            this.beginMonth = utilsDate.nexMonth(this.beginMonth).beginMonth;
            this.endMonth = utilsDate.nexMonth(this.endMonth).endMonth;
            let obj = {
            	year: this.beginMonth.substring(0,4),
            	month: parseInt(this.beginMonth.substring(5,7) ),
            	type: this.type
            }
            this.$emit('toLastMonth',obj); 
        }
    }
}
</script>
<style scoped lang="scss">
.chartContainer {
	// background-color: #fff;
}
.blankNotice {
	font-size: 0.7rem;
	color: #ccc;
	text-align: center;
	margin-bottom: 100%;
}
.content {
    background-color: #fff;
	padding-top: 0.8rem;
    text-align: center;
    font-size: 0.35rem;
    .colorBlock {
    	font-size: 0.35rem;
    	width: 0.36rem;
    	height: 0.36rem;
    	display: inline-block;
    	vertical-align: middle;
    	border-radius: 3px;
    }
    span:first-child {
        margin-right: 0.3rem;
    }
    span:last-child {
        margin-left: 0.3rem;
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
        p {
            margin: 0.1rem 0 0.1rem 0.3rem;
			text-align: left;
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
