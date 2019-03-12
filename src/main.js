import Vue from 'vue'
import App from './App'
import router from './router'
import filter from './utils/filter'
import store from './store'
import Buefy from 'buefy'
import '../node_modules/buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  filter,
  router,
  store
}).$mount('#app')
