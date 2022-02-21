import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import { RadioGroup, Radio, Form, FormItem, Aside, Main, Header, Container, MessageBox, Message, Button, Table, Checkbox, TableColumn, Link, Input, Upload, Menu, MenuItem, Submenu, Row, Col } from 'element-ui'
const dayjs = require('dayjs')


// 关闭生成模式提示
Vue.config.productionTip = false

// element ui
{
  Vue.component(Button.name, Button)
  Vue.component(Table.name, Table)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(TableColumn.name, TableColumn)
  Vue.component(Link.name, Link)
  Vue.component(Input.name, Input)
  Vue.component(Upload.name, Upload)
  Vue.component(Menu.name, Menu)
  Vue.component(Submenu.name, Submenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Container.name, Container)
  Vue.component(Aside.name, Aside)
  Vue.component(Main.name, Main)
  Vue.component(Header.name, Header)
  Vue.component(FormItem.name, FormItem)
  Vue.component(Form.name, Form)
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(Radio.name, Radio)
  // Vue.component(FormItem.name, FormItem)
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$message = Message
}


// 自定义全局过滤器
Vue.filter("time_filter", function (value) {
  // 修正时区
  return dayjs(value).subtract(8, 'hour').format('YYYY-MM-DD HH:mm:ss')
})


// 使用路由和vuex插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
