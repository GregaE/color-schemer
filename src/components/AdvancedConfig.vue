<script>
import { getColorScheme } from "@/services/colorApiService.js";

export default {
  methods: {
    getScheme() {
      getColorScheme([this.firstColor, this.secondColor], this.logic)
        .then((res) => {
          console.log(res.length);
          if (this.counter >= res.length) {
            this.resetCounter();
          }
          return res[this.counter].colors.map((color) => "#" + color);
        })
        .then((res) => {
          console.log(res);
          this.$emit("change-scheme", res);
          this.counter++;
        });
    },
    toggleLogic() {
      this.logic === "AND" ? (this.logic = "OR") : (this.logic = "AND");
      this.resetCounter();
    },
    resetCounter() {
      this.counter = 0;
    },
  },
  data: () => ({
    firstColor: "ffffff6",
    secondColor: "",
    logic: "AND",
    counter: 0,
  }),
};
</script>

<template>
  <div class="advanced-config">
    <h1>Advanced Settings</h1>
    <h1>{{ counter }}</h1>
    <div>
      <button id="logic-toggle" @click="toggleLogic">{{ logic }}</button>
    </div>
    <div>
      <input @change="resetCounter" v-model="firstColor" />
      <input @change="resetCounter" v-model="secondColor" />
    </div>
    <button @click="getScheme">Generate Scheme</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/advancedConfig.css";
</style>
