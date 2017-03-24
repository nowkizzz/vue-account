<template>
	<div class="container">
		<div class="grid">
			<div class="gridCell" :class="{active:isIncome}" @click="takeIncome">收入</div>
			<div class="gridCell" :class="{active:!isIncome}" @click="takePay">支出</div>
		</div>
		<div class="content" v-if="!isIncome">
			<div class="item" v-for="(x,index) in payType">
				<i class="iconfont  icon" :class="[x.icon,{ activeIcon: x.isActive}]" 
				@click="iconActive(x)"></i>
				<span :class="{activecontent:x.isActive}">{{x.name}}</span>
			</div>
		</div>
		<div class="content" v-else>
			<div class="item" v-for="(x,index) in incomeType">
				<i class="iconfont  icon" :class="[x.icon,{ activeIcon: x.isActive}]" 
				@click="iconActive(x)"></i>
				<span :class="{activecontent:x.isActive}">{{x.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				isIncome: false,
				payType:[
				{
					id: 1,
					name: "一般",
					icon: "icon-xingxing",
					isActive: false,
					type: "pay"
				},
				{
					id: 2,
					name: "餐饮",
					icon: "icon-canju",
					isActive: false,
					type: "pay"

				},
				{
					id: 3,
					name: "交通",
					icon: "icon-qiche",
					isActive: false,
					type: "pay"

				},
				{
					id: 4,
					name: "购物",
					icon: "icon-gouwuche",
					isActive: false,
					type: "pay"

				},
				{
					id: 5,
					name: "手机",
					icon: "icon-dianhua",
					isActive: false,
					type: "pay"
				},
				{
					id: 6,
					name: "娱乐",
					icon: "icon-youxishoubing",
					isActive: false,
					type: "pay"

				},
				{
					id: 7,
					name: "学习",
					icon: "icon-shuben",
					isActive: false,
					type: "pay"

				},
				{
					id: 8,
					name: "腐败",
					icon: "icon-gouwudai",
					isActive: false,
					type: "pay"


				},
				{
					id: 9,
					name: "药品",
					icon: "icon-yiyaoxiang",
					isActive: false,
					type: "pay"


				},
				{
					id: 10,
					name: "其他",
					icon: "icon-duoren",
					isActive: false,
					type: "pay"

				},
				],
				incomeType:[
					{
						id: 11,
						name: "工资",
						icon: "icon-gongzi",
						isActive: false,
						type: "income"

					},
					{
						id: 12,
						name: "生活费",
						icon: "icon-shenghuofei",
						isActive: false,
						type: "income"

					},
					{
						id: 13,
						name: "红包",
						icon: "icon-hongbao",
						isActive: false,
						type: "income"
					},
					{
						id: 14,
						name: "兼职",
						icon: "icon-jianzhi",
						isActive: false,
						type: "income"
					},
					{
						id: 15,
						name: "投资",
						icon: "icon-24",
						isActive: false,
						type: "income"
					},
					{
						id: 16,
						name: "报销",
						icon: "icon-baoxiao",
						isActive: false,
						type: "income"
					},
					{
						id: 17,
						name: "其他",
						icon: "icon-qita",
						isActive: false,
						type: "income"
					},
				]
			}
		},
		methods: {
			takeIncome () {
				this.isIncome = true;
				this.incomeType.forEach(function(item){
					item.isActive = false;
				});
			},
			takePay () {
				this.isIncome = false;
				this.payType.forEach(function(item){
					item.isActive = false;
				});
			},
			iconActive (obj) {
				if(this.isIncome) {
					this.incomeType.forEach( function(item) {
						item.isActive = false;
					});
				} else {
				this.payType.forEach( function(item) {
					item.isActive = false;
				});
			}
				obj.isActive = true;
			},
		}

	}
</script>

<style lang="scss" scoped>
	.container {
		padding-top: 0.5rem;
		.grid {
			display: flex;
			width: 2.7rem; 
			height: 0.7rem;
			line-height: 0.7rem;
		    margin: 0 auto;
		    border: 1px solid #ccc;
		    font-size: .5rem;
		    border-radius: 10%;
			
			.gridCell {
				flex: 1;
				text-align: center;
				color: #666;
				&:first-child {
					border-right: 1px solid #ccc;
					border-radius: 10% 0 0 10%;
				}
				&:last-child {
					border-radius: 0 10%  10% 0;
				}
			}
			.active {
				background-color: #20D0F0;
			}
		}
		.content {
			height: 4.2rem;
			margin-top: 0.5rem;
			border-bottom: 1px solid #ccc;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: flex-start;
			margin-bottom: 1rem;
			.item {
				display: flex;
				flex-direction: column;
				height: 1.6rem;
				width: 1.3rem;
				justify-content: center;
				text-align: center;
				margin:0.3rem 0 0 0.6rem;
				.icon {
					font-size: 1rem;
					height: 1.3rem;
					background-color: #eeebeb;
					border-radius: 50%;
					margin-bottom: 0.1rem;
				}
			.activeIcon {
						background-color: #20D0F0;
						color: #fff;
					}
			.activecontent {
					color: #20D0F0;
				}
			}	

		}
	}
</style>