import { Component, Watch } from "vue-property-decorator";
import Vuetify from "vuetify";
import Vue from "vue";
import EventBus from "@/EventBus";

Vue.use(Vuetify);
@Component({
  name: "Snackbar",
})
export default class Snackbar extends Vue {
  index = 0;
  snackbar = false;
  message = "";
  icon = "";
  snackbarColor = "";
  snackbars: {
    show: boolean;
    message: string;
    color: string;
    icon: string;
    id: number;
    timeout: number;
    timer: number;
  }[] = [];
  mounted() {
    EventBus.$on("snackbar", (payload: any) => {
      this.index =
        this.snackbars.push({
          show: true,
          message: payload.msg,
          color: payload.color,
          icon: payload.icon,
          id: Math.random(),
          timeout: 5000,
          timer: 0,
        }) - 1;
      console.log(this.index);
    });
  }
  // @Watch("snackbars")
  // adas() {
  //   console.log(this.snackbars[this.index]);
  //   if (this.snackbars[this.index]) {
  //     if (this.snackbars[this.index].timer === 0) {
  //       this.snackbars[this.index].timer = setTimeout(() => {
  //         this.close();
  //       }, 5000);
  //     }
  //   }
  // }
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
    this.snackbars.splice(0, 1);
  }
  closeById(id: number) {
    console.log(id);
    let ss = this.snackbars.findIndex((s) => (s.id = id));
    this.snackbars.splice(ss, 0);
  }
}
