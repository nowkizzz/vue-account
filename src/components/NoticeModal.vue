<template>
	<div class="wrap" v-if="show">
		<div class="noticeModel">
			<slot>请输入数字</slot>
			<div class="modelFooter">
				<a class="confirm" @click="confirm">确认</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: [ 'show'],
		methods: {
			confirm () {
				this.commit('confirm');
			}
		}
	}
</script>

<style>
	.wrap {
		position: fixed;
		background-color: rgba(0,0,0,0.6);
		height: 100%;
		width: 100%;
		top: 0px;
		left: 0px;
		z-index: 10;
	}
	.noticeModel {
		width: 5rem;
		height: 3rem;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		border-radius: 5px;
		z-index: 30;

	}
	.modelFooter {
		text-align: right;
		border-top: 1px solid #f0f0f0;
			padding-top: 0.2rem;

	}
			.confirm {
			margin-right: 0.3rem;
		}
</style>