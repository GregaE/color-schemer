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
  emits: ["change-color", "hello"],
};
</script>

<template>
  <div class="customization-view">
    <CustomizeForm @change-color="emitColor" />
  </div>
</template>

<style scoped>
@import "@/assets/styles/customizeView.css";
</style>
