<script>
import { getRandomColorScheme } from "@/services/colorApiService.js";

export default {
  methods: {
    getScheme() {
      getRandomColorScheme()
        .then((res) => res.map((color) => "#" + color))
        .then((res) => {
          res.length > 3 ? this.$emit("change-scheme", res) : this.getScheme();
        });
    },
  },
};
</script>

<template>
  <div class="generate-scheme">
    <h1>Color Schemer</h1>
    <button @click="getScheme">Generate Random Scheme</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/generateScheme.css";
</style>
