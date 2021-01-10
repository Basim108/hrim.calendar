<template>
  <div class="toolbar" :class="$store.state.ui.theme">
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
  min-width: 568px;
  min-height: 48px;
  border-bottom: 1px solid #cccccc;
}

.dark{
  border-bottom: 1px solid #8b8b8b;
}

@media only screen and  (max-width: 768px) {
  .toolbar {
    min-height: 0px;
    padding: 0px 10px 2px;
  }
}
</style>
