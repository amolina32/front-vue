import Vue from "vue";
import { Component } from "vue-property-decorator";
import Snackbar from "./components/Snackbar/Snackbar.vue";
@Component({
  name: "App",
  components: {
    Snackbar,
  },
})
export default class App extends Vue {}
