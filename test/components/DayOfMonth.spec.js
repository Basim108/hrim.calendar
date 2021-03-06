import { mount, createLocalVue } from '@vue/test-utils'
import Month from '@/components/month-view/DayOfMonth'
import Vuex from 'vuex'
import moment from 'moment'
import Vuetify from 'vuetify'
import uiModule from '~/store/ui'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Testing day of month component', () => {
  let store
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    store = new Vuex.Store({
      state: {
        pageDateTs: moment(new Date(2020, 11, 1)).valueOf()
      },
      modules: {
        ui: uiModule
      }
    })
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('Should show weekday name', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Sun'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.text()).toBe('Sun')
  })

  test('Sunday is a holiday', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Sun'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.classes('holiday')).toBe(true)
  })

  test('Saturday is a holiday', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Sat'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.classes('holiday')).toBe(true)
  })

  test('Monday is not a holiday', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Mon'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.classes('holiday')).toBe(false)
  })

  test('Tuesday is not a holiday', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Tue'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.classes('holiday')).toBe(false)
  })

  test('Wednesday is not a holiday', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Wed'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.classes('holiday')).toBe(false)
  })

  test('Thursday is not a holiday', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Thu'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.classes('holiday')).toBe(false)
  })

  test('Friday is not a holiday', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        weekday: 'Fri'
      }
    })
    const div = wrapper.find('.weekday-name')
    expect(div.classes('holiday')).toBe(false)
  })

  test('Should show month name for out of page month dates', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        ts: moment(new Date(2020, 10, 1)).valueOf()
      }
    })
    const div = wrapper.find('.month-name')
    expect(div.exists()).toBe(true)
  })

  test('Should hide month name for in page month dates', () => {
    const wrapper = mount(Month, {
      store,
      localVue,
      vuetify,
      propsData: {
        ts: moment(new Date(2020, 11, 5)).valueOf()
      }
    })
    const div = wrapper.find('.month-name')
    expect(div.exists()).toBe(false)
  })
})
