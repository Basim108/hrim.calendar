import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moment from 'moment'
import monthModule from '@/store/month'
import uiModule from '@/store/ui'
import eventsModule from '@/store/events'
import Vuetify from 'vuetify'
import Month from '~/pages'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Testing month view', () => {
  let wrapper

  beforeEach(() => {
    const store = new Vuex.Store({
      state: {
        pageDateTs: moment(new Date(2020, 11, 1)).valueOf()
      },
      modules: {
        month: monthModule,
        ui: uiModule,
        events: eventsModule
      }
    })
    wrapper = mount(Month, {
      store,
      localVue,
      vuetify: new Vuetify()
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('has built exactly 35 days', () => {
    const dates = wrapper.findAll('.date')
    expect(dates.length).toBe(35)
  })

  test('has built correct dates', () => {
    const dates = wrapper.findAll('.date')
    expect(dates.at(0).text()).toBe('29')
    expect(dates.at(1).text()).toBe('30')
    expect(dates.at(2).text()).toBe('1')
    expect(dates.at(3).text()).toBe('2')
    expect(dates.at(4).text()).toBe('3')
    expect(dates.at(5).text()).toBe('4')
    expect(dates.at(6).text()).toBe('5')
    expect(dates.at(7).text()).toBe('6')
    expect(dates.at(8).text()).toBe('7')
    expect(dates.at(9).text()).toBe('8')
    expect(dates.at(10).text()).toBe('9')
    expect(dates.at(11).text()).toBe('10')
    expect(dates.at(12).text()).toBe('11')
    expect(dates.at(13).text()).toBe('12')
    expect(dates.at(14).text()).toBe('13')
    expect(dates.at(15).text()).toBe('14')
    expect(dates.at(16).text()).toBe('15')
    expect(dates.at(17).text()).toBe('16')
    expect(dates.at(18).text()).toBe('17')
    expect(dates.at(19).text()).toBe('18')
    expect(dates.at(20).text()).toBe('19')
    expect(dates.at(21).text()).toBe('20')
    expect(dates.at(22).text()).toBe('21')
    expect(dates.at(23).text()).toBe('22')
    expect(dates.at(24).text()).toBe('23')
    expect(dates.at(25).text()).toBe('24')
    expect(dates.at(26).text()).toBe('25')
    expect(dates.at(27).text()).toBe('26')
    expect(dates.at(28).text()).toBe('27')
    expect(dates.at(29).text()).toBe('28')
    expect(dates.at(30).text()).toBe('29')
    expect(dates.at(31).text()).toBe('30')
    expect(dates.at(32).text()).toBe('31')
    expect(dates.at(33).text()).toBe('1')
    expect(dates.at(34).text()).toBe('2')
  })

  test('has set date with holiday', () => {
    const dates = wrapper.findAll('.date-body')
    expect(dates.at(0).classes('holiday')).toBe(true) // 29.11
    expect(dates.at(1).classes('holiday')).toBe(false) // 30.11
    expect(dates.at(2).classes('holiday')).toBe(false) // 1.12
    expect(dates.at(3).classes('holiday')).toBe(false) // 2.12
    expect(dates.at(4).classes('holiday')).toBe(false) // 3.12
    expect(dates.at(5).classes('holiday')).toBe(false) // 4.12
    expect(dates.at(6).classes('holiday')).toBe(true) // 5.12
    expect(dates.at(7).classes('holiday')).toBe(true) // 6.12
    expect(dates.at(8).classes('holiday')).toBe(false) // 7.12
    expect(dates.at(9).classes('holiday')).toBe(false) // 8.12
    expect(dates.at(10).classes('holiday')).toBe(false) // 9.12
    expect(dates.at(11).classes('holiday')).toBe(false) // 10.12
    expect(dates.at(12).classes('holiday')).toBe(false) // 11.12
    expect(dates.at(13).classes('holiday')).toBe(true) // 12.12
    expect(dates.at(14).classes('holiday')).toBe(true) // 13.12
    expect(dates.at(15).classes('holiday')).toBe(false) // 14.12
    expect(dates.at(16).classes('holiday')).toBe(false) // 15.12
    expect(dates.at(17).classes('holiday')).toBe(false) // 16.12
    expect(dates.at(18).classes('holiday')).toBe(false) // 17.12
    expect(dates.at(19).classes('holiday')).toBe(false) // 18.12
    expect(dates.at(20).classes('holiday')).toBe(true) // 19.12
    expect(dates.at(21).classes('holiday')).toBe(true) // 20.12
    expect(dates.at(22).classes('holiday')).toBe(false) // 21.12
    expect(dates.at(23).classes('holiday')).toBe(false) // 22.12
    expect(dates.at(24).classes('holiday')).toBe(false) // 23.12
    expect(dates.at(25).classes('holiday')).toBe(false) // 24.12
    expect(dates.at(26).classes('holiday')).toBe(false) // 25.12
    expect(dates.at(27).classes('holiday')).toBe(true) // 26.12
    expect(dates.at(28).classes('holiday')).toBe(true) // 27.12
    expect(dates.at(29).classes('holiday')).toBe(false) // 28.12
    expect(dates.at(30).classes('holiday')).toBe(false) // 29.12
    expect(dates.at(31).classes('holiday')).toBe(false) // 30.12
    expect(dates.at(32).classes('holiday')).toBe(false) // 31.12
    expect(dates.at(33).classes('holiday')).toBe(false) // 1.01
    expect(dates.at(34).classes('holiday')).toBe(true) // 2.01
  })

  test('has set correct weekday names with holiday', () => {
    const dates = wrapper.findAll('.weekday-name')
    expect(dates.at(0).classes('holiday')).toBe(true) // Sun
    expect(dates.at(6).classes('holiday')).toBe(true) // Sat
    expect(dates.at(1).classes('holiday')).toBe(false) // Mon
    expect(dates.at(2).classes('holiday')).toBe(false) // Tue
    expect(dates.at(3).classes('holiday')).toBe(false) // Wed
    expect(dates.at(4).classes('holiday')).toBe(false) // Thu
    expect(dates.at(5).classes('holiday')).toBe(false) // Fri
  })

  test('has built correct dates in 2021 January', () => {
    wrapper = mount(Month, {
      store: new Vuex.Store({
        state: {
          pageDateTs: moment(new Date(2021, 0, 1)).valueOf()
        },
        modules: {
          month: monthModule,
          ui: uiModule,
          events: eventsModule
        }
      }),
      vuetify: new Vuetify(),
      localVue
    })
    const dates = wrapper.findAll('.date')
    expect(dates.at(0).text()).toBe('27')
    expect(dates.at(dates.length - 1).text()).toBe('31')
  })
})
