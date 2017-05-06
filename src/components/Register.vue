<template>
    <div class="login">
        <h2>记账本注册</h2>
        <div class="group">
            <input type="text" class="accountInput" v-model="userName"  placeholder="账号">
        </div>
        <div class="group">
            <input type="password" class="passwordInput" v-model="password"  placeholder="密码">
        </div>
        <a class="loginBtn" @click="conirm">确认</a>
        <a class="loginBtn" @click="cancel">取消</a>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            userName: "",
            password: ""
        }
    },
    methods: {
        conirm() {
            this.$http.post('/api/login/createAccount', {
                    userName: this.userName,
                    password: this.password,
                    budgetCount: 3000
                })
                .then((res) => {
                    let data = res.body;
                    if (data.code === 0) {
                	this.$store.commit('savePersonId',data.msg._id)

                        this.$router.push({
                            path: '/main',
                            query: {
                                id: data.msg
                            }
                        })

                    } else{
                    	alert(data.msg);
                    }
                })
        }, 
        cancel () {
            this.$router.push({
                path: '/'
            })
        }
    },
}
</script>
<style scoped lang="scss">
.login {
    padding-top: 3rem;
    height: 100%;
    background-color: #f2f5f2;
    h2 {
        text-align: center;
        margin-bottom: 1rem;
        font-weight: normal;
        color:#2Ab2A4;
        font-size: 0.7rem;

    }
    .group {
        margin: 0.5rem;
        font-size: 0.6rem;
        display: flex;
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
        .accountInput {
        background-color: #fff;
        background-image: url('../assets/account4.png');
        background-position: 0.3rem 0.2rem;
        background-size: 0.7rem;
        background-repeat: no-repeat;
    }
    .passwordInput {
        background-color: #fff;
        background-image: url('../assets/mima4.png');
        background-position: 0.3rem 0.2rem;
        background-size: 0.7rem;
        background-repeat: no-repeat;
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
