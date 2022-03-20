import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    onSession: false,
  },
  getters: {},
  mutations: {
    changeSession(state, payload) {
      state.onSession = payload;
    },
  },
  actions: {},
  modules: {},
});
/*
import { MenuDataStructure } from "@/shared/models/MenuDataStructure";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    onSession: false,
    userId: "",
    role: "",
    userName: "",
    avatar: "",
    panelView: false,
    dataToMainView: {} as MenuDataStructure,
    dataToLateralMenu: {} as MenuDataStructure
  },
  mutations: {
    changeSession(state, payload) {
      state.onSession = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
    },
    setPanelView(state, payload) {
      state.panelView = payload;
    },
    setRole(state, payload) {
      state.role = payload;
    },
    setUserName(state, payload) {
      state.userName = payload;
    },
    setAvatar(state, payload) {
      state.avatar = payload;
    },
    setDataToMainView(state, payload) {
      state.dataToMainView = payload;
    },
    setDataToLateralMenu(state, payload) {
      state.dataToLateralMenu = payload;
    }
  },
  getters: {
    getDataToMainView: state => state.dataToMainView,
    getDataToLateralMenu: state => state.dataToLateralMenu,
    getPanelView: state => state.panelView
  },
  actions: {},
  modules: {}
});

*/
