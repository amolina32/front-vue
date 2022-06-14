import store from "@/store";
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";
import Snackbar from "../Snackbar/Snackbar";
import List from "./components/List/List.vue";
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
  messages = [
    {
      avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      name: "John Leider",
      title: "Welcome to Vuetify!",
      excerpt: "Thank you for joining our community...",
    },
    {
      color: "red",
      icon: "mdi-account-multiple",
      name: "Social",
      new: 1,
      total: 3,
      title: "Twitter",
    },
    {
      color: "teal",
      icon: "mdi-tag",
      name: "Promos",
      new: 2,
      total: 4,
      title: "Shop your way",
      exceprt: "New deals available, Join Today",
    },
  ];
  lorem =
    "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.";
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
