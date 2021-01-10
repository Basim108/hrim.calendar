<template>
  <div class="toolbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px;
  min-width: 666px;
  min-height: 48px;
  border-bottom: 0.1em solid;
}
</style>
