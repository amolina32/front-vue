export const PANEL_CONSTANTS = {
  MENUS: [
    {
      title: "Item 1",
      route: "",
      icon: "mdi-account",
      submenu: [
        {
          title: "Sub-Item 1.1",
          route: "/template",
          icon: "mdi-code-braces",
          submenu: [],
        },
        {
          title: "Sub-Item 1.2",
          route: "/template4",
          icon: "mdi-account-off",
          submenu: [],
        },
      ],
    },
    {
      title: "Item 2",
      route: "/template1",
      icon: "mdi-soundcloud",
      submenu: [],
    },
    {
      title: "Item 3",
      route: "",
      icon: "mdi-clipboard-outline",
      submenu: [
        {
          title: "Sub-Item 3.1",
          route: "/template2",
          icon: "mdi-backburger",
          submenu: [],
        },
        {
          title: "Sub-Item 3.2",
          route: "",
          icon: "mdi-format-underline",
          submenu: [
            {
              title: "Sub-Item 3.2.1",
              route: "",
              icon: "mdi-numeric-2-box-outline",
              submenu: [
                {
                  title: "Sub-Item 3.2.1.1",
                  route: "/template3",
                  icon: "mdi-apps",
                  submenu: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


      