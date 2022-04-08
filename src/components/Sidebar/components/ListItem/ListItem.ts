import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { SidebarModel } from "../../Models/SidebarModel";
@Component({
  name: "ListItem",
})
export default class ListItem extends Vue {
  @Prop() menu!: SidebarModel;
}
