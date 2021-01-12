<template>
  <div class="left-bar" :class="$store.state.ui.theme" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
  props: {
    styles: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.left-bar {
  display: flex;
  flex: none;
  flex-direction: column;
  border-right: 1px solid #cccccc;
  margin: 0px;
  padding: 10px;
}

.dark {
  border-right: 1px solid #8b8b8b;
}
</style>
