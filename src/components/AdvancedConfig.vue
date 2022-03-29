<script>
import { getColorSchemes } from "@/services/colorApiService.js";

export default {
  methods: {
    async getScheme() {
      if (!this.firstColor && !this.secondColor) {
        return;
      }
      if (
        (this.firstColor && !/[0-9A-F]{6}$/i.test(this.firstColor)) ||
        (this.secondColor && !/[0-9A-F]{6}$/i.test(this.secondColor))
      ) {
        return;
      }
      if (!this.isSelected) {
        this.isLoading = true;
        await getColorSchemes(
          [this.firstColor, this.secondColor],
          this.logic
        ).then((res) => {
          this.colorArr = res;
          this.isLoading = false;
          this.isSelected = true;
        });
      }
      if (this.colorArr) {
        if (this.colorArr.length <= 0) {
          return;
        }
        if (this.counter >= this.colorArr.length) {
          this.counter = 0;
        }
        const currScheme = this.colorArr[this.counter].colors.map(
          (color) => "#" + color
        );
        this.$emit("change-scheme", currScheme);
        this.counter++;
      }
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
      if (!this.colorArr) {
        return "Error fetching color schemes";
      } else if (this.isLoading) {
        return "Loading color schemes...";
      } else if (!this.firstColor && !this.secondColor) {
        return "Input a 6 digit hex code to query";
      } else if (
        (this.firstColor && !/[0-9A-F]{6}$/i.test(this.firstColor)) ||
        (this.secondColor && !/[0-9A-F]{6}$/i.test(this.secondColor))
      ) {
        return "Hex code should contain exactly 6 characters and exclude special characters";
      } else if (!this.isSelected) {
        return "Click on find schemes to apply search";
      } else if (this.colorArr.length <= 0 && this.secondColor) {
        return `No schemes found for this color combination.`;
      } else if (this.colorArr.length <= 0) {
        return `No schemes found for this color.`;
      } else if (this.colorArr.length >= 100) {
        return `More than 100 color schemes found. Currently displaying scheme number ${this.counter}.`;
      } else if (this.colorArr.length === 1) {
        return `One scheme found for this color.`;
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
    <div>
      <div class="color-container">
        <label>Color 1</label>
        <input
          type="text"
          @input="resetSelected"
          v-model="firstColor"
          placeholder="000000"
        />
      </div>
      <div class="color-container" v-if="secondColor">
        <div
          class="toggle-container"
          :class="{ toggled: logic === 'OR' }"
          @click="toggleLogic"
        >
          <div class="toggle-btn"></div>
        </div>
      </div>
      <div class="color-container" v-if="firstColor">
        <label>Color 2 (optional)</label>
        <input
          type="text"
          @input="resetSelected"
          v-model="secondColor"
          placeholder="FFFFFF"
        />
      </div>
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
