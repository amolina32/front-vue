import Vue from "vue";
import { Component } from "vue-property-decorator";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Snackbar from "./components/Snackbar/Snackbar.vue";
@Component({
  name: "App",
  components: {
    Snackbar,
    Sidebar,
  },
})
export default class App extends Vue {}
