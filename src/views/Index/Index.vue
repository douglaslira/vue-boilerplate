<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ message }}</h2>
    <h3>By <router-link to="/about">{{ author }}</router-link></h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      message: 'Message/getMessage',
      author: 'Person/getName'
    })
  },
  methods: {
    ...mapActions({
      setMessage: 'Message/setMessage',
      setName: 'Person/setName'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
