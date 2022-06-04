<template>
  <div>
    <HomeHeader @toggle-export-modal="toggleExportModal" @create="create" />
    <main>
      <!-- <CustomizeView
        @change-color="changeColor"
        :textPrimary="textPrimary"
        :textSecondary="textSecondary"
        :bgPrimary="bgPrimary"
        :bgSecondary="bgSecondary"
        :tertiary="tertiary"
      />
      <InvertColors
        @change-scheme="changeScheme"
        :textPrimary="textPrimary"
        :textSecondary="textSecondary"
        :bgPrimary="bgPrimary"
        :bgSecondary="bgSecondary"
        :tertiary="tertiary"
      />
      <ExportModal
        v-if="exportModalIsActive"
        :textPrimary="textPrimary"
        :textSecondary="textSecondary"
        :bgPrimary="bgPrimary"
        :bgSecondary="bgSecondary"
        :tertiary="tertiary"
      />
      <AdvancedConfig @change-scheme="changeScheme" />
      <UserSchemes
        @remove="remove"
        @apply="changeScheme"
        @rename="rename"
      /> -->
      <router-view />
    </main>
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import GenerateColor from "./components/GenerateScheme.vue";
import CustomizeView from "./views/CustomizeView.vue";
import InvertColors from "./components/InvertColors.vue";
import ExportModal from "./components/ExportModal.vue";
import AdvancedConfig from "./components/AdvancedConfig.vue";
import HomeFooter from "./components/HomeFooter.vue";
import UserSchemes from "./views/UserSchemes.vue";
import {
  createScheme,
  deleteScheme,
  renameScheme,
} from "./services/colorApiService.js";

const rootScheme = document.querySelector(":root");

export default {
  components: {
    HomeHeader,
    InvertColors,
    ExportModal,
    AdvancedConfig,
    HomeFooter,
  },
  data: () => ({
    exportModalIsActive: false,
  }),
  methods: {
    toggleExportModal() {
      this.exportModalIsActive = !this.exportModalIsActive;
    },
    create(name) {
      createScheme(
        name,
        [
          this.textPrimary,
          this.textSecondary,
          this.bgPrimary,
          this.bgSecondary,
          this.tertiary,
        ],
        "6245d8c249e428cdbaa8d920"
      );
      this.userSchemeList = [
        ...this.userSchemeList,
        {
          name: name,
          colors: [
            this.textPrimary,
            this.textSecondary,
            this.bgPrimary,
            this.bgSecondary,
            this.tertiary,
          ],
          _id: "6245d8c249e428cdbaa8d920",
        },
      ];
    },
    remove(id) {
      deleteScheme(id, "6245d8c249e428cdbaa8d920");
      this.userSchemeList = this.userSchemeList.filter(
        (scheme) => scheme._id !== id
      );
    },
    rename(id, newName) {
      renameScheme(id, "6245d8c249e428cdbaa8d920", newName);
      this.userSchemeList = this.userSchemeList.map((scheme) => {
        if (scheme._id === id) {
          return Object.assign({}, scheme, { name: newName });
        }
        return scheme;
      });
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
</style>
