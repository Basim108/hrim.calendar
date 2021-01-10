import moment from 'moment'
import { actions } from '~/store/month'

describe('testing month page actions', () => {
  let context
  let store
  const payload = {
    year: 2020,
    month: 11,
    date: 1
  }

  beforeEach(() => {
    store = {
      rootState: {
        pageDateTs: moment(new Date(payload.year, payload.month, payload.date)).valueOf()
      }
    }
    context = {
      $store: store,
      $router: {
        push: jest.fn()
      }
    }
  })

  test('showPreviousMonth action should route to a correct path', () => {
    actions.showPreviousMonth.call(context, store)
    expect(context.$router.push).toHaveBeenCalled()
    expect(context.$router.push).toBeCalledWith(expect.objectContaining({
      path: expect.stringMatching('/month/2020/11/1')
    }))
  })
})
