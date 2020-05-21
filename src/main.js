import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './permission'
import './element'

import 'element-ui/lib/theme-chalk/index.css'
import 'common/styles/index.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
