<template>
  <v-app id="app">
    <v-main>
      <ServiceProvider>
        <router-view></router-view>
        <Snackbar></Snackbar>
        <Sidebar></Sidebar>
      </ServiceProvider>
    </v-main>
  </v-app>
</template>

<script lang="ts" src="./App.ts">

