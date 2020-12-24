import moment from 'moment'
import { showPreviousMonth, showNextMonth } from '@/store/action-types'
import { SET_PAGE_DATE } from '@/store/mutation-types'

export const state = () => ({
  pageDateTs: 0
})

// sync mutate the state
export const mutations = {
  [SET_PAGE_DATE]: (state, payload) => {
    state.pageDateTs = moment(new Date(payload.year, payload.month, payload.date)).valueOf()
  }
}

// async, then commit mutations
export const actions = {
  [showPreviousMonth] ({ state }) {
    const prevMonth = moment(state.pageDateTs)
    prevMonth.subtract(1, 'months')
    const year = prevMonth.year()
    const month = prevMonth.month() + 1
    this.$router.push({
      path: '/month/'.concat(year, '/', month, '/', 1)
    })
  },
  [showNextMonth] ({ state }) {
    const nextMonth = moment(state.pageDateTs)
    nextMonth.add(1, 'months')
    const year = nextMonth.year()
    const month = nextMonth.month() + 1
    this.$router.push({
      path: '/month/'.concat(year, '/', month, '/', 1)
    })
  }
}
