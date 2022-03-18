<script>
import { getRandomColorScheme } from "@/services/colrApiService.js";

export default {
  methods: {
    getScheme() {
      getRandomColorScheme().then((res) => console.log(res));
    },
  },
};
</script>

<template>
  <div>
    <h1>Color Schemer</h1>
    <button @click="getScheme">Generate Scheme</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/generateColor.css";
</style>
