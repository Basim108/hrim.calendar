<template>
  <v-card class="mx-auto day-of-month" v-bind:disabled="isMonthNameVisible" :class="getTitleClass()">
    <v-card-text class="day-of-month-body" :class="getTitleClass()">
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
    </v-card-text>
  </v-card>
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

.day-of-month:hover {
  background-color: #7bf4e0;
}

.date {
  margin-top: 25%;
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
  height: 10%;
  margin: 0.1%;
  cursor: pointer;
  text-align: center;
}

.title {
  height: 20px !important;
  padding: 0px;
}

@media only screen and (max-width: 768px) {
  .month-name {
    display: none;
  }
}
</style>
