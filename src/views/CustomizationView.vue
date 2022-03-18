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
    />
  </div>
</template>

<style scoped>
@import "@/assets/styles/customizeView.css";
</style>
