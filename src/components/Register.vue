<template>
	<div class="login">
		<h2>记账本注册</h2>
		<div class="group">
			<input type="text" class="accountInput"  id="account" v-model="userName" placeholder="账号">
		</div>
		<div class="group">
			<input type="password" class="passwordInput" id="password" v-model="password"
			placeholder="密码">
		</div>
		<a class="loginBtn" @click="conirm">确认</a>
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
			font-weight: normal;
		}
		.group {
			margin: 0.5rem;
			font-size: 0.6rem;
				display: flex;

			input {
				border: 1px solid #ccc;
				border-radius: 2px;
				padding: 0.1rem;
				padding-left: 0.2rem;
				border-radius: 10px;
				width: 100%;
			}
		}
		.loginBtn {
		    position: relative;
		    display: block;
		    margin-left: auto;
		    margin-right: auto;
		    padding-left: 14px;
		    padding-right: 14px;
		    box-sizing: border-box;
		    font-size: 18px;
		    text-align: center;
		    text-decoration: none;
		    color: #FFFFFF;
		    line-height: 2.55555556;
		    border-radius: 5px;
		    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		    overflow: hidden;
		    background-color: #2Ab2A4;
		    border: none;
		    width: 80%;
		    margin-top: 1rem;
		}
	}

</style>