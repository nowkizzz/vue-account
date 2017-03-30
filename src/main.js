// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import login from './components/Login'
import loading from './components/loading'
import './scss/normalize.scss'
import './scss/main.scss'
import vueResource from 'vue-resource'
import store from './store'
// import vuex from 'vuex'
import './scss/iconfont.css'
import VueHighcharts from 'vue-highcharts';
Vue.use(VueHighcharts) 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Vue.use(vueResource);

Vue.config.productionTip = false
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  data:{
    showloading: false
  },
  // template: '<App/>',
  // render: h => h(login), // render function
  components: { login,loading }
})

Vue.http.interceptors.push((request, next) => {
    app.showloading = true
    next((response) => {
        app.showloading = false;
        return response
    });
});