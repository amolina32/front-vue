import { Component } from "vue-property-decorator";
import Vuetify from "vuetify";
import Vue from "vue";
import EventBus from "@/EventBus";
import { ALERTS, EVENTS } from "./Constants/SnackbarConstants";
import { SnackbarModel } from "./Models/Snackbar";
Vue.use(Vuetify);
@Component({
  name: "Snackbar",
})
export default class Snackbar extends Vue {
  index = 0;
  snackbars: SnackbarModel[] = [];

  mounted() {
    EventBus.$on(EVENTS.SHOW_SNACKBAR, this.setSnackbar);
  }

  setSnackbar(payload: any) {
    this.index =
      this.snackbars.push({
        show: false,
        message: payload.message,
        color: payload.color,
        icon: payload.icon,
        id: this.snackbars.length,
        timeout: payload.timeout,
        timer: 0,
      }) - 1;

    this.$nextTick(() => {
      this.snackbars[this.index].show = true;
      this.snackbars[this.index].timer = setTimeout(() => {
        this.close();
      }, this.snackbars[this.index].timeout);
    });
  }

  static popSuccess(message: string) {
    EventBus.$emit(EVENTS.SHOW_SNACKBAR, {
      message,
      icon: ALERTS.SUCCESS.DEFAULT_ICON,
      color: ALERTS.SUCCESS.DEFAULT_COLOR,
      timeout: ALERTS.SUCCESS.DEFAULT_TIMEOUT,
    });
  }

  static popWarning(message: string) {
    EventBus.$emit(EVENTS.SHOW_SNACKBAR, {
      message,
      icon: ALERTS.WARNING.DEFAULT_ICON,
      color: ALERTS.WARNING.DEFAULT_COLOR,
      timeout: ALERTS.WARNING.DEFAULT_TIMEOUT,
    });
  }

  static popError(message: string) {
    EventBus.$emit(EVENTS.SHOW_SNACKBAR, {
      message,
      icon: ALERTS.ERROR.DEFAULT_ICON,
      color: ALERTS.ERROR.DEFAULT_COLOR,
      timeout: ALERTS.ERROR.DEFAULT_TIMEOUT,
    });
  }

  static popInfo(message: string) {
    EventBus.$emit(EVENTS.SHOW_SNACKBAR, {
      message,
      icon: ALERTS.INFO.DEFAULT_ICON,
      color: ALERTS.INFO.DEFAULT_COLOR,
      timeout: ALERTS.INFO.DEFAULT_TIMEOUT,
    });
  }

  static popAlert(
    message: string,
    icon: string,
    color: string,
    timeout?: number
  ) {
    EventBus.$emit(EVENTS.SHOW_SNACKBAR, {
      message,
      icon: icon,
      color: color,
      timeout: timeout || ALERTS.INFO.DEFAULT_TIMEOUT,
    });
  }

  close(id?: number) {
    let index = id || 0;
    this.snackbars[index].show = false;
    let closeSnackbar = () => {
      clearTimeout(this.snackbars[index].timer);
      this.snackbars.splice(index, 1);
    };
    setTimeout(closeSnackbar, 600);
  }
}
