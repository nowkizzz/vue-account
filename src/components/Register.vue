<template>
	<div class="login">
		<h2>记账本注册</h2>
		<div class="group">
			<label for="account">账号</label>
			<input type="text" class="accountInput"  id="account" v-model="userName">
		</div>
		<div class="group">
			<label for="password">密码</label>
			<input type="password" class="passwordInput" id="password" v-model="password">
		</div>
		<button class="loginBtn" @click="conirm">确认</button>
	</div>
</template>

<script>
	export default {
		name: "login",
		data () {
			return {
				userName: "",
				password: ""
			}
		},
		methods: {
			conirm () {
				const vm = this;
				this.$http.post('/api/login/createAccount',{userName:this.userName,password:this.password})
				       .then((response) => {
				       	   vm.$router.push({path: '/'})
				       })
			}
	},
}
</script>

<style scoped lang="scss">
	.login {
		margin-top: 3rem;

		h2 {
			text-align: center;
			margin-bottom: 1rem;
		}
		.group {
			margin: 0.5rem;
			font-size: 0.8rem;
			input {
				border: 1px solid #ccc;
				border-radius: 2px;
				padding: 0.1rem;
			}
		}
		.loginBtn {
			margin: 1.2rem 4rem;
			width: 2rem;
			height: 1rem;
		}
	}

</style>