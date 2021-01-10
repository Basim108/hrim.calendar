<template>
  <div class="left-bar">
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
  border-right: 0.1em solid;
  margin:  0px;
  padding: 10px;
}
</style>
