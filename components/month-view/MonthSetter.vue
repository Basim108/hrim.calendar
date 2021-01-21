<template>
  <div class="month-setter">
    <v-btn
      class="sm-2"
      fab
      x-small
      @click="prevBtnClicked"
    >
      <v-icon>
        mdi-arrow-left
      </v-icon>
    </v-btn>
    <v-btn
      class="sm-2"
      fab
      x-small
      @click="nextBtnClicked"
    >
      <v-icon>
        mdi-arrow-right
      </v-icon>
    </v-btn>

    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'

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

@media only screen and  (max-width: 768px) {
  .title {
    margin-left: 5px;
    font-size: 18px;
  }
}
</style>
