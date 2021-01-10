<template>
  <div class="left-bar" :class="$store.state.ui.theme">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LeftBar'
}
</script>

<style scoped>
.left-bar{
  display: flex;
  flex:none;
  flex-direction: column;
  border-right: 1px solid #cccccc;
  margin:  0px;
  padding: 10px;
}

.dark{
  border-right: 1px solid #8b8b8b;
}
</style>
