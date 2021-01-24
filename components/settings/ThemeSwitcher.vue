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
import { VSwitch } from 'vuetify/lib/components/VSwitch'

export default {
  name: 'ThemeSwitcher',
  components: {
    VSwitch
  }
}
</script>

<style scoped>
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}
</style>
