import { createStore } from "vuex";

export default createStore({
  state: {
    sidebar: false,
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => (state.sidebar = !state.sidebar),
  },
  actions: {},
});
