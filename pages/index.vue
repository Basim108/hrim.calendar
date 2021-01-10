<template>
  <div>
    <ToolBar>
      <MonthSetter />
      <ThemeSwitcher />
    </ToolBar>
    <div class="content">
      <LeftBar>
        <EventBar />
      </LeftBar>
      <div class="month-calendar">
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
      </div>
    </div>
  </div>
</template>

<script>
import DayOfMonth from '@/components/DayOfMonth'
import MonthSetter from '@/components/MonthSetter'
import LeftBar from '@/components/ui/LeftBar'
import ToolBar from '@/components/ui/ToolBar'
import EventBar from '@/components/events/EventBar'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'
import moment from 'moment'

export default {
  name: 'Month',
  layout: 'month',
  components: {
    DayOfMonth,
    MonthSetter,
    LeftBar,
    ToolBar,
    EventBar,
    ThemeSwitcher
  },
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

<style>
* {
  @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;800&display=swap');
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
}

.month-calendar {
  margin: 0;
  flex: 1 1 auto;
  position: relative;
  min-width: 503px;
  font-family: 'Recursive', sans-serif;
  font-size: 1.3em;
}
</style>
