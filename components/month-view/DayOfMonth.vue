<template>
  <div class="day-of-month" :disabled="isMonthNameVisible && ts > 0" :class="[getTitleClass(), $store.state.ui.theme]">
    <div class="day-of-month-body" :class="getTitleClass()">
      <div v-if="ts === 0" class="weekday-name" :class="getHolidayClass()">
        {{ weekday }}
      </div>
      <div v-else class="date-body" :class="getHolidayClass()">
        <span class="date">
          {{ currentDate.date() }}
        </span>
        <span v-if="isMonthNameVisible" class="month-name">
          {{ currentMonthName }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DayOfMonth',
  props: {
    ts: {
      type: Number,
      default: 0
    },
    weekday: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentDate () {
      return moment(this.ts)
    },
    currentMonthName () {
      return moment.monthsShort(this.currentDate.month())
    },
    isMonthNameVisible () {
      return this.currentDate.month() !== moment(this.$store.state.pageDateTs).month()
    },
    currentWeekdayName () {
      return this.ts > 0
        ? moment.weekdaysShort(true, this.currentDate.weekday())
        : this.weekday
    }
  },
  methods: {
    getHolidayClass () {
      const weekdayName = this.currentWeekdayName
      return weekdayName === 'Sun' || weekdayName === 'Sat'
        ? 'holiday'
        : ''
    },
    getTitleClass () {
      return this.ts === 0
        ? 'title'
        : ''
    }
  }
}
</script>

<style scoped>
.holiday {
  color: red;
}

.day-of-month[disabled] {
  font-style: italic;
}

.day-of-month:hover {
  background-color: #7bf4e0;
}

.dark:hover {
  background-color: #366e66;
}

.date {
  margin-top: 25%;
  padding: 5px;
}

.weekday-name {
  font-weight: bold;
}

.month-name {
  font-style: italic;
}

.day-of-month {
  float: left;
  width: 14%;
  height: 20%;
  margin: 0px;
  cursor: pointer;
  text-align: center;
  border: 0;
  padding: 10px;
}

.title {
  //min-height: 20px !important;
  padding: 5px;
}

@media only screen and (max-width: 768px) {
  .month-name {
    display: none;
  }
}
</style>
