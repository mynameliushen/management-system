import Vue from 'vue'
import App from './App'
import router from './router'

import './element'
import 'element-ui/lib/theme-chalk/index.css'
import 'common/styles/index.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
