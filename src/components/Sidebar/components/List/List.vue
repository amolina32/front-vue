<template>
  <v-list expand shaped>
    <template v-for="(menu, index) in menus">
      <ListGroup
        v-if="menu.submenu.length > 0"
        :key="`group-${index}`"
        :menu="menu"
      />
      <ListItem v-else :key="`item-${index}`" :menu="menu" />
    </template>
  </v-list>
</template>
<script lang="ts" src="./List"></script>
