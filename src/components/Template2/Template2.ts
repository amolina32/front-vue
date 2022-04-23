import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Template",
})
export default class Template extends Vue {
  cards = ["Today", "Yesterday"];
  drawer = null;
  links = [
    ["mdi-inbox-arrow-down", "Inbox"],
    ["mdi-send", "Send"],
    ["mdi-delete", "Trash"],
    ["mdi-alert-octagon", "Spam"],
  ];
}
