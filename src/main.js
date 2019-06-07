import Vue from 'vue'
import App from './App'
import router from './router'
import filter from './utils/filter'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  filter,
  router,
  store
}).$mount('#wrapper')
