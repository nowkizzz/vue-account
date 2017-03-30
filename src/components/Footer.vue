<template>
	<div class="footer">
		<router-link to="/main" exact >
			<div class="item" @click="firstCli"><img :src="firstIcon"><span :class="{ toactive : isActive }">记账</span></div>
		</router-link>
		<router-link to="/main/detail">
		<div class="item" @click="secCli"><img :src="secIcon"><span>账单</span></div>
		</router-link>
		<router-link to="/main/aboutMe">

		<div class="item" @click="thirdCli"><img :src="thirdIcon"><span>预算</span></div>
		</router-link>

	</div>
</template>
<script>
import imgFirstActive from '../assets/Tab_Icon_Service_sel@2x.png'
import imgFirst from '../assets/Tab_Icon_Service_def@2x.png'
import imgSec from '../assets/Tab_Icon_Order_def@2x.png'
import imgSecActive from '../assets/Tab_Icon_Order_sel@2x.png'
import imgThird from '../assets/Tab_Icon_Mine_def@2x.png'
import imgThirdActive from '../assets/Tab_Icon_Mine_pre@2x.png'

	export default {
		// name: "foo",
		data () {
			return {
				firstIcon: imgFirstActive,
				secIcon: imgSec,
				thirdIcon: imgThird,
				isActive: true
			}
		},
		methods: {
			firstCli ()  {
				this.firstIcon = imgFirstActive;
				this.secIcon = imgSec;
				this.thirdIcon = imgThird;
			},
			secCli () {
				this.firstIcon = imgFirst;
				this.secIcon = imgSecActive;
				this.thirdIcon = imgThird;
			},
			thirdCli () {
				this.firstIcon = imgFirst;
				this.secIcon = imgSec;
				this.thirdIcon = imgThirdActive;
			},
		},
		watch: {
			firstIcon (val) {
				if(val == imgFirst) {
					this.isActive = false;
				}
			},
			'$route' (to,from) {
				if(from.path == '/main/aboutMe' && to.path == '/main') {
					this.firstCli();
				}
			}

		}
	}
</script>

<style lang="scss">
	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid #C0BFC4;
		background-color: #F7F7FA;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		a {
			color: #999;
			:active {
				color: #20D0F0;
			}
		}
		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;
			img {
				height: 25px;
				width: 25px;
				text-align: center;
			}
		}
		.toactive {
			color: #20D0F0;

		}
		.router-link-active {
			span {
				color: #20D0F0;
			}
		}
	}
</style>