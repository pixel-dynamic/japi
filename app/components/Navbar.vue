<template>
  <b-navbar type="light" variant="light" fixed="top">
    <b-navbar-brand>
      <img width="40" height="40" src="../assets/img/512.png" />
      <b-button v-b-toggle.sidebar-1 variant="link"
        >menu <b-icon icon="arrow-bar-right"></b-icon
      ></b-button>
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-avatar size="sm"></b-avatar>
            <span class="font-weight-bold ml-2">Christian</span>
          </template>
          <b-dropdown-item href="#">Mi perfil</b-dropdown-item>
          <b-dropdown-item to="/">Cerrar sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {}
</script>
