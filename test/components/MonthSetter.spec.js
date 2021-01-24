import { mount, createLocalVue } from '@vue/test-utils'
import Month from '@/components/month-view/MonthSetter'
import uiModule from '@/store/ui'
import Vuex from 'vuex'
import moment from 'moment'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Testing day of month component', () => {
  let store
  let actions
  let wrapper

  beforeEach(() => {
    actions = {
      showNextMonth: jest.fn(),
      showPreviousMonth: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        pageDateTs: moment(new Date(2020, 11, 1)).valueOf()
      },
      modules: {
        month: {
          namespaced: true,
          actions
        },
        ui: uiModule
      }
    })
    wrapper = mount(Month, {
      store,
      localVue,
      vuetify: new Vuetify()
    })
  })

  test('Should call showPreviousMonth action when clicked on prev btn', () => {
    const prevBtn = wrapper.find('.prev-month-btn')
    expect(prevBtn.exists()).toBe(true)
    prevBtn.trigger('click')
    expect(actions.showPreviousMonth).toHaveBeenCalled()
    expect(actions.showPreviousMonth).toHaveBeenCalledTimes(1)
    expect(actions.showNextMonth).not.toHaveBeenCalled()
  })

  test('Should call showNextMonth action when clicked on prev btn', () => {
    const prevBtn = wrapper.find('.next-month-btn')
    expect(prevBtn.exists()).toBe(true)
    prevBtn.trigger('click')
    expect(actions.showNextMonth).toHaveBeenCalled()
    expect(actions.showNextMonth).toHaveBeenCalledTimes(1)
    expect(actions.showPreviousMonth).not.toHaveBeenCalled()
  })
})
