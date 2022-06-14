<template>
  <v-navigation-drawer
    app
    :expand-on-hover="variant"
    :mini-variant="variant"
    v-if="$store.state.onSession"
    permanent
  >
    <template v-slot:prepend>
      <v-container>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-menu bottom min-width="200px" rounded offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on">
                  <v-avatar color="brown" size="48">
                    <span class="white--text text-h5">AM</span>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar color="brown">
                      <span class="white--text text-h5">JS</span>
                    </v-avatar>
                    <h3>Jane Smith</h3>
                    <p class="text-caption mt-1">janeSmith@gmail.com</p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Edit Account </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Disconnect </v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
          </v-list-item-avatar>

          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-btn icon @click="changeSidebar()">
            <v-icon v-if="!variant">mdi-ray-end-arrow</v-icon>
            <v-icon v-if="variant">mdi-ray-start-arrow</v-icon>
          </v-btn>
        </v-list-item>
      </v-container>
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
