<template>
  <v-app id="app">
    <v-navigation-drawer
      transition="scale-transition"
      app
      permanent
      :expand-on-hover="variant"
      :mini-variant="variant"
      v-if="$store.state.onSession"
    >
      <template v-slot:append>
        <div class="pa-2">
          <v-btn icon @click="logOut()">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
          <br />
          <v-btn icon @click="alert('info')">
            <v-icon>mdi-alert-circle-outline</v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:prepend>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-btn icon @click.stop="variant = !variant">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-orange--text text--accent-10"
        >
          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <Snackbar></Snackbar>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
