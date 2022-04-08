import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { SidebarModel } from "../../Models/SidebarModel";
import ListItem from "../ListItem/ListItem.vue";

@Component({
  name: "ListGroup",
  components: {
    ListItem,
  },
})
export default class ListGroup extends Vue {
  @Prop() menu!: SidebarModel;
}
