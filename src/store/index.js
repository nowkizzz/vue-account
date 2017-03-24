import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'

Vue.use(Vuex)

const state = {
	user:{
		userName: "",
		password: "",
	},

}

const  mutations = {
	inUserName (state,n) {
		state.user.userName = n;
	},
	inPassword (state,n) {
		state.user.password = n;
	}
}

export default new Vuex.Store({
	state,
	mutations,

})