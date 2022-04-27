<template>
  <v-form v-model="loginForm" class="login">
    <v-container class="pa-10">
      <v-card style="background-color: rgb(0 0 0 / 0%)">
        <v-row justify="center">
          <v-col xs="12" sm="12" md="6" lg="5">
            <v-text-field
              id="email"
              autofocus
              :background-color="EMAIL.BACKGROUND_COLOR"
              :prepend-inner-icon="EMAIL.ICON"
              v-model="email"
              :rules="[rules.required, rules.email]"
              :label="EMAIL.LABEL"
              :placeholder="EMAIL.PLACEHOLDER"
              rounded
              outlined
              dense
              dark
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col xs="12" sm="12" md="6" lg="5">
            <v-text-field
              id="password"
              :background-color="PASSWORD.BACKGROUND_COLOR"
              v-model="password"
              :prepend-inner-icon="PASSWORD.ICON"
              :rules="[rules.required, rules.min]"
              :append-icon="icon"
              :label="PASSWORD.LABEL"
              :placeholder="PASSWORD.PLACEHOLDER"
              :hint="PASSWORD.HINT"
              :type="type"
              @click:append="changeIcon()"
              outlined
              rounded
              dense
              dark
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn
            rounded
            outlined
            color="warning"
            x-large
            :loading="loading"
            v-on:click="validateLogin()"
          >
            Loggin
            <v-icon right dark>mdi-login-variant</v-icon>
          </v-btn>
        </v-row>
      </v-card>
      <v-row>
        <v-col align="center">
          <v-overlay v-if="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts" src="./Login"></script>
<style lang="scss" src="./Login.scss"></style>
