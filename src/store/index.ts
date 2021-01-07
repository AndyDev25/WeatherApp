import { createStore } from 'vuex'

export default createStore({
  state: {
    WeatherData: [] as Array<object>
  },
  mutations: {
    PUSHDATA(state, data) {
      state.WeatherData.push(data)
    }
  },
  actions: {},
  modules: {}
})
