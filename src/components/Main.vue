<template>
		<div  class="router">
        <router-view></router-view>
		 <foo></foo>
		</div>
</template>

<script>
	import foo from './Footer.vue'
	export default {
		name: "main",
		components: { foo }
	}
</script>

<style scoped>
	.router {
		height: 100%;
	}
</style>