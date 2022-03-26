<script>
import { getColorSchemes } from "@/services/colorApiService.js";

export default {
  methods: {
    async getScheme() {
      if (!this.firstColor && !this.secondColor) {
        return;
      }
      if (!this.isSelected) {
        this.isLoading = true;
        await getColorSchemes(
          [this.firstColor, this.secondColor],
          this.logic
        ).then((res) => {
          this.colorArr = res;
          console.log(this.colorArr);
          this.isLoading = false;
          this.isSelected = true;
        });
      }
      console.log(this.counter, this.colorArr);
      if (this.counter >= this.colorArr.length) {
        this.resetSelected();
      }
      const currScheme = this.colorArr[this.counter].colors.map(
        (color) => "#" + color
      );
      this.$emit("change-scheme", currScheme);
      this.counter++;
    },
    toggleLogic() {
      this.logic === "AND" ? (this.logic = "OR") : (this.logic = "AND");
      this.resetSelected();
    },
    resetSelected() {
      this.counter = 0;
      this.isSelected = false;
    },
    displayResults() {
      if (this.isLoading) {
        return "Loading color schemes...";
      } else if (!this.firstColor && !this.secondColor) {
        return "Input a color to query";
      } else if (!this.isSelected) {
        return "Click on find schemes to apply search";
      } else if (this.colorArr.length >= 100) {
        return `More than 100 color schemes found. Currently displaying scheme number ${this.counter}.`;
      } else {
        return `${this.colorArr.length} color schemes found. Currently displaying scheme number ${this.counter}.`;
      }
    },
  },
  data: () => ({
    firstColor: "",
    secondColor: "",
    logic: "AND",
    counter: 0,
    colorArr: [],
    isSelected: false,
    isLoading: false,
  }),
};
</script>

<template>
  <div class="advanced-config" id="adv-config-anchor">
    <h1>Advanced Settings</h1>
    <h1>{{ counter }}</h1>
    <h1>{{ isLoading }}</h1>
    <h1>{{ colorArr.length }}</h1>
    <div>
      <button id="logic-toggle" @click="toggleLogic">{{ logic }}</button>
    </div>
    <div>
      <input type="text" @input="resetSelected" v-model="firstColor" />
      <input type="text" @input="resetSelected" v-model="secondColor" />
    </div>
    <div>
      {{ this.displayResults() }}
    </div>
    <button v-if="!isSelected" @click="getScheme">Find Schemes</button>
    <button v-if="isSelected" @click="getScheme">Next Scheme</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/advancedConfig.css";
</style>
