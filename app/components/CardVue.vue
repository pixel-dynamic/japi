<template>
  <div class="card-online shadow mb-4">
    <div v-if="!hideHeader" class="card-header">
      <h2 class="h6 mb-0 ml-3">{{ title }}</h2>
    </div>
    <div class="card-cover">
      <slot name="cover"></slot>
    </div>
    <div :class="alignCenter ? 'text-center' : 'text-left'" class="card-body">
      <slot>Default content</slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title card',
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
    alignCenter: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.card-online {
  background: #fff;
  position: relative;
  border-radius: 80px;
  border-radius: 10px;
}
.card-header {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #fff;
  display: inline-block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card-cover {
  width: 100%;
}
.card-body {
  width: 100%;
  padding: 2rem;
  display: inline-block;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
