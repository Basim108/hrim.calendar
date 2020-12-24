<template>
  <div class="error500">
    <h1>Ups... something went wrong</h1>
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
