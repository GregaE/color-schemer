<template>
  <div>
    <HomeHeader @toggle-export-modal="toggleExportModal" />
    <GenerateColor @change-scheme="changeScheme" />
    <CustomizationView
      @change-color="changeColor"
      v-bind:textPrimary="textPrimary"
      v-bind:textSecondary="textSecondary"
      v-bind:bgPrimary="bgPrimary"
      v-bind:bgSecondary="bgSecondary"
    />
    <InvertColors
      @change-scheme="changeScheme"
      v-bind:textPrimary="textPrimary"
      v-bind:textSecondary="textSecondary"
      v-bind:bgPrimary="bgPrimary"
      v-bind:bgSecondary="bgSecondary"
    />
    <ExportModal
      v-if="exportModalIsActive"
      v-bind:textPrimary="textPrimary"
      v-bind:textSecondary="textSecondary"
      v-bind:bgPrimary="bgPrimary"
      v-bind:bgSecondary="bgSecondary"
    />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import GenerateColor from "./components/GenerateColor.vue";
import CustomizationView from "./views/CustomizationView.vue";
import InvertColors from "./components/InvertColors.vue";
import ExportModal from "./components/ExportModal.vue";

const rootScheme = document.querySelector(":root");

export default {
  components: {
    HomeHeader,
    GenerateColor,
    CustomizationView,
    InvertColors,
    ExportModal,
  },
  data: () => ({
    textPrimary: localStorage.getItem("text-primary"),
    textSecondary: localStorage.getItem("text-secondary"),
    bgPrimary: localStorage.getItem("bg-primary"),
    bgSecondary: localStorage.getItem("bg-secondary"),
    exportModalIsActive: false,
  }),
  methods: {
    changeColor(color, field) {
      if (field === "--text-primary") {
        this.textPrimary = color;
      } else if (field === "--text-secondary") {
        this.textSecondary = color;
      } else if (field === "--bg-primary") {
        this.bgPrimary = color;
      } else if (field === "--bg-secondary") {
        this.bgSecondary = color;
      }
      rootScheme.style.setProperty(field, color);
    },
    changeScheme(colorArr) {
      this.changeColor(colorArr[0], "--text-primary");
      this.changeColor(colorArr[1], "--text-secondary");
      this.changeColor(colorArr[2], "--bg-primary");
      this.changeColor(colorArr[3], "--bg-secondary");
    },
    toggleExportModal() {
      this.exportModalIsActive = !this.exportModalIsActive;
    },
  },
  beforeCreate() {
    if (!localStorage.getItem("text-primary")) {
      console.log("here");
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

<style>
@import "@/assets/styles/main.css";
</style>
