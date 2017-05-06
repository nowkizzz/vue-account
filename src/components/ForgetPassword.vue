<template>
    <div class="login">
        <h2>重置密码</h2>
        <div class="group">
            <input type="text" class="accountInput" v-model="userName" placeholder="请输入账号">
        </div>
        <div class="group">
            <input type="password" class="passwordInput" v-model="newPassword" placeholder="请输入新密码">
        </div>
        <div class="group">
            <input type="password" class="passwordInput" v-model="surePassword" placeholder="请再次输入新密码">
        </div>
		<div class="warningMessage" >{{msg}}</div>
        <a class="loginBtn" @click="resetPassword">确认</a>
        <a class="loginBtn" @click="cancel">取消</a>
    </div>
</template>
<script>
export default {
	data () {
		return {
			userName: "",
			newPassword: "",
			surePassword: "",
			msg: ""
		}
	},
    methods: {

        resetPassword () {
            const vm = this;
            if(!this.userName || !this.newPassword || !this.surePassword) {
            	this.msg = "输入信息不全！";
            	setTimeout(function() {
            		vm.msg = ""
            	},1000);
            } else if( this.newPassword !== this.surePassword) {
            	this.msg = "输入密码不相等！";
            	setTimeout(function() {
            		vm.msg = ""
            	},1000);
            } 
            // this.$http.post('/api/login/login', {
            //     userName: this.userName,
            //     password: this.password
            // }).then((res) => {
            //     let data = res.body;
            //     if (data.code === 0) {
            //         // vm.$store.commit('saveUserId',data.msg.userId)
            //         vm.$store.commit('savePersonId', data.msg._id)
            //             // console.log(data);
            //         vm.$router.push({
            //             path: '/main',
            //             query: {
            //                 id: data.msg
            //             }
            //         });　
            //     } else {
            //         alert(data.msg)
            //     }
            // })
        },
        cancel() {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>
<style scoped lang="scss">
.login {
    overflow: hidden;
    height: 100%;
    // background-image: -webkit-gradient(linear, left bottom, right top, color-stop(0.32, #063053), color-stop(0.66, #395873), color-stop(0.83, #5c7c99));
    background-color: #f2f5f2;
    // background-color: #39AEC4;
    h2 {
        padding-top: 2.5rem;
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 0.7rem;
        font-weight: normal;
        color: #79b912;
    }
    .accountInput {
        background-color: #fff;
        background-image: url('../assets/account2.png');
        background-position: 0.3rem 0.2rem;
        background-size: 0.7rem;
        background-repeat: no-repeat;
    }
    .passwordInput {
        background-color: #fff;
        background-image: url('../assets/mima2.png');
        background-position: 0.3rem 0.2rem;
        background-size: 0.7rem;
        background-repeat: no-repeat;
    }
    .group {
        margin: 0.5rem;
        font-size: 0.6rem;
        display: flex;
        margin-bottom: 0.2rem;
        input {
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 0.1rem;
            padding-left: 0.4rem;
            border-radius: 0.5rem;
            padding-left: 1.5rem;
            width: 100%;
            height: 1rem;
            margin: 0 0.3rem;
            font-size: 0.53rem;
        }
    }
	.warningMessage {
		color: red;
		text-align: center;
		font-size: 0.5rem;
		height: 0.1rem;
		width: 100%;
	}
    .loginBtn {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-left: 14px;
        padding-right: 14px;
        box-sizing: border-box;
        font-size: 0.45rem;
        text-align: center;
        text-decoration: none;
        color: #FFFFFF;
        line-height: 2.55555556;
        border-radius: 8px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow: hidden;
        background-color: #76bd0f;
        border: none;
        width: 80%;
        margin-top: 1rem;
        &:first-of-type {
        	margin-top: 2rem;
        }
    }
}
</style>
