import store from "@/store";
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";
import Snackbar from "../Snackbar/Snackbar";
import List from "./components/List/List.vue";
import { PANEL_CONSTANTS } from "./Constants/SidebarConstants";
import { SidebarModel } from "./Models/SidebarModel";

@Component({
  name: "Sidebar",
  components: { List },
  computed: {
    ...mapGetters({ menu: "getMenu" }),
  },
})
export default class Panel extends Vue {
  menu!: SidebarModel[];
  variant = false;

  logOut() {
    localStorage.removeItem("TOKEN");
    store.commit("changeSession", false);
    this.$router.push("/login");
  }

  changeSidebar() {
    this.variant = !this.variant;
  }

  alert() {
    Snackbar.popSuccess("popSuccess");
    setTimeout(() => {
      Snackbar.popInfo("popInfo");
    }, 1000);
    setTimeout(() => {
      Snackbar.popWarning("popWarning");
    }, 2000);
    setTimeout(() => {
      Snackbar.popError("popError");
    }, 3000);
    setTimeout(() => {
      Snackbar.popAlert("Alerta parametrica", "mdi-alarm-light", "black");
    }, 4000);
  }
}
