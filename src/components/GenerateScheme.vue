<script>
import { mapActions } from "vuex";
import { getRandomColorScheme } from "@/services/colorApiService.js";

export default {
  methods: {
    ...mapActions(["setScheme"]),
    getScheme() {
      getRandomColorScheme()
        .then((res) => res.map((color) => "#" + color))
        .then((res) => {
          res.length > 3 ? this.setScheme(res) : this.getScheme();
        });
    },
  },
};
</script>

<template>
  <div class="generate-scheme" id="home-anchor">
    <h1>Color Schemer</h1>
    <p>Find, manage and visualize your favourite color schemes</p>
    <button @click="getScheme()">Generate Random Scheme</button>
    <div class="sphere-container">
      <div class="sphere" />
      <div class="sphere-overlay" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/generateScheme.scss";
</style>
