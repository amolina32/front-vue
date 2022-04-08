import { Component, Vue } from "vue-property-decorator";
import Sidebar from "../Sidebar/Sidebar.vue";
@Component({
  name: "Home",
  components: {
    Sidebar,
  },
})
export default class Home extends Vue {
  mounted() {
    console.log("mounted Home");
  }
}
