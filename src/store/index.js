import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'

Vue.use(Vuex)

const state = {
	user:{
		userName: "",
		password: "",
	},
	typeIcon: "icon-xingxing",
	typeName: "一般",
	typeColor: "#058DC7",
	pay: 0,
	income: 0,
	isIncome: false,
	inputMoney: 0 ,
	userId: 0,
	personId: ""
}

const  mutations = {
	// 输入账号
	inUserName (state,n) {
		state.user.userName = n;
	},
	// 输入密码
	inPassword (state,n) {
		state.user.password = n;
	},
	// 存储ID
	saveUserId (state,n) {
		state.userId = n;
	},
	savePersonId (state,n) {
		state.personId = n;
	},
	// 判断账单支出还是收入
	isIncomePay (state) {
		state.isIncome = ! state.isIncome;
	},
	// 选中被选择的类型
	typeSelected (state,obj) {
		state.typeName = obj.name;
		state.typeIcon = obj.icon;
		state.typeColor = obj.color;
	},
	initPayType (state) {
		state.typeIcon = "icon-xingxing";
		state.typeName = "一般";
		state.typeColor = "#058DC7";
	}
}

export default new Vuex.Store({
	state,
	mutations,

})