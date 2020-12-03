// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './filter/index'

Vue.config.productionTip = false
import store from './store/index'
import {Button} from 'mint-ui'
import './mock/mockService' // 加载mockServer即可

Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store
})
