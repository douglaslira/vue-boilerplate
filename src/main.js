import Vue from 'vue'
import App from './App'
import router from './router'
import filter from './utils/filter'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  filter,
  router,
  store
}).$mount('#app')
