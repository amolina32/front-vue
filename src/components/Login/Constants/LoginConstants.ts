export const LOGIN_CONSTANTS = {
  EMAIL: {
    ICON: "mdi-email",
    PLACEHOLDER: "E-mail",
    LABEL: "E-mail",
    BACKGROUND_COLOR: "rgb(178 159 159 / 50%)",
  },
  PASSWORD: {
    ICON: "mdi-key-variant",
    PLACEHOLDER: "Password",
    LABEL: "Password",
    HINT: "minimo 8 caracteres",
    SHOW_ICON: "mdi-eye",
    HIDE_ICON: "mdi-eye-off",
    TYPE: {
      PASSWORD: "password",
      TEXT: "text",
    },
    BACKGROUND_COLOR: "rgb(178 159 159 / 50%)",
  },
  RULES: {
    required: (value: any) => !!value || "Campo requerido",
    min: (value: any) => value.length >= 8 || "Minimo 8 caracteres",
    email: (value: any) => {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value) || "E-mail invalido";
    },
  },
};
