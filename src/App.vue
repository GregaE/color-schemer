<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import HomeHeader from "./components/HomeHeader.vue";
import CustomizationView from "./views/CustomizationView.vue";

const rootScheme = document.querySelector(":root");

export default {
  components: {
    HomeHeader,
    HelloWorld,
    CustomizationView,
  },
  methods: {
    changeColor(color, field) {
      rootScheme.style.setProperty(field, color);
    },
  },
};
</script>

<template>
  <HomeHeader />
  <HelloWorld msg="You did it!" />
  <CustomizationView @change-color="changeColor" />
  <RouterView />
</template>

<style>
@import "@/assets/styles/reset.css";
@import "@/assets/styles/main.css";
</style>
