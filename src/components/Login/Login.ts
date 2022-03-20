import Vue from "vue";
import { Component } from "vue-property-decorator";
import Snackbar from "../Snackbar/Snackbar";
import { LOGIN_CONSTANTS } from "./loginConstant";

@Component({
  name: "Login",
})
export default class Login extends Vue {
  email = "";
  password = "";
  val = false;
  icon = LOGIN_CONSTANTS.PASSWORD.SHOW_ICON;
  type = LOGIN_CONSTANTS.PASSWORD.TYPE.PASSWORD;
  loading = false;
  rules = {
    required: (value: any) => !!value || "Required.",
    min: (value: any) => value.length >= 8 || "Min 8 characters",
    email: (value: any) => {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value) || "Invalid e-mail.";
    },
  };
  EMAIL = LOGIN_CONSTANTS.EMAIL;
  PASSWORD = LOGIN_CONSTANTS.PASSWORD;
  changeIcon() {
    if (this.val) {
      this.icon = LOGIN_CONSTANTS.PASSWORD.SHOW_ICON;
      this.type = LOGIN_CONSTANTS.PASSWORD.TYPE.PASSWORD;
    } else {
      this.icon = LOGIN_CONSTANTS.PASSWORD.HIDE_ICON;
      this.type = LOGIN_CONSTANTS.PASSWORD.TYPE.TEXT;
    }
    this.val = !this.val;
  }
  async login() {
    this.loading = true;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.loading = false;
    Snackbar.popSuccess("Exito");
    localStorage.setItem("TOKEN", "123");
    this.$router.push("/");
  }
}
