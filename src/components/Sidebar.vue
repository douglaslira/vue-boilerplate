<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <font-awesome-icon v-bind:icon="['fas', 'laugh-wink']" size="2x"></font-awesome-icon>
        </div>
        <div class="sidebar-brand-text mx-3">Vue Dashboard</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <font-awesome-icon v-bind:icon="['fas', 'tachometer-alt']" class="fa-fw"></font-awesome-icon>
          <span>Dashboard</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Modules
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <font-awesome-icon v-bind:icon="['fas', 'cog']" class="fa-fw"></font-awesome-icon>
          <span>Projects</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item" href="cards.html">Tasks</a>
            <a class="collapse-item" href="cards.html">Users</a>
          </div>
        </div>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <font-awesome-icon v-bind:icon="['fas', 'wrench']" class="fa-fw"></font-awesome-icon>
          <span>Utilities</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item" href="utilities-color.html">Users</a>
            <a class="collapse-item" href="utilities-border.html">Permissions</a>
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        About
      </div>

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <a class="nav-link" href="charts.html">
          <font-awesome-icon v-bind:icon="['fas', 'info']" class="fa-fw"></font-awesome-icon>
          <span>Credits</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" v-on:click="toggleAction" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->
</template>

<script type="text/javascript">

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faTachometerAlt, faCog, faWrench, faFolder, faChartArea, faTable, faInfo, faLaughWink } from '@fortawesome/free-solid-svg-icons'

  library.add({faTachometerAlt, faCog, faWrench, faFolder, faChartArea, faTable, faInfo, faLaughWink})

  export default {
    props: {
      toggleAction: Function
    }
  }
</script>

<style scoped></style>
