<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="6" lg="6">
        <v-text-field
          :prepend-inner-icon="EMAIL.ICON"
          v-model="email"
          :rules="[rules.required, rules.email]"
          :label="EMAIL.LABEL"
          :placeholder="EMAIL.PLACEHOLDER"
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="6" lg="6">
        <v-text-field
          v-model="password"
          :prepend-inner-icon="PASSWORD.ICON"
          :rules="[rules.required, rules.min]"
          :append-icon="icon"
          :label="PASSWORD.LABEL"
          :placeholder="PASSWORD.PLACEHOLDER"
          :hint="PASSWORD.HINT"
          :type="type"
          @click:append="changeIcon()"
          counter
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
        rounded
        color="warning"
        dark
        x-large
        outlined
        plain
        :loading="loading"
        @click="login()"
      >
        Loggin
      </v-btn>
    </v-row>
    <v-alert
      class="alert"
      color="primary"
      dark
      dismissible
      icon="mdi-vuetify"
      border="left"
      prominent
      transition="scale-transition"
      :value="alert"
    >
      Bienvenido Crack
    </v-alert>
  </v-container>
</template>

<script lang="ts" src="./Login"></script>
<style lang="scss" src="./Login.scss"></style>
