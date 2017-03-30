<template>
    <div class="router">
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
        <foo></foo>
    </div>
</template>
<script>

import foo from './Footer.vue'
import loading from './loading.vue'
export default {
	data  () {
		return {
			transitionName: 'slide-right',
			showloading: false
		}
	},
    // name: "main",
    components: {
        foo,
       	loading
    },
    created() {
        console.log(this.$route.query.id)
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth >= fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>
<style scoped>
.router {
    height: calc(100% - 51px);
    overflow: auto;
    position: relative;
    background-color: #F8F8F8;
}
</style>
