<template>
	<div class="container">
		<p>这是第三个路由这是第三个路由这是第三</p>
	</div>
</template>

<script>
	export default {
		name: 'tht'
	}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
		height:  calc(100% - 51px);
	}
	p {
		position: absolute;
		left: 50%;
		top: 50%;
		transform:translate(-50%,-50%);
		font-size: 30px;
	}
</style>