<template>
  <div class="theme-switch-wrapper">
    <v-switch
      v-model="$vuetify.theme.dark"
      inset
      class="mt-5"
    />
    <v-icon>fas fa-adjust</v-icon>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitcher'
}
</script>

<style scoped>
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}
</style>
