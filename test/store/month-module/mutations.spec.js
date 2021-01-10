import moment from 'moment'
import { mutations } from '~/store'

describe('testing month page mutations', () => {
  test('SET_PAGE_DATE mutation should set a page date', () => {
    const state = {
      pageDateTs: 0
    }
    const payload = {
      year: 2020,
      month: 11,
      date: 1
    }
    mutations.SET_PAGE_DATE(state, payload)
    const testingMoment = moment(state.pageDateTs)
    expect(testingMoment.year()).toBe(payload.year)
    expect(testingMoment.month()).toBe(payload.month)
    expect(testingMoment.date()).toBe(payload.date)
  })
})
