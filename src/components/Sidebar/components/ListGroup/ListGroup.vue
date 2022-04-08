<template>
  <v-list-group :prepend-icon="menu.icon" eager>
    <template v-slot:activator>
      <v-list-item-icon
        v-if="!menu.icon"
        class="text-caption text-uppercase text-center my-2 align-self-center"
        style="margin-top: 14px"
      >
      </v-list-item-icon>

      <v-list-item-avatar v-if="menu.avatar">
        <v-img :src="menu.avatar" />
      </v-list-item-avatar>

      <v-list-item-content v-if="menu.title">
        <v-list-item-title v-text="menu.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in menu.submenu">
      <ListGroup
        v-if="child.submenu.length > 0"
        :key="`sub-group-${i}`"
        :menu="child"
      />

      <ListItem v-else :key="`child-${i}`" :menu="child" />
    </template>
  </v-list-group>
</template>
<script lang="ts" src="./ListGroup"></script>
