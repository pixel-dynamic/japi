<template>
  <div>
    <b-sidebar id="sidebar-1" width="200px" shadow>
      <div class="w-100 bg-smoke p-3">
        <h1 class="h5 font-weight-light mb-0">
          <img
            class="mr-2"
            width="40"
            height="40"
            src="../assets/img/512.png"
          />
          Academic
        </h1>
      </div>
      <hr class="mt-0" />
      <b-nav vertical small>
        <b-nav-item to="/dashboard" active
          ><b-icon class="mr-2" icon="file-earmark-bar-graph"></b-icon>
          Dashboard</b-nav-item
        >
        <b-nav-item to="/cards"
          ><b-icon class="mr-2" icon="file-earmark-arrow-up"></b-icon> Mis
          tarjetas</b-nav-item
        >
        <b-nav-item to="/uploadcard"
          ><b-icon class="mr-2" icon="file-earmark-arrow-up"></b-icon> Cargar
          una tarjeta</b-nav-item
        >
        <b-nav-item
          ><b-icon class="mr-2" icon="file-earmark-person"></b-icon>
          Usuarios</b-nav-item
        >
      </b-nav>
    </b-sidebar>
  </div>
</template>
<script>
export default {}
</script>
