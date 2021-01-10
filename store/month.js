import moment from 'moment'

// async, then commit mutations
export const actions = {
  showPreviousMonth ({ rootState }) {
    const prevMonth = moment(rootState.pageDateTs)
    prevMonth.subtract(1, 'months')
    const year = prevMonth.year()
    const month = prevMonth.month() + 1
    this.$router.push({
      path: '/month/' + year + '/' + month + '/' + 1
    })
  },
  showNextMonth ({ rootState }) {
    const nextMonth = moment(rootState.pageDateTs)
    nextMonth.add(1, 'months')
    const year = nextMonth.year()
    const month = nextMonth.month() + 1
    this.$router.push({
      path: '/month/' + year + '/' + month + '/' + 1
    })
  }
}

export default {
  namespaced: true,
  actions
}
