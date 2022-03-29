import Vue from "vue";
import { Component } from "vue-property-decorator";
import Snackbar from "./components/Snackbar/Snackbar.vue";
import store from "./store";
@Component({
  name: "App",
  components: {
    Snackbar,
  },
})
export default class App extends Vue {
  cards = ["Today", "Yesterday"];
  drawer = false;
  group = null;
  links = [
    ["mdi-inbox-arrow-down", "Inbox"],
    ["mdi-send", "Send"],
    ["mdi-delete", "Trash"],
    ["mdi-alert-octagon", "Spam"],
  ];
  items = [
    { title: "Home", icon: "mdi-home-city", route: "/template" },
    { title: "My Account", icon: "mdi-account", route: "/" },
    { title: "Users", icon: "mdi-account-group-outline", route: "" },
    { title: "Alerts", icon: "mdi-account-group-outline", route: "12" },
  ];
  messages: string[] = [];
  variant = false;
  logOut() {
    localStorage.removeItem("TOKEN");
    store.commit("changeSession", false);
    this.$router.push("/login");
    //this.messages.push("This is a message");
    // store.commit("setSnackbar", [
    //   {
    //     show: true,
    //     color: "green",
    //     message: "Welcome",
    //     icon: "mdi-checkbox-marked-circle-outline",
    //     timeout: 5000,
    //   },
    // ])
  }
  alert(type: string) {
    if (type == "succes") {
      Snackbar.popSuccess(type);
    }
    if (type == "info") {
      Snackbar.popInfo(type);
    }
    if (type == "warning") {
      Snackbar.popWarning(type);
    }
    if (type == "error") {
      Snackbar.popError(type);
    }
  }
}
