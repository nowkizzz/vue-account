<template>
    <div class="budgeBox">
        <notice @confirm="showNotice = false">
            <div slot class="noticeContent">请输入数字</div>
        </notice>
        <div class="box">
            <header>设定每月预算</header>
            <div class="content">
                <span>￥</span>
                <input type="text" ref="inputBudget" :value="budgetDefault" @input="updateValue($event.target.value)" placeholder="0.00" />
            </div>
        </div>
        <a class="btn" @click="setBudget">完成</a>
    </div>
</template>
<script>
import notice from './NoticeModal.vue';
import currencyValidator from '../utils/currencyValidator.js';
console.log(currencyValidator)
export default {

    data() {
            return {
                budgetDefault: 4000,
                showNotice: false
            }
        },
        methods: {

            updateValue(value) {
                var regStrs = [
                    ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
                    ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
                    ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
                    ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
                ];
                for (var i = 0; i < regStrs.length; i++) {
                    var reg = new RegExp(regStrs[i][0]);
                    value = value.replace(reg, regStrs[i][1]);
                }
                this.budgetDefault = this.$refs.inputBudget.value = value;


                //  this.$refs.inputBudget.value = value.replace(/\D/g,'');

                //  let result = currencyValidator.parse(value, this.budgetDefault);
                // console.log(result)
                // if (result.warning) {
                //     this.$refs.inputBudget.value = result.value;
                // }
                // this.budgetDefault = Number(this.$refs.inputBudget.value);


            },
            setBudget() {
                this.$http.post('/api/account/updateBudget/' + this.$store.state.personId, {
                    budget: this.budgetDefault
                }).then((res) => {
                    let data = res.body;
                    if (data.code === 0) {
                        this.$router.push({
                            path: '/main'
                        });
                    } else {
                        alert(data.msg);
                    }
                })


            }
        },
        created() {
            this.$http.get('/api/account/getBudget/' + this.$store.state.personId)
                .then((res) => {
                    if (res.body.code === 0) {
                        this.budgetDefault = res.body.msg;
                    }
                })
        },
        components: {
            notice
        }
}
</script>
<style scoped lang="scss">
.budgeBox {
    padding-top: 0.6rem;
    height: 100%;
}

.noticeContent {
    text-align: center;
    padding: 0.8rem;
}

.box {
    margin: 0rem 0.5rem 0.5rem 0.5rem;
    padding: 0.2rem 0.3rem 0.4rem 0.3rem;
    height: 3.5rem;
    box-sizing: border-box;
    background-color: #fff;
    header {
        margin: 0.3rem 0rem 0.7rem 0.2rem;
        font-size: 0.4rem;
    }
    .content {
        margin-left: 0.2rem;
        font-size: 0.7rem;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #f2f2f2;
        input {
            width: 80%;
            border: none;
            text-align: right;
            float: right;
            &:focus {
                border: none;
                outline: none;
            }
        }
    }
}

.btn {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: .45rem;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 2.55555556;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    background-color: #1AAD19;
    border: none;
    width: 90%;
}
</style>
