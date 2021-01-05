import { SET_PAGE_DATE } from '../store/mutation-types'

export default function ({
  store,
  route
}) {
  store.commit(SET_PAGE_DATE, {
    year: parseInt(route.params.year),
    month: parseInt(route.params.month) - 1,
    date: parseInt(route.params.day) || 1
  })
}
