<template>
  <v-container fluid class="login">
    <v-container>
      <v-row justify="center">
        <v-col sm="6" lg="6">
          <v-text-field
            id="email"
            autofocus
            color="grey lighten-2"
            background-color="rgb(178 159 159 / 50%)"
            :prepend-inner-icon="EMAIL.ICON"
            v-model="email"
            :rules="[rules.required, rules.email]"
            :label="EMAIL.LABEL"
            :placeholder="EMAIL.PLACEHOLDER"
            filled
            rounded
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="6" lg="6">
          <v-text-field
            color="grey lighten-2"
            background-color="rgb(178 159 159 / 50%)"
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
            outlined
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
          rounded
          outlined
          color="warning"
          dark
          x-large
          :loading="loading"
          @click="login()"
        >
          Loggin
        </v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" src="./Login"></script>
<style lang="scss" src="./Login.scss"></style>
