import EventBus from "@/EventBus";
import store from "@/store";
import Vue from "vue";
import { Component, Inject } from "vue-property-decorator";
import Snackbar from "../Snackbar/Snackbar";
import { LOGIN_CONSTANTS } from "./Constants/LoginConstants";
import { LoginService } from "./Services/LoginService";

@Component({
  name: "Login",
})
export default class Login extends Vue {
  @Inject() loginService!: LoginService;

  email = "";
  password = "";
  val = false;
  icon = LOGIN_CONSTANTS.PASSWORD.SHOW_ICON;
  type = LOGIN_CONSTANTS.PASSWORD.TYPE.PASSWORD;
  loading = false;
  rules = LOGIN_CONSTANTS.RULES;
  EMAIL = LOGIN_CONSTANTS.EMAIL;
  PASSWORD = LOGIN_CONSTANTS.PASSWORD;
  loginForm = false;
  users = [];
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
    try {
      const response = await this.loginService.login(this.email, this.password);
      if (response?.exist) {
        this.loading = false;
        localStorage.setItem("TOKEN", "123");
        store.commit("setMenu", response.menu);
        this.$router.push("/");
        Snackbar.popAlert(`Bienvenido ${response.name}`, "mdi-account", "blue");
      } else {
        this.loading = false;
        Snackbar.popError("El email o password incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  }

  validateLogin() {
    if (this.loginForm) {
      this.email = this.email.trim();
      this.login();
    } else {
      Snackbar.popWarning("Debe ingresar un e-mail y una contraseña validos");
    }
  }
}
