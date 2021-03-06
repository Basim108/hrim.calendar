import moment from 'moment'

export default function ({
  store,
  route
}) {
  const today = moment()
  const year = (route.params.year && parseInt(route.params.year)) || today.year()
  let month = (route.params.month && parseInt(route.params.month)) || today.month() + 1
  if (month < 1) {
    month = 1
  } else if (month > 12) {
    month = 12
  }
  const date = (route.params.date && parseInt(route.params.date)) || 1
  store.commit('SET_PAGE_DATE', {
    year,
    month: month - 1,
    date
  })
}
