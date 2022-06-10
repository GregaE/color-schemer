<script>
import { mapActions } from "vuex";
import { getRandomColorScheme } from "@/services/colorApiService.js";
import Button from "@/components/ui/Button/Button.vue";

export default {
  components: {
    Button,
  },
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
    <Button @click="getScheme()" variant="tertiary">
      Generate Random Scheme
    </Button>
    <div class="sphere-container">
      <div class="sphere" />
      <div class="sphere-overlay" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/generateScheme.scss";
</style>
