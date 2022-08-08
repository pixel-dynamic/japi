<template>
  <div :class="'card-pix shadow bg-white ' + variant">
    <div :class="padding + ' text-' + align">
      <h2 v-if="title !== ''" class="h5 text-primary">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    padding: {
      type: String,
      default: 'p-4',
    },
    title: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'center',
    },
  },
}
</script>
<style scoped>
.card-pix {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border-bottom: 5px solid #e73ee4;
}

.card-pix.uin {
  border-bottom: 5px solid #0055a5;
}
</style>
