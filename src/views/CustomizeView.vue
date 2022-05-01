/* eslint-disable vue/multi-word-component-names */
<script>
import CustomizeForm from "@/components/CustomizeForm.vue";

export default {
  components: {
    CustomizeForm,
  },
  methods: {
    emitColor(color, field) {
      this.$emit("change-color", color, field);
    },
  },
  emits: ["change-color"],
  props: {
    textPrimary: String,
    textSecondary: String,
    bgPrimary: String,
    bgSecondary: String,
    tertiary: String,
  },
};
</script>

<template>
  <div class="customization-view">
    <CustomizeForm
      @change-color="emitColor"
      v-bind:textPrimary="textPrimary"
      v-bind:textSecondary="textSecondary"
      v-bind:bgPrimary="bgPrimary"
      v-bind:bgSecondary="bgSecondary"
      v-bind:tertiary="tertiary"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/customizeView.scss";
</style>
