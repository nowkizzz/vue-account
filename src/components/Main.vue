<template>
		<div  class="router">
        <router-view></router-view>
		 <foo></foo>
		</div>
</template>

<script>
	import foo from './Footer.vue'
	export default {
		// name: "main",
		components: { foo },
		created () {
			console.log(this.$route.query.id)
		}
	}
</script>

<style scoped>
	.router {
		height: 100%;
		background-color: #F8F8F8;
		
	}
</style>