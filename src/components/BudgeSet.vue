<template>
    <div class="budgeBox">
        <div class="box">
            <header>设定每月预算</header>
            <div class="content">
            	<span>￥</span>
                <input type="tel" v-model="budget">
            </div>
        </div>
        <a class="btn" @click="setBudget">完成</a>
    </div>
</template>
<script>
export default {
    computed: {
    	budget () {
    		return '1000'
    	}
    },
    methods: {
    	setBudget () {
    		const vm = this;

    		vm.$router.push({path: '/main'});

    	}
    }
}
</script>
<style scoped lang="scss">
.budgeBox {
    padding-top: 0.6rem;
}

.box {
    margin: 0rem 0.5rem 0.5rem 0.5rem;
    padding: 0.2rem 0.3rem 0.4rem 0.3rem;
    height: 3.5rem;
    box-sizing: border-box;
    background-color: #fff;
    header {
    	margin: 0.3rem 0rem 0.7rem 0.2rem;
    	font-size: 0.4rem;
    }
    .content {
			margin-left: 0.2rem;
			font-size: 0.7rem;
			padding-bottom: 0.4rem;
			border-bottom: 1px solid #f2f2f2;

		input {
			width: 80%;
			border: none;
			text-align: right;
			float: right;
			&:focus {
				border: none;
				outline: none;
			}
		}
    }
}

.btn {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: .45rem;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 2.55555556;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    background-color: #20D0F0;
    border: none;
    width: 90%;
}
</style>
