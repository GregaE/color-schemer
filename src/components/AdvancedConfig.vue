<script>
import { getColorScheme } from "@/services/colorApiService.js";

export default {
  methods: {
    getScheme() {
      this.isLoading = true;
      getColorScheme([this.firstColor, this.secondColor], this.logic)
        .then((res) => {
          console.log(res);
          this.scheme_count = res.length;
          if (this.counter >= this.scheme_count) {
            this.resetCounter();
          }
          return res[this.counter].colors.map((color) => "#" + color);
        })
        .then((res) => {
          this.$emit("change-scheme", res);
          this.counter++;
          this.isLoading = false;
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
    firstColor: "",
    secondColor: "",
    logic: "AND",
    counter: 0,
    scheme_count: "",
    isLoading: false,
  }),
};
</script>

<template>
  <div class="advanced-config" id="adv-config-anchor">
    <h1>Advanced Settings</h1>
    <h1>{{ counter }}</h1>
    <h1>{{ scheme_count }}</h1>
    <h1>{{ isLoading }}</h1>
    <div>
      <button id="logic-toggle" @click="toggleLogic">{{ logic }}</button>
    </div>
    <div>
      <input type="text" @change="resetCounter" v-model="firstColor" />
      <input type="text" @change="resetCounter" v-model="secondColor" />
    </div>
    <button @click="getScheme">Generate Scheme</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/advancedConfig.css";
</style>
