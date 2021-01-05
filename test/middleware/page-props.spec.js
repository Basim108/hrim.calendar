import pageProps from '@/middleware/page-props'
import { SET_PAGE_DATE } from '@/store/mutation-types'

describe('testing setting page properties middleware', () => {
  test('SET_PAGE_DATE mutation should be called', () => {
    const payload = {
      year: 2021,
      month: 1,
      date: 5
    }

    const context = {
      store: {
        commit: jest.fn()
      },
      route: {
        params: {
          year: payload.year,
          month: payload.month,
          day: payload.date
        }
      }
    }
    pageProps(context)
    expect(context.store.commit).toHaveBeenCalled()
    expect(context.store.commit).toBeCalledWith(SET_PAGE_DATE, {
      year: payload.year,
      month: payload.month - 1,
      date: payload.date
    })
  })
})
