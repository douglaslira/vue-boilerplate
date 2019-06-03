import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/views/Index/Index.vue'
import AboutPage from '@/views/About/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: IndexPage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '*', redirect: '/' }
  ]
})
