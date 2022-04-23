<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { LoginService } from "@/components/Login/Services/LoginService";
import Vue from "vue";
import { Component, Provide } from "vue-property-decorator";

@Component({
  name: "ServiceProvider",
})
export default class ServiceProvider extends Vue {
  @Provide() loginService: LoginService = new LoginService();
}
</script>
