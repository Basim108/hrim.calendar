const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

export const state = () => ({
  theme: LIGHT_THEME
})

export const mutations = {
  toggleTheme: (state) => {
    if (state.theme === DARK_THEME) {
      state.theme = LIGHT_THEME
    } else {
      state.theme = DARK_THEME
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
