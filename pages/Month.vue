<template>
  <div class="container">
    <MonthToolBar/>
    <DayOfMonth
      v-for="name in weekdaysShortnames"
      :key="name"
      :weekday="name"
    />
    <client-only>
      <DayOfMonth
        v-for="unixDate in daysFromStart"
        :key="unixDate"
        :ts="unixDate"
      />
    </client-only>
  </div>
</template>

<script>
import DayOfMonth from '@/components/DayOfMonth'
import moment from 'moment'

export default {
  name: 'Month',
  layout: 'month',
  components: { DayOfMonth },
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
      return result
    }
  }
}
</script>

<style>
* {
  @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;800&display=swap');
}

.container {
  margin: auto auto;
  min-width: 503px;
  font-family: 'Recursive', sans-serif;
}
</style>
