<template>
  <v-list-item
    :to="`${menu.route}/${menu.title}`"
    active-class="primary white--text"
    link
    class="py-1"
  >
    <v-list-item-icon
      v-if="!menu.icon"
      class="text-caption text-uppercase justify-center ml-1 my-2 align-self-center"
    >
    </v-list-item-icon>

    <v-list-item-icon v-if="menu.icon" class="my-2 align-self-center">
      <v-icon v-text="menu.icon" />
    </v-list-item-icon>

    <v-list-item-content v-if="menu.title">
      <v-list-item-title v-text="menu.title" />
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts" src="./ListItem"></script>
