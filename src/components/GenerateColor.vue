<script>
// import { getRandomColorScheme } from "@/services/colrApiService.js";

export default {
  methods: {
    async getRandomColorScheme() {
      try {
        const scheme = await fetch(`https://www.colr.org/scheme/random/1`, {
          "Access-Control-Allow-Origin": "*",
        });
        console.log(scheme);
        return scheme.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div>
    <button @click="getRandomColorScheme">Generate Scheme</button>
  </div>
</template>

<style scoped></style>
