<template>
  <div>
    <v-snackbar
      v-for="(snackbar, index) in snackbars"
      id="snackbar"
      :key="index"
      v-model="snackbar.show"
      min-width="0 !important"
      max-width="70vw"
      top
      :right="true"
      transition="slide-x-transition"
      :color="snackbar.color"
      :style="`top: ${index * 60 + 8}px`"
      :timeout="-1"
      :elevation="24"
    >
      <v-icon class="mx-2">{{ snackbar.icon }}</v-icon>
      <span class="snackbar-msg">
        <b>{{ snackbar.message + snackbar.id }}</b>
      </span>
      <template v-slot:action="{ attrs }">
        <v-btn
          id="snackbarCloseBtn"
          icon
          @click="closeById(snackbar.id)"
          v-bind="attrs"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts" src="./Snackbar.ts"></script>
<style scoped lang="scss" src="./Snackbar.scss"></style>
