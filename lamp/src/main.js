// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入所以element
import ElementUI from 'element-ui'
//babelrc设置了引入部分后就不需要引入所以的css
import 'element-ui/lib/theme-chalk/index.css'
/* eslint-disable no-new */

// 1.引入axios模块
import axios from 'axios'
Vue.prototype.$axios = axios
import store from './store/index'

Vue.prototype.$host = "http://localhost:7777/"

Vue.use(ElementUI);//引入所有

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
