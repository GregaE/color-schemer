<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeView from "./views/HomeView.vue";
import CustomizationView from "./views/CustomizationView.vue";

const rootScheme = document.querySelector(":root");

export default {
  components: {
    HomeHeader,
    HomeView,
    CustomizationView,
  },
  methods: {
    changeColor(color, field) {
      rootScheme.style.setProperty(field, color);
    },
  },
  created() {
    if (!localStorage.getItem("text-primary")) {
      localStorage.setItem("text-primary", "#ffffff");
      localStorage.setItem("text-secondary", "#000000");
      localStorage.setItem("bg-primary", "#3428a1");
      localStorage.setItem("bg-secondary", "#fff9ff");
    } else {
      rootScheme.style.setProperty(
        "--text-primary",
        localStorage.getItem("text-primary")
      );
      rootScheme.style.setProperty(
        "--text-secondary",
        localStorage.getItem("text-secondary")
      );
      rootScheme.style.setProperty(
        "--bg-primary",
        localStorage.getItem("bg-primary")
      );
      rootScheme.style.setProperty(
        "--bg-secondary",
        localStorage.getItem("bg-secondary")
      );
    }
  },
};
</script>

<template>
  <div>
    <HomeHeader />
    <HomeView />
    <CustomizationView @change-color="changeColor" />
  </div>
</template>

<style>
/* @import "@/assets/styles/reset.css"; */
@import "@/assets/styles/main.css";
</style>
