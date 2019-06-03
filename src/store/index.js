import Vue from 'vue'
import Vuex from 'vuex'
import PersonModule from './person_module'

Vue.use(Vuex)

const modules = {
  Person: PersonModule
}

export default new Vuex.Store({
  modules
})
