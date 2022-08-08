<template>
  <b-link class="link-to" :to="url">
    <div class="card-index d-flex shadow mb-4">
      <div class="left px-2 d-flex align-items-center">
        <img width="90" :src="require(`../assets/${icon}`)" :alt="title" />
      </div>
      <div class="right d-flex align-items-center">
        <h5 class="font-weight-bold ml-3 mb-0">{{ title }}</h5>
        <svg
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 451.846 451.847"
        >
          <path
            d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
            data-original="#000000"
            class="active-path"
            data-old_color="#000000"
            fill="#cfcfcf"
          />
        </svg>
      </div>
    </div>
  </b-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'tarjeta',
    },
    icon: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '/',
    },
  },
}
</script>
<style scoped>
.link-to:hover {
  text-decoration: none;
}
.card-index {
  width: 100%;
  position: relative;
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
  cursor: pointer !important;
}
@media (min-width: 1200px) {
  .card-index:hover {
    transform: translate(0px, -5px);
  }
}
.left {
  width: 80px;
  height: 70px;
  background: #5be1a2;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.right {
  height: 70px;
  width: 100%;
  background: #fff;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
}
.arrow {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
</style>
