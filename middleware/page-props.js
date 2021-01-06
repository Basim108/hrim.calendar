import moment from 'moment'
import { SET_PAGE_DATE } from '../store/mutation-types'

export default function ({
  store,
  route
}) {
  const month = route.params.month
    ? parseInt(route.params.month)
    : 0
  if (!route.params.year || month < 1 || month > 12) {
    const today = moment()
    const path = '/month/' + today.year() + '/' + (today.month() + 1) + '/1'
    if (process.browser) {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push(path)
      })
    }
    return
  }
  store.commit(SET_PAGE_DATE, {
    year: parseInt(route.params.year),
    month: month - 1,
    date: parseInt(route.params.date || 1)
  })
}
