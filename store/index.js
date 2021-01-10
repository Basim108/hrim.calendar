import moment from 'moment'
import monthModule from './month'
import uiModule from './ui'
import eventsModule from './events'

export const state = () => ({
  pageDateTs: 0
})

// sync mutate the state
export const mutations = {
  SET_PAGE_DATE (state, payload) {
    state.pageDateTs = moment(new Date(payload.year, payload.month, payload.date)).valueOf()
  }
}

export const modules = {
  month: monthModule,
  ui: uiModule,
  events: eventsModule
}
