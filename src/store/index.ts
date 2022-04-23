import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    onSession: false,
    menu: [],
  },
  getters: {},
  mutations: {
    changeSession(state, payload) {
      state.onSession = payload;
    },
    setMenu(state, payload) {
      state.menu = payload;
    },
  },
  actions: {},
  modules: {},
});
