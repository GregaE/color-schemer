<script>
import { createScheme } from "../services/colorApiService.js";

export default {
  data: () => ({
    nameInput: "",
  }),
  methods: {
    saveScheme() {
      event.preventDefault();
      createScheme(
        this.nameInput,
        [
          localStorage.getItem("text-primary"),
          localStorage.getItem("text-secondary"),
          localStorage.getItem("bg-primary"),
          localStorage.getItem("bg-secondary"),
          localStorage.getItem("tertiary"),
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
    {{ this.textPrimary }}
  </form>
</template>

<style scoped>
@import "@/assets/styles/components/saveModal.css";
</style>
