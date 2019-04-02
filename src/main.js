// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import echarts from 'echarts'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'
import { ajax} from './common/ajax.js'

Vue.use(elementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.ajax = ajax
window.$VUEStore = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
