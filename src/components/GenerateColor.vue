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
    <button @click="getScheme">Generate Scheme</button>
  </div>
</template>

<style scoped></style>
