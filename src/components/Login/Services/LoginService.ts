import { PANEL_CONSTANTS } from "@/components/Sidebar/Constants/SidebarConstants";
import axios from "axios";

export class LoginService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com/users";
  }

  async getUser(id: string) {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async login(email: string, password: string) {
    const menu = PANEL_CONSTANTS.MENUS;
    if (email == "anthyjosemolina@gmail.com" && password == "12345678") {
      return { menu, name: "Antonio Molina", profile: "Admin", exist: true };
    }
  }
}
