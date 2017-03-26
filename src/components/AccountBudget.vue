<template>
    <div class="container">
        <p class="budgetTitle">{{month}}月预算总额</p>
        <p class="budgetMoney">{{accountCount.budgetCount.toFixed(2)}}</p>
        <div class="incomePay">
            <div class="incomePayMonth">
                <p>{{month}}月收入</p>
                <strong>{{accountCount.incomeMonthSum.toFixed(2)}}</strong>
            </div>
            <div class="incomePayMonth">
                <p>{{month}}月支出</p>
                <strong>{{accountCount.payMonthSum.toFixed(2)}}</strong>
            </div>
        </div>
        <a class="saveBtn" @click="recordOne">记一笔</a>
    </div>
</template>
<script>
export default {
    data() {
            return {
                month: new Date().getMonth() + 1,
                accountCount: {}
            }
        },
        methods: {
            recordOne() {
                this.$router.push({
                    path: '/main/account'
                })

            }
        },
        created () {
        	let vm = this;
        	this.$http.get('/api/account/accountCurrentMonth/'+ this.$store.state.personId).then(
        		(res) => {
        			let data = res.body;
        			if(data.code === 0) {
        				vm.accountCount = data.msg;
        			}
        		})
        }
}
</script>
<style lang="scss" scoped>
.container {
	background-color: #fff;
    padding: 0.8rem 0  0.5rem 0;
    margin-bottom: 0.5rem;
    text-align: center;
    width: 100%;
    .budgetTitle {
        font-size: 0.4rem;
        margin-bottom: 0.3rem;
    }
    .budgetMoney {
        font-size: 0.8rem;
        color: #1AAD19;
        margin-bottom: 0.4rem;
    }
    .incomePay {
    	width: 50%;
		justify-content: center; 
    	display: flex;
    	margin: 0 auto;
    	margin-bottom: 0.5rem;
    	p {
    		color: #666;
    		margin-bottom: 0.15rem;
    	}
    	.incomePayMonth {
    		flex: 1;
    		font-size: 0.4rem;
    		&:first-child {
    			border-right: 1px solid #f4e2ea;
    		}
    	}
    }
    .saveBtn {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-left: 14px;
        padding-right: 14px;
        box-sizing: border-box;
        font-size: 0.45rem;
        text-align: center;
        text-decoration: none;
        color: #FFFFFF;
        line-height: 2.55555556;
        border-radius: 5px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow: hidden;
        background-color: #1AAD19;
        border: none;
        width: 80%;
    }
}
</style>
