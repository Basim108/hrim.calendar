export const state = () => ({
  events: []
})

// sync mutate the state
export const mutations = {
  ADD_NEW_EVENT (state, eventDto) {
    state.events.push(eventDto)
  }
}

export const actions = {
  createEvent ({
    state,
    commit
  }, eventDto) {
    eventDto.id = state.events.length === 0 ? 1 : state.events[state.events.length - 1].id + 1
    commit('ADD_NEW_EVENT', eventDto)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
