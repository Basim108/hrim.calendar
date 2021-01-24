export const state = () => ({
  events: [
    {
      id: 1,
      color: '#0000FFFF',
      name: 'Work Out'
    },
    {
      id: 2,
      color: 'blue',
      name: 'Algorithms'
    },
    {
      id: 3,
      color: 'green',
      name: 'System Design '
    },
    {
      id: 4,
      color: 'yellow',
      name: 'Frontend'
    },
    {
      id: 5,
      color: 'red lighten-2',
      name: 'Illness: Cold'
    },
    {
      id: 6,
      color: 'red lighten-1',
      name: 'Illness: Flew'
    }
  ]
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
