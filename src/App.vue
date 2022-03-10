<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeHeader from "@/components/HomeHeader.vue";
</script>

<template>
  <HomeHeader />
  <HelloWorld msg="You did it!" />
  <RouterView />
</template>

<style>
@import "@/assets/styles/reset.css";
@import "@/assets/styles/main.css";
</style>
