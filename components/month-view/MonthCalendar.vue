<template>
  <v-container>
    <DayOfMonth
      v-for="name in weekdaysShortnames"
      :key="name"
      :weekday="name"
    />
    <DayOfMonth
      v-for="unixDate in daysFromStart"
      :key="unixDate"
      :ts="unixDate"
    />
  </v-container>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MonthCalendar',

  computed: {
    weekdaysShortnames () {
      return moment.weekdaysShort()
    },
    daysFromStart () {
      const start = moment(this.$store.state.pageDateTs)
      start.subtract(start.weekday(), 'd')
      const result = new Array(35) // 7 days of week * 5 weeks in month
      let index = 0
      while (index < 35) {
        result[index++] = start.valueOf()
        start.add(1, 'd')
      }
      const currentMonth = moment(this.$store.state.pageDateTs).month()
      while (start.month() === currentMonth) {
        result[index++] = start.valueOf()
        start.add(1, 'd')
      }
      return result
    }
  }
}
</script>

<style scoped>
</style>
