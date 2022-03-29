import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    onSession: false,
    snackbars: [],
  },
  getters: { getSnackbars: (state) => state.snackbars },
  mutations: {
    changeSession(state, payload) {
      state.onSession = payload;
    },

    setSnackbar(state, snackbar) {
      state.snackbars = state.snackbars.concat(snackbar);
    },
    deleteSnackbar(state, index) {
      if (index) {
        state.snackbars.splice(index, 1);
      } else {
        state.snackbars.splice(0, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
