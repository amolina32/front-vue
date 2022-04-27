<template>
  <v-navigation-drawer
    app
    :expand-on-hover="variant"
    :mini-variant="variant"
    v-if="$store.state.onSession"
    permanent
  >
    <template v-slot:prepend>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-title>Jane Smith</v-list-item-title>
        <v-btn icon @click="changeSidebar()">
          <v-icon v-if="!variant">mdi-ray-end-arrow</v-icon>
          <v-icon v-if="variant">mdi-ray-start-arrow</v-icon>
        </v-btn>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <List :menus="menu" />
    <v-divider></v-divider>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn icon @click="logOut()">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
        <br />
        <v-btn icon @click="alert()">
          <v-icon>mdi-alert-circle-outline</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts" src="./Sidebar"></script>
<style lang="scss" src="./Sidebar.scss"></style>
