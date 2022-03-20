<template>
  <div>
    <v-snackbar
      id="snackbar"
      v-model="snackbar"
      min-width="0 !important"
      max-width="70vw"
      top
      :right="true"
      transition="slide-x-transition"
      :color="snackbarColor"
    >
      <v-icon class="mx-2">{{ icon }}</v-icon>
      <span class="snackbar-msg">
        <b>{{ message }}</b>
      </span>
      <template v-slot:action="{ attrs }">
        <v-btn id="snackbarCloseBtn" icon @click="close()" v-bind="attrs">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts" src="./Snackbar.ts"></script>
<style scoped lang="scss" src="./Snackbar.scss"></style>
