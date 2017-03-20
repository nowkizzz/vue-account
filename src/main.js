// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import login from './components/Login'
import './scss/normalize.scss'
import './scss/main.scss'
import vueResource from 'vue-resource'
// import vuex from 'vuex'

Vue.use(vueResource);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // render: h => h(login), // render function
  components: { login }
})
