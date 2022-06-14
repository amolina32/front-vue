<template>
  <div class="home__container" style="background-color: aliceblue">
    <div class="router__container">
      <v-slide-y-reverse-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-reverse-transition>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style scoped lang="scss" src="./Home.scss"></style>
