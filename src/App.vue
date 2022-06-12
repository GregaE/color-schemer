<template>
  <div>
    <HomeHeader @toggle-export-modal="toggleExportModal" />
    <ExportModal v-if="exportModalIsActive" />
    <router-view
      class="view-container"
      @click="toggleExportModal"
      :class="{ blurred: exportModalIsActive }"
    />
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeFooter from "./components/HomeFooter.vue";
import ExportModal from "./components/ExportModal.vue";

const rootScheme = document.querySelector(":root");

export default {
  components: {
    HomeHeader,
    ExportModal,
    HomeFooter,
  },
  data: () => ({
    exportModalIsActive: false,
  }),
  methods: {
    toggleExportModal() {
      this.exportModalIsActive = !this.exportModalIsActive;
    },
  },
  beforeCreate() {
    if (!localStorage.getItem("text-primary")) {
      localStorage.setItem("text-primary", "#ffffff");
      localStorage.setItem("text-secondary", "#000000");
      localStorage.setItem("bg-primary", "#3428a1");
      localStorage.setItem("bg-secondary", "#fff9ff");
      localStorage.setItem("tertiary", "#000000");
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
      rootScheme.style.setProperty(
        "--tertiary",
        localStorage.getItem("tertiary")
      );
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.view-container {
  transition: 0.4s;
  &.blurred {
    filter: blur(5px);
  }
}
</style>
