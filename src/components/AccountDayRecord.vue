<template>
    <div>
        <div class="accountDayRecord" v-for=" x in dayRecord">
            <div class="headerRecord" >
                <p>{{x.createTime}}</p>
                <p>
                    <span v-if="x.incomeSum != 0">收入: {{ x.incomeSum}}</span>
                    <span v-if="x.paySum != 0">支出:{{ x.paySum}}</span>
                </p>
            </div>
            <div class="content" v-for=" (item,index) in x.type"> 
                <p>
                    <i class="iconfont icon" :class="item.typeIcon"></i>
                    <span>{{item.typeName}}</span>
                </p>
                <p>
                    <span v-if="item.income == 0">{{ item.pay.toFixed(2)}}</span>
                    <span v-else> {{item.income.toFixed(2)}}</span>
                </p>
            </div>
        </div>
        <p class="dataNull" v-if="dayRecord.length == 0">记账从此刻开始</p>
    </div>
</template>
<script>
export default {
	data () {
		return {
			dayRecord: []
		}
	},
	methods:{
		handleInfo (info) {
			let infoObj = {};
			infoObj.createTime = new Date(info.createTime).Format('yyyy-MM-dd');
			infoObj.incomeSum = parseFloat(info.incomeSum).toFixed(2);
			infoObj.paySum = parseFloat(info.paySum).toFixed(2);
			infoObj.type = info.type.reverse();
			return infoObj;
		},
	},
    created() {
    	let vm = this;
        this.$http.get('/api/account/account/' + this.$store.state.personId)
            .then((res) => {
                let data = res.body;
                if (data.code === 0) {
                    vm.dayRecord = data.msg.map(vm.handleInfo);
                    // console.log(vm.dayRecord) 
                }
            })
    }
}
</script>
<style scoped lang="scss">
.accountDayRecord {
	font-size: 0.35rem;
    font-family: '微软雅黑';
    padding-left: 0.3rem;
    background-color: #fff;
    border-bottom: 1px solid #F2F2F2;
    border-top: 1px solid #F2F2F2;
    margin-bottom: 0.3rem;
    .headerRecord {
        padding: 0.1rem;
        display: flex;
        // justify-content: space-around;
        // flex-wrap: nowrap;
        p {
            // flex: 1;
            text-align: left;
            &:last-child {
                flex:1;
                text-align: right;
                span {
                    margin-left: 0.2rem;
                }
            }
        }
    }
    .content {
        border-top: 1px solid #F2F2F2;
        padding: 0rem 0.3rem 0rem 0rem;
        display: flex;
        justify-content: space-around;
        p {
            flex: 1;
            line-height: 0.4rem;
            height: 0.4rem;
            i {
                // vertical-align: bottom;
                // display: inline;
                // display: inline-block;
            }
            span {
                vertical-align: top;
            }
            span:nth-child(2) {
                font-size: 0.35rem;
            }
            &:last-child {
                text-align: right;
            }
        }
        .icon {
            font-size: 0.5rem;
            margin-right: 0.3rem;
        }
    }
}
.dataNull {
    font-size: 0.7rem;
    color: #ccc;
    text-align: center;
    margin-top: 1rem;
}
</style>
