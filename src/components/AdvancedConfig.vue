<script>
import { getColorScheme } from "@/services/colrApiService.js";

export default {
  methods: {
    getScheme() {
      getColorScheme([this.firstColor, this.secondColor], this.logic)
        .then((res) => res.map((color) => "#" + color))
        .then((res) => {
          res.length > 3
            ? this.$emit("change-scheme", res)
            : this.getColorScheme();
        });
    },
    toggleLogic() {
      this.logic === "AND" ? (this.logic = "OR") : (this.logic = "AND");
      this.counter = 0;
    },
  },
  data: () => ({
    firstColor: "",
    secondColor: "",
    logic: "AND",
    counter: 0,
  }),
};
</script>

<template>
  <div class="advanced-config">
    <h1>Advanced Settings</h1>
    <div>
      <button id="logic-toggle" @click="toggleLogic">{{ logic }}</button>
    </div>
    <div>
      <input v-model="firstColor" />
      <input v-model="secondColor" />
    </div>
    <button @click="getScheme">Generate Scheme</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/advancedConfig.css";
</style>
