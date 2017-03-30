<template>
    <div>
        <div class="lan">
            <input type="date" class="dateShow" @change="dateSelect" :value="dateNow">
            <input type="text" ref="input" :value="money" @input="updateValue($event.target.value)" class="moneyRecord" placeholder="0.00">
            <!-- <input-val v-model="money" ></input-val> -->
        </div>
        <a class="saveBtn" @click="saveAccount">保存</a>
    </div>
</template>
<script>
// import currencyValidator from '../utils/currencyValidator.js'
export default {
    data() {
            return {
                dateNow: new Date().Format('yyyy-MM-dd'),
                money: ""
            }
        },
        methods: {
            dateSelect() {
                this.dateNow = event.target.value;
            },
            saveAccount() {
                let vm = this;
                let obj = {
                    typeName: this.$store.state.typeName,
                    typeIcon: this.$store.state.typeIcon,
                    typeColor: this.$store.state.typeColor,
                    pay: 0,
                    income: 0,
                    createTime: this.dateNow
                }
                console.log(obj)
                if (this.money == 0) {
                    alert("请填写正确的金额");
                    return;
                }
                if (this.$store.state.isIncome) {
                    obj.income = parseFloat(this.money);
                } else {
                    obj.pay = parseFloat(this.money)
                }
                this.$http.post('/api/account/addAccount/' + this.$store.state.personId, obj).then((res) => {
                    let data = res.body;
                    if (data.code === 0) {
                        vm.$router.push({
                            path: '/main',
                        });　
                    } else {
                        alert(data.msg);
                    }
                })
            },
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
                this.money = this.$refs.input.value = value;
                // this.money = value
                //     // 删除两侧的空格符
                //     .trim()
                //     // 保留 2 小数位
                //     .slice(0, value.indexOf('.') + 3);
                // if (this.money !== value) {
                //     this.$refs.input.value = this.money
                // }
                // this.$refs.input.value = value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'');

                // let result = currencyValidator.parse(value, this.money);
                // if (result.warning) {
                //     this.$refs.input.value = result.value;
                // }
                // this.money = Number(this.$refs.input.value);
            }
        },
        // components: {
        //     inputVal
        // }
}
</script>
<style lang="scss" scoped>
::-webkit-input-placeholder {
    color: red;
}

.lan {
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    margin-bottom: 1rem;
    // height: 1.5rem;
    .dateShow {
        background-color: transparent;
        -webkit-appearance: none;
        font-size: 0.4rem;
        padding-left: 0.4rem;
        color: #999;
        text-align: center;
        border: none;
        &:focus {
            border: none;
            outline: none;
        }
    }
    .moneyRecord {
        // height: 1.5rem;
        background-color: transparent;
        line-height: 1.5rem;
        font-size: 0.6rem;
        width: 50%;
        border: none;
        padding-left: 0.1rem;
        border-left: 1px solid #999;
        border-radius: 0px;
        color: red;
        &:focus {
            border: none;
            outline: none;
            border-left: 1px solid #999;
        }
    }
}

.saveBtn {
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
    background-color: #1AAD19;
    border: none;
    width: 80%;
}
</style>
