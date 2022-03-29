<script>
export default {
  methods: {
    invertText() {
      this.$emit("change-scheme", [
        this.textSecondary,
        this.textPrimary,
        this.bgPrimary,
        this.bgSecondary,
        this.tertiary,
      ]);
    },
    invertBg() {
      this.$emit("change-scheme", [
        this.textPrimary,
        this.textSecondary,
        this.bgSecondary,
        this.bgPrimary,
        this.tertiary,
      ]);
    },
  },
  props: {
    textPrimary: String,
    textSecondary: String,
    bgPrimary: String,
    bgSecondary: String,
    tertiary: String,
  },
};
</script>

<template>
  <div class="invert-colors">
    <button @click="invertText">Invert Text</button>
    <button @click="invertBg">Invert Background</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/invertColors.css";
</style>
