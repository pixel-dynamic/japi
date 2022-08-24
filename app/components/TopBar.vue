<template>
  <div :class="['w-100', 'topbar', { dark }]">
    <b-link to="/">
      <h3 class="text-white">
        <img width="140" src="../assets/img/logoblanco.png" alt="Japi" />
      </h3>
    </b-link>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.topbar {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  padding: 15px 0;
  z-index: 6;
}
.topbar a,
.topbar a:hover,
.topbar a:focus {
  text-decoration: none;
}
.topbar.dark {
  background: rgb(47, 8, 54);
}
</style>
