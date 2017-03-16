<template>
	<div class="footer">
		<router-link to="/" exact >
			<div class="item" @click="firstCli"><img :src="firstIcon"><span>记账</span></div>
		</router-link>
		<router-link to="/home">
		<div class="item" @click="secCli"><img :src="secIcon"><span>账单</span></div>
		</router-link>
		<router-link to="/aboutMe">

		<div class="item" @click="thirdCli"><img :src="thirdIcon"><span>我的</span></div>
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
		name: "router",
		data () {
			return {
				firstIcon: imgFirstActive,
				secIcon: imgSec,
				thirdIcon: imgThird
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
		.router-link-active {
			span {
				color: #20D0F0;
			}
		}
	}
</style>