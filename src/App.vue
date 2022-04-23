<template>
  <v-app id="app">
    <v-main>
      <ServiceProvider>
        <router-view></router-view>
        <Snackbar></Snackbar>
      </ServiceProvider>
    </v-main>
  </v-app>
</template>

<script lang="ts" src="./App.ts">

