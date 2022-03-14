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
  <div>
    <h1>Customize</h1>
    <CustomizeForm @change-color="emitColor" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
