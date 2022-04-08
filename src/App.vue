<template>
  <v-app id="app">
    <v-main>
      <Sidebar />
      <Snackbar />
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script lang="ts" src="./App.ts">

