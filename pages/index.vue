<template>
  <v-app>
    <v-container>
      <v-row justify="space-around" class="ma-2 pa-2">
        <MonthSetter />
        <v-spacer />
        <EventSelector />
        <v-spacer />
        <Settings />
      </v-row>
      <v-divider />
      <v-main>
        <MonthCalendar />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import MonthCalendar from '@/components/month-view/MonthCalendar'
import MonthSetter from '@/components/month-view/MonthSetter'
import EventSelector from '@/components/events/EventSelector'
import Settings from '@/components/settings/Settings'
import { VApp } from 'vuetify/lib/components/VApp'
import { VMain } from 'vuetify/lib/components/VMain'
import { VDivider } from 'vuetify/lib/components/VDivider'
import { VContainer, VRow, VSpacer } from 'vuetify/lib/components/VGrid'

export default {
  name: 'Month',
  layout: 'month',
  components: {
    MonthCalendar,
    MonthSetter,
    EventSelector,
    Settings,
    VApp,
    VContainer,
    VMain,
    VDivider,
    VRow,
    VSpacer
  }
}
</script>

<style>
* {
  @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;800&display=swap');
}

.container {
  min-width: 320px;
}

@media only screen and  (max-width: 320px) {

}
</style>
