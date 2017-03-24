<template>
	<div>
		<div class="accountDayRecord">
			<div class="headerRecord">
				<p>2017-03-24</p>
				<p>
				<span>收入:2000.00</span>
				<span>支出:18.00</span>
				</p>
			</div>
			<div class="content">
				<p>
					<i class="iconfont icon icon-canju"></i>
					<span>交通</span>
				</p>
				<p>
					<span>8.00</span>
				</p>
			</div>
						<div class="content">
				<p>
					<i class="iconfont icon icon-canju"></i>
					<span>交通</span>
				</p>
				<p>
					<span>8.00</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	.accountDayRecord {
		font-family: '微软雅黑';
		padding-left: 0.3rem;
		background-color: #fff;
			border-bottom: 1px solid #F2F2F2;
			border-top: 1px solid #F2F2F2;
		.headerRecord {
			padding: 0.1rem 0.3rem 0.1rem 0;
			display: flex;
			justify-content: space-around;
			p {
				flex:1;
				&:last-child{
					text-align: right;
					span {
						margin-left: 0.2rem;
					}
				}
			}
		}
		.content {
			border-top: 1px solid #F2F2F2;
			padding: 0.2rem 0.3rem 0.2rem 0rem;
			display: flex;
			justify-content: space-around;
			p {
				flex:1;
				line-height: 0.4rem;
				height: 0.4rem;
				span:nth-child(2) {
					font-size: 0.4rem;
				}
				&:last-child{
					text-align: right;
				}
			}
			.icon {
				font-size: 0.5rem;
				margin-right: 0.3rem;
			}
		}
	}
</style>