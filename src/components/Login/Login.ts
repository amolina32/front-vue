import store from "@/store";
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
  loginForm = false;

  changeIcon() {
    if (this.val) {
      this.icon = LOGIN_CONSTANTS.PASSWORD.SHOW_ICON;
      this.type = LOGIN_CONSTANTS.PASSWORD.TYPE.PASSWORD;
    } else {
      this.icon = LOGIN_CONSTANTS.PASSWORD.HIDE_ICON;
      this.type = LOGIN_CONSTANTS.PASSWORD.TYPE.TEXT;
    }
    this.val = !this.val;
    store.commit("setSnackbar", [
      {
        show: true,
        color: "red",
        message: "Cambio el icono" + this.val,
        icon: "mdi-alert-outline",
        timeout: 5000,
      },
    ]);
  }
  async login() {
    console.log("entre al login");
    this.loading = true;

    await new Promise((resolve) => setTimeout(resolve, 5000));

    this.loading = false;
    Snackbar.popSuccess("Exito");
    localStorage.setItem("TOKEN", "123");
    this.$router.push("/");
    store.commit("setSnackbar", [
      {
        show: true,
        color: "green",
        message: "Welcome" + this.val,
        icon: "mdi-checkbox-marked-circle-outline",
        timeout: 5000,
      },
    ]);
  }

  validateLogin() {
    if (this.loginForm) {
      this.email = this.email.trim();
      this.login();
    } else {
      //Snackbar.popError("Debe ingresar un e-mail y una contraseña validos");
      //Snackbar.popInfo("Debe ingresar un e-mail y una contraseña validos");
      //Snackbar.popSuccess("Debe ingresar un e-mail y una contraseña validos");
      Snackbar.popWarning("Debe ingresar un e-mail y una contraseña validos");
    }
  }
}
