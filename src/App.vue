<template>
  <div>
    <HomeHeader @toggle-export-modal="toggleExportModal" @create="create" />
    <GenerateColor @change-scheme="changeScheme" />
    <CustomizationView
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
    <UserSchemesView
      @remove="remove"
      @apply="changeScheme"
      @rename="rename"
      :schemeList="userSchemeList"
    />
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import GenerateColor from "./components/GenerateScheme.vue";
import CustomizationView from "./views/CustomizationView.vue";
import InvertColors from "./components/InvertColors.vue";
import ExportModal from "./components/ExportModal.vue";
import AdvancedConfig from "./components/AdvancedConfig.vue";
import HomeFooter from "./components/HomeFooter.vue";
import UserSchemesView from "./views/UserSchemesView.vue";
import {
  getSavedSchemes,
  createScheme,
  deleteScheme,
  renameScheme,
} from "./services/colorApiService.js";

const rootScheme = document.querySelector(":root");

export default {
  components: {
    HomeHeader,
    GenerateColor,
    CustomizationView,
    InvertColors,
    ExportModal,
    AdvancedConfig,
    HomeFooter,
    UserSchemesView,
  },
  data: () => ({
    textPrimary: localStorage.getItem("text-primary"),
    textSecondary: localStorage.getItem("text-secondary"),
    bgPrimary: localStorage.getItem("bg-primary"),
    bgSecondary: localStorage.getItem("bg-secondary"),
    tertiary: localStorage.getItem("tertiary"),
    exportModalIsActive: false,
    userSchemeList: [],
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
      } else if (field === "--tertiary") {
        this.tertiary = color;
      }
      rootScheme.style.setProperty(field, color);
    },
    changeScheme(colorArr) {
      this.changeColor(colorArr[0], "--text-primary");
      this.changeColor(colorArr[1], "--text-secondary");
      this.changeColor(colorArr[2], "--bg-primary");
      this.changeColor(colorArr[3], "--bg-secondary");
      this.changeColor(colorArr[4], "--tertiary");
    },
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
    emitApply(colors) {
      this.$emit("apply", colors);
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
  mounted() {
    getSavedSchemes("6245d8c249e428cdbaa8d920").then(
      (data) => (this.userSchemeList = data)
    );
  },
};
</script>

<style>
@import "@/assets/styles/main.css";
</style>
