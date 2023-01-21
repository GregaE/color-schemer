<script>
import { mapActions } from "vuex";
import { getColorSchemes } from "@/services/colorApiService.js";
import Button from "@/components/ui/Button/Button.vue";

export default {
  components: {
    Button,
  },
  methods: {
    ...mapActions(["setScheme"]),
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
        this.setScheme(currScheme);
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
      <TransitionGroup>
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
      </TransitionGroup>
    </div>
    <div>
      {{ this.displayResults() }}
    </div>
    <Button @click="getScheme" variant="secondary">
      {{ isSelected ? "Next Scheme" : "Find Schemes" }}
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.advanced-config {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: height 1s;

  .color-container {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    label {
      align-self: start;
    }
  }

  .toggle-container {
    position: relative;
    width: 6.5rem;
    height: 2.6rem;
    border-radius: 100rem;
    background-color: var(--bg-secondary);
    color: var(--text-secondary);
    font-weight: bold;
    cursor: pointer;
    margin-top: 0.5rem;
    z-index: 1;
    &:before {
      position: absolute;
      top: 50%;
      margin-top: -0.6rem;
      margin-left: 0.9rem;
      line-height: 1;
      content: "OR";
      opacity: 0;
      transition: 0.5s;
      z-index: -1;
    }

    &:after {
      position: absolute;
      top: 50%;
      margin-top: -0.6rem;
      margin-left: 3rem;
      line-height: 1;
      content: "AND";
      opacity: 1;
      transition: 0.5s;
      z-index: -1;
    }
  }

  .toggle-btn {
    position: relative;
    left: 0.4rem;
    top: 0.25rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 100rem;
    background-color: var(--text-primary);
    transition: 0.5s;
  }

  .toggled:before {
    opacity: 1;
  }

  .toggled:after {
    opacity: 0;
  }

  .toggled .toggle-btn {
    margin-left: 3.6rem;
    background-color: var(--text-secondary);
  }
}

.v-enter-active {
  transition: all 2s ease;
}

.v-leave-active {
  transition: all 2s ease;
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-3rem);
}

.v-move {
  transition: all 2s ease;
}
</style>
