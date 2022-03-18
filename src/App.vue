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
      this.textPrimary = color;
      rootScheme.style.setProperty(field, color);
    },
  },
  data: () => ({
    textPrimary: localStorage.getItem("text-primary"),
    textSecondary: localStorage.getItem("text-secondary"),
    bgPrimary: localStorage.getItem("bg-primary"),
    bgSecondary: localStorage.getItem("bg-secondary"),
  }),
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
    <HomeView v-bind:textPrimary="textPrimary" />
    <CustomizationView
      @change-color="changeColor"
      v-bind:textPrimary="textPrimary"
      v-bind:textSecondary="textSecondary"
      v-bind:bgPrimary="bgPrimary"
      v-bind:bgSecondary="bgSecondary"
    />
  </div>
</template>

<style>
@import "@/assets/styles/main.css";
</style>
