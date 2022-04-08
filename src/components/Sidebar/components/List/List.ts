import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { SidebarModel } from "../../Models/SidebarModel";
import ListGroup from "../ListGroup/ListGroup.vue";
import ListItem from "../ListItem/ListItem.vue";

@Component({
  name: "List",
  components: { ListGroup, ListItem },
})
export default class List extends Vue {
  @Prop() menus!: SidebarModel[];
}
