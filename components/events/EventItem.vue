<template>
  <v-chip
    :class="dto.color"
    text-color="white"
    filter
  >
    {{ dto.name }}
  </v-chip>
</template>

<script>
export default {
  name: 'EventItem',
  props: {
    dto: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
@media only screen and  (max-width: 768px) {

}
</style>
