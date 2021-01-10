<template>
  <div class="month-setter">
    <div class="prev-month-btn" @click="prevBtnClicked">
      <i class="fas fa-arrow-left" />
    </div>
    <div class="next-month-btn" @click="nextBtnClicked">
      <i class="fas fa-arrow-right" />
    </div>

    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {} from '@fortawesome/fontawesome-free/js/all'

export default {
  name: 'MonthSetter',
  computed: {
    title () {
      const pageDate = moment(this.$store.state.pageDateTs)
      const currentMonth = pageDate.month()
      return moment.months().filter((name, index) => index === currentMonth)[0] + ' ' + pageDate.year()
    }
  },
  methods: {
    prevBtnClicked () {
      this.$store.dispatch('month/showPreviousMonth')
    },
    nextBtnClicked () {
      this.$store.dispatch('month/showNextMonth')
    }
  }
}
</script>

<style scoped>
.title {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  font-size: 22px;
}

.prev-month-btn,
.next-month-btn {
  margin: 5px;
  padding: 5px;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 3px 20px rgba(0, 0, 0, .25),
  inset 0 2px 0 rgba(255, 255, 255, .6),
  0 2px 0 rgba(0, 0, 0, .1),
  inset 0 0 20px rgba(0, 0, 0, .1);
  width: 25px;
  height: 25px;
}

.prev-month-btn:hover,
.next-month-btn:hover {
  background-color: #f0eeee;
}

@media only screen and  (max-width: 768px) {
  .title {
    margin-left: 5px;
    font-size: 18px;
  }
}
</style>
