<template>
  <div id="app">
    <Sidebar v-bind:toggleAction="toggleSidebar" />
    <div id="content-app" class="d-flex flex-column">
      <div id="content">
        <Navbar />
        <div class="container-fluid">
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <Footer />
    </div>
    <a class="scroll-to-top rounded" href="#page-top">
      <font-awesome-icon v-bind:icon="['fas', 'angle-up']" size="1x"></font-awesome-icon>
    </a>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue'
  import Footer from '@/components/Footer.vue'
  import Navbar from '@/components/Navbar.vue'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

  library.add({faAngleUp})

  import JQuery from 'jquery'

  export default {
    name: 'app',
    components: { Sidebar, Footer, Navbar },
    created () {
      JQuery(document).on('scroll', function () {
        var scrollDistance = JQuery(this).scrollTop()
        if (scrollDistance > 100) {
          JQuery('.scroll-to-top').fadeIn()
        } else {
          JQuery('.scroll-to-top').fadeOut()
        }
      })
    },
    methods: {
      toggleSidebar () {
        JQuery('body').toggleClass('sidebar-toggled')
        JQuery('.sidebar').toggleClass('toggled')
        if (JQuery('.sidebar').hasClass('toggled')) {
          JQuery('.sidebar .collapse').collapse('hide')
        }
        return true
      }
    }
  }
</script>

<style lang="scss">

  @import 'assets/sass/dashboard';

  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    padding-left: 10px;
    opacity: 0;
  }
</style>
