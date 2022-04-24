<script>
export default {
  data: () => ({
    nameInput: "",
  }),
  emits: ["create", "deactivate"],
  methods: {
    saveScheme() {
      event.preventDefault();
      this.$emit("create", this.nameInput);
      this.$emit("deactivate");
    },
  },
};
</script>

<template>
  <form @submit="saveScheme">
    <label for="scheme-name">Scheme Name</label>
    <input id="scheme-name" v-model="nameInput" />
    <button type="submit">Save Scheme</button>
    {{ this.textPrimary }}
  </form>
</template>

<style scoped>
@import "@/assets/styles/components/saveModal.css";
</style>
