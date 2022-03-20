import { Component } from "vue-property-decorator";
import Vuetify from "vuetify";
import Vue from "vue";
import EventBus from "@/EventBus";

Vue.use(Vuetify);
@Component({
  name: "Snackbar",
})
export default class Snackbar extends Vue {
  snackbar = false;
  message = "";
  icon = "";
  snackbarColor = "";

  mounted() {
    EventBus.$on("snackbar", (payload: any) => {
      this.message = payload.msg;
      this.icon = payload.icon;
      this.snackbarColor = payload.color;
      this.snackbar = true;
    });
  }

  static popSuccess(msg: string) {
    EventBus.$emit("snackbar", {
      msg,
      icon: "mdi-vuetify",
      color: "green",
    });
  }

  static popWarning(msg: string) {
    EventBus.$emit("snackbar", {
      msg,
      icon: "",
      color: "orange",
    });
  }

  static popError(msg: string) {
    EventBus.$emit("snackbar", {
      msg,
      icon: "",
      color: "red",
    });
  }

  static popInfo(msg: string) {
    EventBus.$emit("snackbar", {
      msg,
      icon: "",
      color: "blue",
    });
  }

  close() {
    this.snackbar = false;
  }
}
