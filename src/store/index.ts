import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    onSession: false,
    menu: [],
  },
  getters: { getMenu: (state) => state.menu },
  mutations: {
    changeSession(state, payload) {
      state.onSession = payload;
    },
    setMenu(state, payload) {
      console.log("Entre a setear el menu");
      state.menu = payload;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
});
