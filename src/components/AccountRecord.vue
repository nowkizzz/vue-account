<template>
	<div>
	<div class="lan">
		<input type="date" class="dateShow" @change="dateSelect" :value="dateNow">
		<input type="tel" v-model="money" class="moneyRecord" placeholder="0.00">
	</div>
	<a class="saveBtn" @click="saveAccount">保存</a>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				dateNow: new Date().Format('yyyy-MM-dd'),
				money: ""
			} 
		},
		methods: {
			dateSelect () {
				console.log(event.target.value);
			},
			saveAccount () {

			}
		}
	}
</script>

<style lang="scss" scoped>
::-webkit-input-placeholder{color:red;}
	.lan {

			border-top: 1px solid #999;
			border-bottom: 1px solid #999;
			margin-bottom: 1rem;
			// height: 1.5rem;
		.dateShow {
			background-color: transparent;

			// -webkit-padding-start: 0px;
			-webkit-appearance:none;
			// line-height: 0.6;
			// line-height: 1.5rem;
			font-size: 0.4rem;
			padding-left: 0.4rem;
			color: #999;
			text-align: center;
			border: none;
			&:focus {
				border: none;
				outline: none;
			}
		}
		.moneyRecord {
			// height: 1.5rem;
			background-color: transparent;
			line-height: 1.5rem;
			font-size: 0.6rem;
			width: 50%;
			border: none;
			padding-left: 0.1rem;
			border-left: 1px solid #999;
			border-radius: 0px; 
			color: red;
			&:focus {
				border: none;
				outline: none;
				border-left: 1px solid #999;

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
	    font-size: 18px;
	    text-align: center;
	    text-decoration: none;
	    color: #FFFFFF;
	    line-height: 2.55555556;
	    border-radius: 5px;
	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	    overflow: hidden;
	    background-color: #20D0F0;
	    border: none;
	    width: 80%;
	}
</style>