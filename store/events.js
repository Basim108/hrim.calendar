export const state = () => ({
  events: []
})

// sync mutate the state
export const mutations = {
  ADD_NEW_EVENT (state, eventDto) {
    state.events.push(eventDto)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
