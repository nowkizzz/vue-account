<template>
    <div class="login">
        <h2>记账本登录</h2>
        <div class="group">
            <input type="text" class="accountInput" :value="userName" @input="inUserName" placeholder="账号">
        </div>
        <div class="group">
            <input type="password" class="passwordInput" :value="password" @input="inPassword" placeholder="密码">
        </div>
        <router-link :to="'forget'"  class="forgetpwd">忘记密码?</router-link> 
        <!-- <a  class="forgetpwd" @click="forgetpwd">忘记密码?</a> -->
        <a class="loginBtn" @click="loginConirm">登录</a>
        <a class="loginBtn" @click="register">注册</a>
    </div>
</template>
<script>
export default {
    name: "login",
    computed: {
        userName() {
            return this.$store.state.user.userName
        },
        password() {
            return this.$store.state.user.password
        }
    },
    methods: {
        inPassword() {
            this.$store.commit('inPassword', event.target.value);
        },
        inUserName() {
            this.$store.commit('inUserName', event.target.value);
        },
        loginConirm() {
            const vm = this;
            this.$http.post('/api/login/login', {
                userName: this.userName,
                password: this.password
            }).then((res) => {
                let data = res.body;
                if (data.code === 0) {
                    // vm.$store.commit('saveUserId',data.msg.userId)
                    vm.$store.commit('savePersonId', data.msg._id)
                        // console.log(data);
                    vm.$router.push({
                        path: '/main',
                        query: {
                            id: data.msg
                        }
                    });　
                } else {
                    alert(data.msg)
                }
            })
        },
        register() {
            this.$router.push({
                path: 'register'
            })
        },
        forgetpwd() {
            this.$router.push({
                path: 'forget'
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
        margin-bottom: 1rem;
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
    .forgetpwd {
        margin-top: -0.7rem;
        display: block;
        margin-left: 7rem;
        font-size: 0.42rem;
        color: #999;
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
    }
}
</style>
