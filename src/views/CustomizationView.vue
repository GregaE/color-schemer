<script>
import CustomizeForm from "@/components/CustomizeForm.vue";

export default {
  components: {
    CustomizeForm,
  },
  methods: {
    greet(name) {
      console.log("its working!", name);
    },
  },
  emits: ["change-color"],
};
</script>

<template>
  <div>
    <h1>Customize</h1>
    <CustomizeForm
      @hello="greet"
      @change-color="$emit('change-color', color, field)"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
