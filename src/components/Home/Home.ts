import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Home",
})
export default class Home extends Vue {
  mounted() {
    console.log("mounted Home");
  }
}
