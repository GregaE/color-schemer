<script>
import { createScheme } from "../services/colorApiService.js";

export default {
  inject: [
    "textPrimary",
    "textSecondary",
    "bgPrimary",
    "bgSecondary",
    "tertiary",
  ],
  data: () => ({
    nameInput: "",
  }),
  methods: {
    saveScheme() {
      event.preventDefault();
      createScheme(
        this.nameInput,
        [
          this.textPrimary,
          this.textSecondary,
          this.bgPrimary,
          this.bgSecondary,
          this.tertiary,
        ],
        "6245d8c249e428cdbaa8d920"
      );
      this.$emit("deactivate");
    },
  },
};
</script>

<template>
  <form @submit="saveScheme">
    <label for="scheme-name">Scheme Name</label>
    <input id="scheme-name" v-model="nameInput" />
    <button type="submit">Save Scheme</button>
  </form>
</template>

<style scoped>
@import "@/assets/styles/components/saveModal.css";
</style>
