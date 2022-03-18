<script>
import { getRandomColorScheme } from "@/services/colrApiService.js";

export default {
  methods: {
    getScheme() {
      getRandomColorScheme().then((res) => {
        res.length > 3 ? this.$emit("change-scheme", res) : this.getScheme();
      });
    },
  },
};
</script>

<template>
  <div class="generate-scheme">
    <h1>Color Schemer</h1>
    <button @click="getScheme">Generate Scheme</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/generateColor.css";
</style>
