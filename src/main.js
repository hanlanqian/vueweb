import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
const dayjs = require('dayjs')

Vue.config.productionTip = false
Vue.filter("time_filter", function (value) {
  // 修正时区
  return dayjs(value).subtract(8, 'hour').format('YYYY-MM-DD HH:mm:ss')
})

Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router: router
}).$mount('#app')
