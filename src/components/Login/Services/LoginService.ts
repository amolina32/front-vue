import { PANEL_CONSTANTS } from "@/components/Sidebar/Constants/SidebarConstants";
import axios from "axios";

export class LoginService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.VUE_APP_RUTA_API}`;
  }

  async getUser(id: string) {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async login(email: string, password: string) {
    if (email == "anthyjosemolina@gmail.com" && password == "12345678") {
      const response = await axios.get(`${this.baseUrl}/get-user-menu/1`);

      return {
        menu: response.data,
        name: "Antonio Molina",
        profile: "Admin",
        exist: true,
      };
    }
  }
}
