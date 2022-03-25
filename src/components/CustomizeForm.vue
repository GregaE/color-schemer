<script>
export default {
  methods: {
    onChange(event, field) {
      this.$emit("change-color", event.target.value, field);
    },
  },
  props: {
    textPrimary: String,
    textSecondary: String,
    bgPrimary: String,
    bgSecondary: String,
  },
  watch: {
    textPrimary(newVal) {
      localStorage.setItem("text-primary", newVal);
    },
    textSecondary(newVal) {
      localStorage.setItem("text-secondary", newVal);
    },
    bgPrimary(newVal) {
      localStorage.setItem("bg-primary", newVal);
    },
    bgSecondary(newVal) {
      localStorage.setItem("bg-secondary", newVal);
    },
  },
};
</script>

<template>
  <form class="customize-form" id="customize-anchor">
    <h1>Customize</h1>
    <div>
      <div class="color-picker">
        <label for="textPrimary">Text primary</label>
        <div class="color-field">
          <div>{{ textPrimary }}</div>
          <input
            :value="textPrimary"
            type="color"
            id="textPrimary"
            @input="onChange($event, '--text-primary')"
          />
        </div>
      </div>
      <div class="color-picker">
        <label for="textSecondary">Text secondary</label>
        <div class="color-field">
          <div>{{ textSecondary }}</div>
          <input
            :value="textSecondary"
            type="color"
            id="textSecondary"
            @input="onChange($event, '--text-secondary')"
          />
        </div>
      </div>
      <div class="color-picker">
        <label for="bgPrimary">Background primary</label>
        <div class="color-field">
          <div>{{ bgPrimary }}</div>
          <input
            :value="bgPrimary"
            type="color"
            id="bgPrimary"
            @input="onChange($event, '--bg-primary')"
          />
        </div>
      </div>
      <div class="color-picker">
        <label for="bgSecondary">Background secondary</label>
        <div class="color-field">
          <div>{{ bgSecondary }}</div>
          <input
            :value="bgSecondary"
            type="color"
            id="bgSecondary"
            @input="onChange($event, '--bg-secondary')"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
@import "@/assets/styles/components/customizeForm.css";
</style>
