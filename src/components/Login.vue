<template>
	<div class="login">
		<h2>记账本登录</h2>
		<div class="group">
			<label for="account">账号</label>
			<input type="text" class="accountInput"  id="account" :value="userName" 
			@input="inUserName">
		</div>
		<div class="group">
			<label for="password">密码</label>
			<input type="password" class="passwordInput" id="password" :value="password" 
			@input="inPassword">
		</div>
		<button class="loginBtn" @click="loginConirm">登录</button>
		<button class="loginBtn" @click="register">注册</button>
	</div>
</template>

<script>
	export default {
		name: "login",
		computed: {
			userName () {
				return this.$store.state.user.userName
			},
			password () {
				return this.$store.state.user.password
			}
		},
		methods: {
			inPassword () {
				this.$store.commit('inPassword' , event.target.value);
			},
			inUserName () {
				this.$store.commit('inUserName' , event.target.value);
			},
			loginConirm () {
				const vm = this;
				this.$http.post('/api/login/login',{
					userName:this.userName,
					password:this.password
				}).then( (res) => {
					let data = res.body;
					if(data.code === 0){
						vm.$router.push({ path: 'main', query: {id:data.msg} });　
					} else {
						alert(data.msg)
					}
				})
		},
		register () {
			this.$router.push({ path: 'register'})
		}
	}
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