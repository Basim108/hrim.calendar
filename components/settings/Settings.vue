<template>
  <v-menu
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="sm-2"
        fab
        small
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>fas fa-cog</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <ThemeSwitcher />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import ThemeSwitcher from '@/components/settings/ThemeSwitcher'
import { VList, VListItem } from 'vuetify/lib/components/VList'
import { VMenu } from 'vuetify/lib/components/VMenu'
import { VBtn } from 'vuetify/lib/components/VBtn'
import { VIcon } from 'vuetify/lib/components/VIcon'
import {} from '@fortawesome/fontawesome-free/js/all'

export default {
  name: 'Settings',
  components: {
    ThemeSwitcher,
    VMenu,
    VList,
    VListItem,
    VBtn,
    VIcon
  }
}
</script>

<style scoped>

</style>
